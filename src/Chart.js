import { memo } from './utils';
import Mouse from './Utils/Mouse';
import { createAnimator } from './Utils/Animated';

import ControlsDrawer from './Drawers/Controls';
import LineChartDrawer from './Drawers/LineChart';

import { createElement } from './UI/utils';
import { createPopup } from './UI/Popup';
import { createHeader } from './UI/Header';
import { createButtons } from './UI/Buttons';


import {
	CONTROL_HEIGHT,
	CANVAS_HEIGHT,
	SIDES_PADDING,
	SIDES_PADDING2,
	CHART_HEIGHT,
	PIXEL_RATIO,
	MONTH_NAMES,
	DAY_NAMES,
	FONT,
	AXIS_TEXT_WIDTH,
} from './Globals';

import {
	normalizeAnimated,
	normalizeMemo,
	normalize,
	throttle,
	// flatMinRange,
	// flatMaxRange,
	// flatMin,
	// flatMax,
} from './utils';

const uninf = (val) => (val === Infinity || val === -Infinity) ? 0 : val;
export const flatMax = (arr) => Math.max.apply(null, arr.map(set => Math.max.apply(null, set.slice(1))));
export const flatMin = (arr) => Math.min.apply(null, arr.map(set => Math.min.apply(null, set.slice(1))));
export const flatMaxRange = (arr, start, end) => Math.max.apply(null, arr.map(set => Math.max.apply(null, set.slice(1 + start, 1 + end))));
export const flatMinRange = (arr, start, end) => Math.min.apply(null, arr.map(set => Math.min.apply(null, set.slice(1 + start, 1 + end))));


function dateString(timestamp, index, arr) {
	const date = new Date(timestamp);
	return {
		dayString: `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}`,
		dateString: `${DAY_NAMES[date.getDay()]}, ${date.getDate()} ${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`,
		dateStringTitle: `${date.getDate()} ${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`,
		date: date,
		timestamp: timestamp,
	};
};


function Chart(data, index) {
	// Init canvas
	let bounds = {
		left: 0,
		top: 0,
	}, w, h, normControl;

	const container = createElement(document.body, 'div', 'chart');
	const header = createHeader(container, `Chart #${index + 1}`, 'Hello world!');
	const canvas = createElement(container, 'canvas', 'chart__canvas');
	const ctx = canvas.getContext('2d');
	const animator = createAnimator();

	const config = {
		index: index,
		shouldChartUpdate: true,
		shouldControlUpdate: true,
		animator: animator,
		mouse: Mouse({
			config: config,
			canvas: canvas,
			canvasBounds: bounds,
		}),
		maxHeight: 0,
		minHeight: 0,
		minHeightAnim: animator.createAnimation(0, 300),
		maxHeightAnim: animator.createAnimation(0, 300),
		startIndex: 0,
		endIndex: 0,
	};

	// Init data
	const colors = data.colors;
	const names = data.names;
	const types = data.types;

	data.columns[0] = data.columns[0].map(el => el.length ? el : dateString(el));
	const [[xAxisKey, ...xAxis], ...ys] = data.columns;
	config.endIndex = xAxis.length;
	header.setSubtitle(`${xAxis[0].dateStringTitle} - ${xAxis[xAxis.length - 1].dateStringTitle}`)

	config.popup = createPopup(container, config, data, ys);
	const buttons = createButtons(container, config.animator, data, ys, () => {
		updateNorms();
	})
	config.buttons = buttons;
	const filtered = ys.filter(y => buttons[y[0]].enabled);
	config.minHeight = uninf(flatMin(filtered));
	config.maxHeight = uninf(flatMax(filtered));
	config.minHeightAnim.play(config.minHeight);
	config.maxHeightAnim.play(config.maxHeight);

	const norm = {
		X: normalizeMemo(0, xAxis.length - 1),
		Y: normalizeAnimated(config.animator, config.minHeight, config.maxHeight)
	};

	const controlNorm = {
		X: normalizeMemo(0, xAxis.length - 1),
		Y: normalizeAnimated(config.animator, config.minHeight, config.maxHeight)
	};

	function updateNorms() {
		const rStart = control.range[0];
		const rEnd = control.range[1];
		const startIndexRaw = rStart * xAxis.length;
		const startIndex = startIndexRaw < 0 ? 0 : Math.floor(startIndexRaw);
		const endIndexRaw = rEnd * xAxis.length;
		const endIndex = endIndexRaw > xAxis.length ? xAxis.length : Math.ceil(endIndexRaw);

		const yyy = ys.filter(y => buttons[y[0]].enabled);
		// config.minHeight = uninf(flatMinRange(yyy, startIndex, endIndex));
		// config.maxHeight = uninf(flatMaxRange(yyy, startIndex, endIndex));
		config.minHeight = uninf(flatMinRange(yyy, startIndex, endIndex));
		config.maxHeight = uninf(flatMaxRange(yyy, startIndex, endIndex));
		config.minHeightAnim.play(config.minHeight);
		config.maxHeightAnim.play(config.maxHeight);
		norm.Y.updateDelta(config.minHeight, config.maxHeight);

		const min = uninf(flatMin(yyy));
		const max = uninf(flatMax(yyy));
		controlNorm.Y.updateDelta(min, max);

		header.setSubtitle(`${xAxis[startIndex].dateStringTitle} - ${xAxis[endIndex - 1].dateStringTitle}`)
		// config.startIndex = startIndex;
		// config.endIndex = endIndex;
	};


	const control = {
		range: [0.1, 0.9],
		count: 0,
		scale: 0,
		updateRange: function updateRange(start, end) {
			const scale = end - start;
			const count = xAxis.length * scale;
			if (count > 5) {
				control.count = Math.ceil(count);
				control.scale = scale;
				control.range[0] = start;
				control.range[1] = end;
				updateNorms();
			}
		},
		normalizeForControl: function normalizeForControl(xPos) {
			return normControl(xPos);
		},
	};

	function updateBounds() {
		const newBounds = canvas.getBoundingClientRect();
		const newWidth = newBounds.width * PIXEL_RATIO;
		const newHeight = newBounds.height * PIXEL_RATIO;

		bounds.width = newWidth;
		bounds.height = CANVAS_HEIGHT;
		bounds.left = newBounds.left;
		bounds.right = newBounds.right;
		bounds.top = newBounds.top;
		bounds.bottom = newBounds.bottom;
		bounds.x = newBounds.x;
		bounds.y = newBounds.y;

		if (w !== newWidth || h !== newHeight) {
			config.shouldChartUpdate = true;
			config.shouldControlUpdate = true;
			normControl = normalizeMemo(SIDES_PADDING2, bounds.width - SIDES_PADDING2);
			w = canvas.width = bounds.width;
			h = canvas.height = CANVAS_HEIGHT;
		}
	}

	function render(force) {
		updateBounds();
		const isActiveAnimations = config.animator.updateAnimations();
		if (isActiveAnimations) config.shouldChartUpdate = true

		if (config.shouldChartUpdate) {
			// console.log('update chart', index);
			config.shouldChartUpdate = false;
			ctx.clearRect(0, 0, w, CANVAS_HEIGHT - CONTROL_HEIGHT);
			drawChart(SIDES_PADDING, 0, w - SIDES_PADDING2, CANVAS_HEIGHT - CONTROL_HEIGHT);
		}

		if (config.shouldControlUpdate) {
			// console.log('update control', index);
			config.shouldControlUpdate = false;
			ctx.clearRect(0, CANVAS_HEIGHT - CONTROL_HEIGHT, w, CONTROL_HEIGHT);
			drawControl(SIDES_PADDING, CANVAS_HEIGHT - CONTROL_HEIGHT, w - SIDES_PADDING2, CONTROL_HEIGHT);
		}
	}

	window.addEventListener('resize', updateBounds);
	control.updateRange(control.range[0], control.range[1])
	updateBounds();
	updateNorms();

	const drawersArgs = {
		config, control, ctx, norm, colors, ys, buttons, xAxis,
		canvasBounds: bounds,
	};
	const drawChart = LineChartDrawer(drawersArgs);
	const drawControl = ControlsDrawer({ ...drawersArgs, norm: controlNorm });
	render()

	return {
		render: render,
		control: control,
		update() {
			config.shouldChartUpdate = true;
			config.shouldControlUpdate = true;
		}
	};
}


export default Chart;