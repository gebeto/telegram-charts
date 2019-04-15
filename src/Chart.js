import { memo } from './utils';
import Mouse from './Utils/Mouse';
import { createAnimator } from './Utils/Animated';

import ControlsDrawer from './Drawers/Controls';
import LineChartDrawer from './Drawers/LineChart';
import DualLineChartDrawer from './Drawers/DualLineChart';

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
} from './utils';

export const uninf = (val) => (val === Infinity || val === -Infinity) ? 0 : val;

export const singleMin = set => Math.min.apply(null, set);
export const singleMax = set => Math.max.apply(null, set);
export const singleMinRange = (set, start, end) => Math.min.apply(null, set.slice(start, 1 + end));
export const singleMaxRange = (set, start, end) => Math.max.apply(null, set.slice(start, 1 + end));

export const flatMin = (arr) => Math.min.apply(null, arr.map(singleMin));
export const flatMax = (arr) => Math.max.apply(null, arr.map(singleMax));
export const flatMinRange = (arr, start, end) => Math.min.apply(null, arr.map(set => singleMinRange(set, start, end)));
export const flatMaxRange = (arr, start, end) => Math.max.apply(null, arr.map(set => singleMaxRange(set, start, end)));

// export const flatMaxSum = (arr, start, end) => arr.map(set => singleMax(set)).reduce((sum, el) => sum + el, 0);
// export const flatMaxSumRange = (arr, start, end) => arr.map(set => singleMaxRange(set, start, end)).reduce((sum, el) => sum + el, 0);


const zipSum = (arr) => {
	// console.log(arr.length);
	const res = new Array(arr[0].length).fill(0);
	let i, j
	for (i = 0; i < arr.length; i++) {
		for (j = 0; j < arr[i].length; j++) {
			res[j] += arr[i][j];
		}
	}
	return res;
}

export const flatMaxZipSum = (arr, start, end) => {
	return arr.map(set => singleMax(set));
};

export const flatMaxZipSumRange = (arr, start, end) => {
	return arr.map(set => singleMaxRange(set, start, end)).reduce((sum, el) => sum + el, 0);
};


function prepareYAxis(ys, data, config) {
	const items = ys.map(y => {
		const opacity = config.animator.createAnimation(1, 300);

		const item = {
			key: y[0],
			items: y.slice(1),
			enabled: true,
			opacity: opacity,
			scaling: {},
		};

		if (data.y_scaled) {
			item.scaling.minHeight = uninf(singleMin(item.items));
			item.scaling.maxHeight = uninf(singleMax(item.items));
			item.scaling.minHeightAnim = config.animator.createAnimation(0, 300);
			item.scaling.maxHeightAnim = config.animator.createAnimation(0, 300);
			item.scaling.normY = normalizeAnimated(config.animator, item.scaling.minHeight, item.scaling.maxHeight);
			item.scaling.normControlY = normalizeAnimated(config.animator, item.scaling.minHeight, item.scaling.maxHeight);

			item.scaling.updateMinMax = function updateMinMax(startIndex, endIndex) {
				item.scaling.minHeight = uninf(singleMinRange(item.items, startIndex, endIndex));
				item.scaling.maxHeight = uninf(singleMaxRange(item.items, startIndex, endIndex));
				item.scaling.minHeightAnim.play(item.scaling.minHeight);
				item.scaling.maxHeightAnim.play(item.scaling.maxHeight);
				item.scaling.normY.updateDelta(item.scaling.minHeight, item.scaling.maxHeight);
			}
		}

		return item;
	});

	if (!data.y_scaled) {
		const yyy = items.filter(y => y.enabled).map(y => y.items);
		const sharedScaling = {};

		if (data.stacked) {
			const min = 0;
			// const max = uninf(flatMaxZipSum(yyy));
			const max = uninf(singleMax(zipSum(yyy)));
			const minHeight = 0;
			const maxHeight = singleMaxRange(zipSum(yyy), min, max);
			const minHeightAnim = config.animator.createAnimation(0, 300);
			const maxHeightAnim = config.animator.createAnimation(0, 300);

			sharedScaling.minHeight = minHeight;
			sharedScaling.maxHeight = maxHeight;
			sharedScaling.minHeightAnim = minHeightAnim;
			sharedScaling.maxHeightAnim = maxHeightAnim;
			sharedScaling.normY = normalizeAnimated(config.animator, minHeight, maxHeight);
			sharedScaling.normControlY = normalizeAnimated(config.animator, 0, max);

			sharedScaling.updateMinMax = function updateMinMax(startIndex, endIndex) {
				const yyy = items.filter(y => y.enabled).map(y => y.items);
				sharedScaling.minHeight = 0;
				// sharedScaling.maxHeight = uninf(flatMaxZipSumRange(yyy, startIndex, endIndex));
				try {
					sharedScaling.maxHeight = uninf(singleMaxRange(zipSum(yyy), startIndex, endIndex));
				} catch(err) { return; }
				sharedScaling.minHeightAnim.play(sharedScaling.minHeight);
				sharedScaling.maxHeightAnim.play(sharedScaling.maxHeight);
				sharedScaling.normY.updateDelta(sharedScaling.minHeight, sharedScaling.maxHeight);

				const min = 0;
				// const max = uninf(flatMaxZipSum(yyy));
				const max = uninf(singleMax(zipSum(yyy)));
				sharedScaling.normControlY.updateDelta(min, max);
			};
		} else {
			const min = uninf(flatMin(yyy));
			const max = uninf(flatMax(yyy));
			const minHeight = flatMin(yyy, min, max);
			const maxHeight = flatMax(yyy, min, max);
			const minHeightAnim = config.animator.createAnimation(0, 300);
			const maxHeightAnim = config.animator.createAnimation(0, 300);

			sharedScaling.minHeight = minHeight;
			sharedScaling.maxHeight = maxHeight;
			sharedScaling.minHeightAnim = minHeightAnim;
			sharedScaling.maxHeightAnim = maxHeightAnim;
			sharedScaling.normY = normalizeAnimated(config.animator, minHeight, maxHeight);
			sharedScaling.normControlY = normalizeAnimated(config.animator, min, max);

			sharedScaling.updateMinMax = function updateMinMax(startIndex, endIndex) {
				const yyy = items.filter(y => y.enabled).map(y => y.items);
				sharedScaling.minHeight = uninf(flatMinRange(yyy, startIndex, endIndex));
				sharedScaling.maxHeight = uninf(flatMaxRange(yyy, startIndex, endIndex));
				sharedScaling.minHeightAnim.play(sharedScaling.minHeight);
				sharedScaling.maxHeightAnim.play(sharedScaling.maxHeight);
				sharedScaling.normY.updateDelta(sharedScaling.minHeight, sharedScaling.maxHeight);

				const min = uninf(flatMin(yyy));
				const max = uninf(flatMax(yyy));
				sharedScaling.normControlY.updateDelta(min, max);
			}
		}

		items.forEach(item => { item.scaling = sharedScaling; })
	}


	return {
		items: items,
	}
}


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


function Chart(OPTS, data, index) {
	// console.log('INIT', OPTS, data);
	// Init canvas
	let bounds = {
		left: 0,
		top: 0,
	}, w, h, normControl;

	// const container = createElement(document.body, 'div', 'chart');
	const container = createElement(window.CONTAINER, 'div', 'chart');
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
	const yAxis = prepareYAxis(ys, data, config);
	config.endIndex = xAxis.length;
	header.setSubtitle(`${xAxis[0].dateStringTitle} - ${xAxis[xAxis.length - 1].dateStringTitle}`)

	config.popup = createPopup(container, config, data, yAxis);
	const buttons = createButtons(container, config.animator, data, yAxis, () => {
		updateNorms();
	})
	config.buttons = buttons;
	const norm = { X: normalizeMemo(0, xAxis.length - 1) };

	function updateNorms() {
		const rStart = control.range[0];
		const rEnd = control.range[1];
		const startIndexRaw = rStart * xAxis.length;
		const startIndex = startIndexRaw < 0 ? 0 : Math.floor(startIndexRaw);
		const endIndexRaw = rEnd * xAxis.length;
		const endIndex = endIndexRaw > xAxis.length ? xAxis.length : Math.ceil(endIndexRaw);
		yAxis.items.forEach(y => y.scaling.updateMinMax(startIndex, endIndex));
		header.setSubtitle(`${xAxis[startIndex].dateStringTitle} - ${xAxis[endIndex - 1].dateStringTitle}`)
	};


	const control = {
		// range: [0.1, 0.9],
		range: [0.7, 1.0],
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
		config, control, ctx, norm, colors, ys, buttons, xAxis, yAxis,
		canvasBounds: bounds,
		normYKey: 'normY'
	};

	// console.log(OPTS);
	
	const drawChart = OPTS.drawChartFabric
		? OPTS.drawChartFabric(drawersArgs)
		: LineChartDrawer(drawersArgs);

	const drawControl = OPTS.drawControlFabric
		? OPTS.drawControlFabric({ ...drawersArgs, normYKey: 'normControlY' })
		: ControlsDrawer({ ...drawersArgs, normYKey: 'normControlY' });

	// console.log(drawChart, drawControl)

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