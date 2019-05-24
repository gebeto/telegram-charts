import { memo } from './utils';
import Mouse from './Utils/Mouse';
import { createAnimator } from './Utils/Animated';
import { prepareYAxis } from './Utils/YAxis';

import ControlsDrawer from './Drawers/Controls/LineControls';
import LineChartDrawer from './Drawers/Charts/LineChart';

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


function dateString(timestamp, index, arr) {
	const date = new Date(timestamp);
	return {
		dayString: `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}`,
		dateString: `${DAY_NAMES[date.getDay()]}, ${date.getDate()} ${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`,
		dateStringTitle: `${date.getDate()} ${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`,
		date: date,
		timestamp: timestamp,
	};
}


function Chart(OPTS, data, FABRIC) {
	const {
		container,
		index,
	} = OPTS;

	const title = data.title || OPTS.title || `Chart #${index + 1}`

	// Init canvas
	let bounds = {
		left: 0,
		top: 0,
	}, w, h, normControl;

	const canvasContainer = createElement(container, 'div', 'chart');
	const header = createHeader(canvasContainer, title, 'Hello world!');
	const canvas = createElement(canvasContainer, 'canvas', 'chart__canvas');
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

	config.popup = createPopup(canvasContainer, config, data, yAxis);
	const buttons = createButtons(canvasContainer, config.animator, data, yAxis, () => {
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
			if (config.zoomed && drawChartZoomed) {
				drawChartZoomed(SIDES_PADDING, 0, w - SIDES_PADDING2, CANVAS_HEIGHT - CONTROL_HEIGHT);
			} else {
				drawChart(SIDES_PADDING, 0, w - SIDES_PADDING2, CANVAS_HEIGHT - CONTROL_HEIGHT);
			}
		}

		if (config.shouldControlUpdate) {
			// console.log('update control', index);
			config.shouldControlUpdate = false;
			ctx.clearRect(0, CANVAS_HEIGHT - CONTROL_HEIGHT, w, CONTROL_HEIGHT);
			drawControl(SIDES_PADDING, CANVAS_HEIGHT - CONTROL_HEIGHT, w - SIDES_PADDING2, CONTROL_HEIGHT);
		}
	}

	config.popup.element.addEventListener('click', () => {
		if (!drawChartZoomed) return;
		config.zoomed = !config.zoomed;
		config.popup.hide();
		config.shouldChartUpdate = true;
	});

	window.addEventListener('resize', updateBounds);
	control.updateRange(control.range[0], control.range[1])
	updateBounds();
	updateNorms();

	const drawersArgs = {
		config, control, ctx, norm, colors, ys, buttons, xAxis, yAxis,
		canvasBounds: bounds,
		normYKey: 'normY'
	};

	// console.log(FABRIC);
	
	const drawChart = FABRIC.drawChartFabric(drawersArgs);
	const drawChartZoomed = FABRIC.drawZoomedChartFabric && FABRIC.drawZoomedChartFabric(drawersArgs);
	const drawControl = FABRIC.drawControlFabric({ ...drawersArgs, normYKey: 'normControlY' });

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