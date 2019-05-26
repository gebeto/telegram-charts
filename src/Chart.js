// import Mouse from './Utils/Mouse';
import { createMouseForChart } from './Utils/Mouse';
import { createAnimator } from './Utils/Animated';
import { prepareDataset } from './Utils/YAxis';

import { createElement } from './UI/utils';
import { createPopup } from './UI/Popup';
import { createHeader } from './UI/Header';
import { createButtons } from './UI/Buttons';


import {
	CONTROL_HEIGHT,
	CANVAS_HEIGHT,
	SIDES_PADDING,
	SIDES_PADDING2,
	PIXEL_RATIO,
} from './Globals';

import {
	normalizeMemo,
	normalize,
	throttleLForceable,
} from './utils';


function createControl(drawControlFabric, drawersArgs, xAxis, onRangeUpdate) {
	const xAxisLength = xAxis.length;
	const drawControl = drawControlFabric(drawersArgs);
	const control = {
		range: [0.7, 1.0],
		count: 0,
		scale: 0,
		shouldUpdate: true,
		updateRange: function updateRange(start, end) {
			const scale = end - start;
			const count = xAxisLength * scale;
			if (count > 5) {
				// control.count = Math.ceil(count);
				control.count = (count >> 0) + 1;
				control.scale = scale;
				control.range[0] = start;
				control.range[1] = end;
				onRangeUpdate && onRangeUpdate();
			}
		},

		render: function render() {
			// console.log('update control', index);
			control.shouldUpdate = false;
			drawersArgs.ctx.clearRect(0, CANVAS_HEIGHT - CONTROL_HEIGHT, drawersArgs.canvasBounds.width, CONTROL_HEIGHT);
			drawControl(SIDES_PADDING, CANVAS_HEIGHT - CONTROL_HEIGHT, drawersArgs.canvasBounds.width - SIDES_PADDING2, CONTROL_HEIGHT);
		}
	};

	return control;
}

function createChart(drawChartFabric, drawersArgs) {
	const drawChart = drawChartFabric(drawersArgs);
	const chart = {
		shouldUpdate: false,

		render: function render() {
			chart.shouldUpdate = false;
			drawersArgs.ctx.clearRect(0, 0, drawersArgs.canvasBounds.width, CANVAS_HEIGHT - CONTROL_HEIGHT);
			drawChart(SIDES_PADDING, 0, drawersArgs.canvasBounds.width - SIDES_PADDING2, CANVAS_HEIGHT - CONTROL_HEIGHT);
		}
	};

	return chart;
}


function Chart(OPTS, data, FABRIC) {
	const {
		container,
		index,
	} = OPTS;

	// Init canvas
	let w, h, normControl;
	const title = data.title || OPTS.title || `Chart #${index + 1}`
	const canvasContainer = createElement(container, 'div', 'chart');
	const header = createHeader(canvasContainer, title, '');
	const canvas = createElement(canvasContainer, 'canvas', 'chart__canvas');

	const ctx = canvas.getContext('2d');
	const animator = createAnimator();

	const canvasBounds = {
		left: 0,
		top: 0,
	};
	const config = {
		index: index,
		animator: animator,
		mouse: createMouseForChart({ config, canvas, canvasBounds }),

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
			const rStart = config.control.range[0];
			const rEnd = config.control.range[1];
			
			const startIndexRaw = rStart * xAxis.length;
			const startIndex = startIndexRaw < 0 ? 0 : Math.floor(startIndexRaw);
			const endIndexRaw = rEnd * xAxis.length;
			const endIndex = endIndexRaw > xAxis.length ? xAxis.length : Math.ceil(endIndexRaw);
			yAxis.items.forEach(y => y.scaling.updateMinMax(startIndex, endIndex));
			header.setSubtitle(`${xAxis[startIndex].dateStringTitle} - ${xAxis[endIndex - 1].dateStringTitle}`)
		}
	, 100);

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

		if (canvasBounds.width !== newWidth || canvasBounds.height !== newHeight) {
			config.chart.shouldUpdate = true;
			config.control.shouldUpdate = true;
			normControl = normalizeMemo(SIDES_PADDING2, canvasBounds.width - SIDES_PADDING2);
			// normControl = normalize(SIDES_PADDING2, canvasBounds.width - SIDES_PADDING2);
			canvas.width = canvasBounds.width;
			canvas.height = CANVAS_HEIGHT;
		}
	}

	function render() {
		updateBounds();
		const isActiveAnimations = config.animator.updateAnimations();
		if (isActiveAnimations) config.chart.shouldUpdate = true

		config.chart.shouldUpdate && config.chart.render();
		config.control.shouldUpdate && config.control.render();
	}

	// config.popup.element.addEventListener('click', () => {
	// 	if (!drawChartZoomed) return;
	// 	config.zoomed = !config.zoomed;
	// 	config.popup.hide();
	// 	config.chart.shouldUpdate = true;
	// });

	const drawersArgs = {
		config, ctx, colors, xAxis, yAxis, canvasBounds,
		normYKey: 'normY'
	};
	const drawersArgsControl = {
		...drawersArgs,
		normYKey: 'normControlY'
	};

	config.chart = createChart(FABRIC.drawChartFabric, drawersArgs);
	config.control = createControl(FABRIC.drawControlFabric, drawersArgsControl, xAxis, () => updateNorms())

	window.addEventListener('resize', updateBounds);
	config.control.updateRange(config.control.range[0], config.control.range[1])
	updateBounds();
	updateNorms(true);
	render()

	return {
		render: render,
		control: config.control,
		chart: config.chart,
		update() {
			config.chart.shouldUpdate = true;
			config.control.shouldUpdate = true;
		}
	};
}


export default Chart;