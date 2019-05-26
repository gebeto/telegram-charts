// import Mouse from './Utils/Mouse';
import { createMouseForChart } from './Utils/Mouse';
import { createAnimator } from './Utils/Animated';
import { prepareDataset, dateString } from './Utils/YAxis';

import { createElement } from './UI/utils';
import { createPopup } from './UI/Popup';
import { createHeader } from './UI/Header';
import { createButtons } from './UI/Buttons';

import { fabricByDatasource } from './ChartTypes';


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


function createControl(config, drawControlFabric, drawersArgs, onRangeUpdate) {
	const drawControl = drawControlFabric(drawersArgs);
	const control = {
		range: [0.7, 1.0],
		count: 0,
		scale: 0,
		shouldUpdate: true,

		destroy: function destroy() {
			drawControl.destroy();
		},

		init: function init() {
			drawControl.init();
		},

		updateRange: function updateRange(start, end) {
			const scale = end - start;
			const count = config.data.xAxis.length * scale;
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
			config.ctx.clearRect(0, CANVAS_HEIGHT - CONTROL_HEIGHT, config.canvasBounds.width, CONTROL_HEIGHT);
			drawControl(SIDES_PADDING, CANVAS_HEIGHT - CONTROL_HEIGHT, config.canvasBounds.width - SIDES_PADDING2, CONTROL_HEIGHT);
		}
	};

	return control;
}

function createChart(config, drawChartFabric, drawersArgs) {
	const drawChart = drawChartFabric(drawersArgs);
	const chart = {
		shouldUpdate: false,

		destroy: function destroy() {
			drawChart.destroy();
		},

		init: function init() {
			drawChart.init();
		},

		render: function render() {
			// console.log('update chart', index);
			chart.shouldUpdate = false;
			config.ctx.clearRect(0, 0, config.canvasBounds.width, CANVAS_HEIGHT - CONTROL_HEIGHT);
			drawChart(SIDES_PADDING, 0, config.canvasBounds.width - SIDES_PADDING2, CANVAS_HEIGHT - CONTROL_HEIGHT);
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

	const config = {
		canvas: canvas,
		ctx: ctx,
		zoomed: false,
		index: index,
		animator: animator,
		canvasBounds: { left: 0, top: 0 },
		mouse: null,
		normalizeForControl: function normalizeForControl(xPos) {
			return normControl(xPos);
		},

		popup: {},
		buttons: null,
		chart: null,
		control: null,
		scaleX: 0,
	};

	config.mouse = createMouseForChart(config);
	config.data = prepareDataset(data, config);
	config.scaleX = normalize(0, config.data.xAxis.length - 1)(1);
	config.popup = createPopup(canvasContainer, config);

	if (config.data.yAxis.items.length > 1) {
		config.buttons = createButtons(canvasContainer, config, () => {
			updateNorms(true);
		});
	}

	const updateNorms = throttleLForceable(
		function updateNorms() {
			const rStart = config.control.range[0];
			const rEnd = config.control.range[1];
			
			const startIndexRaw = rStart * config.data.xAxis.length;
			const startIndex = startIndexRaw < 0 ? 0 : Math.floor(startIndexRaw);
			const endIndexRaw = rEnd * config.data.xAxis.length;
			const endIndex = endIndexRaw > config.data.xAxis.length ? config.data.xAxis.length : Math.ceil(endIndexRaw);
			config.data.yAxis.items.forEach(y => y.scaling.updateMinMax(startIndex, endIndex));
			header.setSubtitle(`${config.data.xAxis[startIndex].dateStringTitle} - ${config.data.xAxis[endIndex - 1].dateStringTitle}`)
		}
	, 100);

	function updateBounds() {
		// console.log('BOUNDS')
		const newBounds = canvas.getBoundingClientRect();
		const newWidth = newBounds.width * PIXEL_RATIO;
		const newHeight = newBounds.height * PIXEL_RATIO;

		config.canvasBounds.width = newWidth;
		config.canvasBounds.height = CANVAS_HEIGHT;
		config.canvasBounds.left = newBounds.left;
		config.canvasBounds.right = newBounds.right;
		config.canvasBounds.top = newBounds.top;
		config.canvasBounds.bottom = newBounds.bottom;
		config.canvasBounds.x = newBounds.x;
		config.canvasBounds.y = newBounds.y;

		if (config.canvasBounds.width !== newWidth || config.canvasBounds.height !== newHeight) {
			config.chart.shouldUpdate = true;
			config.control.shouldUpdate = true;
			normControl = normalizeMemo(SIDES_PADDING2, config.canvasBounds.width - SIDES_PADDING2);
			canvas.width = config.canvasBounds.width;
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

	const bak = {};

	function zoomOut() {
		if (config.zoomed) {
			config.popup.hide();
			config.buttons.destroy();
			config.chart.destroy();
			config.control.destroy();
			delete config.chart;
			delete config.control;

			config.data = bak.data;
			config.scaleX = normalize(0, config.data.xAxis.length - 1)(1);
			config.buttons = bak.buttons;
			config.chart = bak.chart;
			config.control = bak.control;

			config.buttons.init();
			config.chart.init();
			config.control.init();
			config.chart.shouldUpdate = true;
			config.control.shouldUpdate = true;
			config.zoomed = false;
			header.unfreezeSubtitle();
			header.setTitle(title);
			init();
			return;
		}
	}

	function zoomIn(timestamp) {
		if (!config.data.x_on_zoom) return;
		const dataRequested = config.data.x_on_zoom(timestamp);
		if (!dataRequested) {
			console.warn("'x_on_zoom' should return promise with data");
		} else if (!dataRequested.then) {
			console.warn("'x_on_zoom' should return promise with data");
		} else if (dataRequested.then) {
			dataRequested.then(data => {
				const fabric = fabricByDatasource(data, true);

				config.popup.hide();
				config.buttons.destroy();
				config.chart.destroy();
				config.control.destroy();

				bak.buttons = config.buttons;
				bak.chart = config.chart;
				bak.control = config.control;
				bak.popup = config.popup;
				bak.data = config.data;

				config.data = prepareDataset(data, config);
				config.scaleX = normalize(0, config.data.xAxis.length - 1)(1);
				config.buttons = createButtons(canvasContainer, config, () => updateNorms(true));
				config.chart = createChart(config, fabric.drawChartFabric, { ...drawersArgs, config });
				config.control = createControl(config, fabric.drawControlFabric, { ...drawersArgsControl, config }, () => updateNorms())
				header.setSubtitle(dateString(timestamp).dateString);
				header.freezeSubtitle();
				init();

				config.chart.shouldUpdate = true;
				config.control.shouldUpdate = true;
				config.zoomed = true;
				header.setTitleButton('Zoom Out', () => {
					zoomOut();
				});
			});
		}
	}

	config.popup.onClick(zoomIn);

	const drawersArgs = { config, normYKey: 'normY' };
	const drawersArgsControl = { config, normYKey: 'normControlY' };

	config.chart = createChart(config, FABRIC.drawChartFabric, drawersArgs);
	config.control = createControl(config, FABRIC.drawControlFabric, drawersArgsControl, () => updateNorms())

	window.addEventListener('resize', updateBounds);

	function init() {
		config.control.updateRange(config.control.range[0], config.control.range[1]);
		updateBounds();
		updateNorms(true);
	}

	init();
	render();

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