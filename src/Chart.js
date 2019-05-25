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
	throttleL,
	throttleLForceable,
	debounce,
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


function prepareDataset(data, config) {
	const { title, columns, types, colors, names } = data; // main data
	const { percentage, stacked, y_scaled } = data; // options


	const [[xAxisKey, ...rawXAxis], ...rawYAxisList] = columns;
	const xAxis = rawXAxis.map(el => dateString(el));
	const yAxis = prepareYAxis(rawYAxisList, data, config)

	return {
		title, columns, types, colors, names,
		xAxis, yAxis,
	};
}


function createControl(xAxis, onRangeUpdate) {
	const control = {
		range: [0.7, 1.0],
		count: 0,
		scale: 0,
		updateRange: function updateRange(start, end) {
			const scale = end - start;
			const count = xAxis.length * scale;
			if (count > 5) {
				// control.count = Math.ceil(count);
				control.count = (count >> 0) + 1;
				control.scale = scale;
				control.range[0] = start;
				control.range[1] = end;
				onRangeUpdate && onRangeUpdate();
			}
		},
	};

	return control;
}


function Chart(OPTS, data, FABRIC) {
	const {
		container,
		index,
	} = OPTS;

	const title = data.title || OPTS.title || `Chart #${index + 1}`

	// Init canvas
	let w, h, normControl;
	const canvasBounds = {
		left: 0,
		top: 0,
	};

	const canvasContainer = createElement(container, 'div', 'chart');
	const header = createHeader(canvasContainer, title, '');
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
			canvasBounds: canvasBounds,
		}),

		popup: {},

		normalizeForControl: function normalizeForControl(xPos) {
			return normControl(xPos);
		}
	};

	// Init data
	const {
		columns, types, colors, names,
		xAxis,
		yAxis,
	} = prepareDataset(data, config);

	config.scaleX = normalize(0, xAxis.length - 1)(1);

	config.popup = createPopup(canvasContainer, config, data, xAxis, yAxis);
	if (yAxis.items.length > 1) {
		const buttons = createButtons(canvasContainer, config.animator, data, yAxis, () => {
			updateNorms(true);
		});
	}

	const updateNorms = throttleLForceable(
		function updateNorms() {
			const rStart = control.range[0];
			const rEnd = control.range[1];
			
			const startIndexRaw = rStart * xAxis.length;
			const startIndex = startIndexRaw < 0 ? 0 : Math.floor(startIndexRaw);
			const endIndexRaw = rEnd * xAxis.length;
			const endIndex = endIndexRaw > xAxis.length ? xAxis.length : Math.ceil(endIndexRaw);
			yAxis.items.forEach(y => y.scaling.updateMinMax(startIndex, endIndex));
			header.setSubtitle(`${xAxis[startIndex].dateStringTitle} - ${xAxis[endIndex - 1].dateStringTitle}`)
		}
	, 100);

	const control = createControl(xAxis, () => updateNorms());

	function updateBounds() {
		// console.log('BOUNDS')
		const newBounds = canvas.getBoundingClientRect();
		const newWidth = newBounds.width * PIXEL_RATIO;
		const newHeight = newBounds.height * PIXEL_RATIO;

		canvasBounds.width = newWidth;
		canvasBounds.height = CANVAS_HEIGHT;
		canvasBounds.left = newBounds.left;
		canvasBounds.right = newBounds.right;
		canvasBounds.top = newBounds.top;
		canvasBounds.bottom = newBounds.bottom;
		canvasBounds.x = newBounds.x;
		canvasBounds.y = newBounds.y;

		if (w !== newWidth || h !== newHeight) {
			config.shouldChartUpdate = true;
			config.shouldControlUpdate = true;
			normControl = normalizeMemo(SIDES_PADDING2, canvasBounds.width - SIDES_PADDING2);
			// normControl = normalize(SIDES_PADDING2, canvasBounds.width - SIDES_PADDING2);
			w = canvas.width = canvasBounds.width;
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

	// config.popup.element.addEventListener('click', () => {
	// 	if (!drawChartZoomed) return;
	// 	config.zoomed = !config.zoomed;
	// 	config.popup.hide();
	// 	config.shouldChartUpdate = true;
	// });

	window.addEventListener('resize', updateBounds);
	control.updateRange(control.range[0], control.range[1])
	updateBounds();
	updateNorms(true);

	const drawersArgs = {
		config, control, ctx,
		colors, xAxis, yAxis,
		canvasBounds,
		normYKey: 'normY'
	};
	const drawersArgsControl = {
		...drawersArgs,
		normYKey: 'normControlY'
	};

	const drawChart = FABRIC.drawChartFabric(drawersArgs);
	const drawChartZoomed = FABRIC.drawZoomedChartFabric && FABRIC.drawZoomedChartFabric(drawersArgs);
	const drawControl = FABRIC.drawControlFabric(drawersArgsControl);

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