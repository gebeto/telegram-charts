import { memo } from './utils';
import Mouse from './Utils/Mouse';
import { createAnimator } from './Utils/Animated';

import ControlsDrawer from './Drawers/Controls';
import LineChartDrawer from './Drawers/LineChart';

import { createPopup, createElement } from './Popup';


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
} from './Globals';

import {
	normalizeAnimated,
	normalizeMemo,
	flatMinRange,
	flatMaxRange,
	normalize,
	flatMin,
	flatMax,
	throttle,
} from './utils';


function dateString(timestamp) {
	const date = new Date(timestamp);
	return {
		dayString: `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}`,
		dateString: `${DAY_NAMES[date.getDay()]}, ${date.getDate()} ${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`,
		// Sat, 20 Apr 2019
		date: date,
		timestamp: timestamp,
	};
};


function Chart(data, index) {
	// Init canvas
	let bounds = {
		left: 0,
		top: 0,
	}, w, h, normCanvas;

	const container = createElement(document.body, 'div', 'chart');
	const title = createElement(container, 'h2', 'chart__title');
	title.textContent = `Chart #${index + 1}`;
	const canvas = createElement(container, 'canvas', 'chart__canvas');
	const ctx = canvas.getContext('2d');

	const config = {
		index: index,
		shouldChartUpdate: true,
		shouldControlUpdate: true,
		animator: createAnimator(),
		mouse: Mouse({
			config: config,
			canvas: canvas,
			canvasBounds: bounds,
		}),
		maxHeight: 0,
		minHeight: 0,
	};

	// Init data
	const colors = data.colors;
	const names = data.names;
	const types = data.types;
	data.columns[0] = data.columns[0].map(el => el.length ? el : dateString(el))
	const [[xkey, ...xs], ...ys] = data.columns;
	config.maxHeight = flatMax(ys);
	config.minHeight = flatMin(ys);

	config.popup = createPopup(container, data, ys);

	const norm = {
		X: normalizeMemo(0, xs.length - 1),
		Y: normalizeAnimated(config.animator, config.minHeight, config.maxHeight)
	};
	const controlNorm = {
		X: normalizeMemo(0, xs.length - 1),
		Y: normalizeMemo(config.minHeight, config.maxHeight)
	};

	function updateNorms() {
		const rStart = control.range[0];
		const rEnd = control.range[1];
		const startIndexRaw = rStart * xs.length - 1;
		const startIndex = startIndexRaw < 0 ? 0 : Math.floor(startIndexRaw);
		const endIndexRaw = rEnd * xs.length + 3;
		const endIndex = endIndexRaw > xs.length ? xs.length : Math.round(endIndexRaw);

		config.minHeight = flatMinRange(ys, startIndex, endIndex + 1);
		config.maxHeight = flatMaxRange(ys, startIndex, endIndex + 1);
		norm.Y.updateDelta(config.minHeight, config.maxHeight + 1);

		config.startIndex = startIndex;
		config.endIndex = endIndex;
	};


	const control = {
		range: [0.1, 0.9],
		updateRange: function updateRange(index, value) {
			const secIndex = index === 0 ? 1 : 0;

			if (index === 0 && value < control.range[1] - 0.1) {
				control.range[index] = value;
			} else if (index === 1 && value > control.range[0] + 0.1) {
				control.range[index] = value;
			}
			updateNorms();
		},
		updateFullRange: function updateFullRange(start, end) {
			control.range[0] = start;
			control.range[1] = end;
			updateNorms();
		},
		normalizeForCanvas: function normalizeForCanvas(xPos) {
			return normCanvas(xPos);
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
			normCanvas = normalizeMemo(SIDES_PADDING2, bounds.width - SIDES_PADDING2);
			w = canvas.width = bounds.width;
			h = canvas.height = CANVAS_HEIGHT;
		}
	}

	const drawersArgs = {
		config, control, ctx, norm, colors, ys, xs,
		canvasBounds: bounds,
	};

	const drawChart = LineChartDrawer(drawersArgs);
	const drawControl = ControlsDrawer({ ...drawersArgs, norm: controlNorm });

	function render(force) {
		updateBounds();
		const isActiveAnimations = config.animator.updateAnimations();
		if (isActiveAnimations) config.shouldChartUpdate = true;

		if (config.shouldChartUpdate) {
			config.shouldChartUpdate = false;
			ctx.clearRect(0, 0, w, CANVAS_HEIGHT - CONTROL_HEIGHT);
			drawChart(SIDES_PADDING, 0, w - SIDES_PADDING2, CANVAS_HEIGHT - CONTROL_HEIGHT);
		}

		if (config.shouldControlUpdate) {
			config.shouldControlUpdate = false;
			ctx.clearRect(0, CANVAS_HEIGHT - CONTROL_HEIGHT, w, CONTROL_HEIGHT);
			drawControl(SIDES_PADDING, CANVAS_HEIGHT - CONTROL_HEIGHT, w - SIDES_PADDING2, CONTROL_HEIGHT);
		}
	}

	window.addEventListener('resize', updateBounds);
	updateBounds();
	updateNorms()
	render()

	return {
		updateRange: control.updateRange,
		render: render,
		control: control,
	};
}


export default Chart;