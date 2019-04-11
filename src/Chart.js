import Animated, { createAnimator } from './Utils/Animated';

import LineLayerDrawer from './Drawers/Layers/Line';
import LineRangeLayerDrawer from './Drawers/Layers/LineRange';
import DotsLayerDrawer from './Drawers/Layers/Dots';
import YAxisLayerDrawer from './Drawers/Layers/YAxis';
import XAxisLayerDrawer from './Drawers/Layers/XAxis';

import ControlsDrawer from './Drawers/Controls';
import LineChartDrawer from './Drawers/LineChart';

import Mouse from './Utils/Mouse';

import arrow from './arrow.svg';

import {
	PIXEL_RATIO,
	CANVAS_HEIGHT,
	CHART_HEIGHT,
	CONTROL_HEIGHT,
	FONT,
} from './Globals';

import {
	normalize,
	normalizeAnimated,
	normalizeMemo,
	flatMin,
	flatMax,
	flatMinRange,
	flatMaxRange,
	throttle
} from './utils';


function createElement(parent, elementTag, className) {
	const element = document.createElement(elementTag);
	element.className = className;
	if (parent) {
		parent.appendChild(element);
	}
	return element;
}

function Chart(data, index) {
	// Init canvas
	let bounds = {
		left: 0,
		top: 0,
	}, w, h, normCanvas;

	const container = createElement(document.body, 'div', 'chart');
	const canvas = createElement(container, 'canvas', 'chart__canvas');
	const popup = createElement(container, 'div', 'chart__popup');
	popup.innerHTML = `
		<strong class="chart__popup-header">
			<span class="chart__popup-header-title">Sat, 20 Apr 2019</span>
			<span class="chart__popup-header-icon"><img src="${arrow}" /></span>
		</strong>
		<span class="chart__popup-item">
			<span class="chart__popup-item-title">Joined</span>
			<span class="chart__popup-item-value">100</span>
		</span>
		<span class="chart__popup-item">
			<span class="chart__popup-item-title">Left</span>
			<span class="chart__popup-item-value">20</span>
		</span>
	`;

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
		popup: popup,
		maxHeight: 0,
		minHeight: 0,
	};

	// Init data
	const colors = data.colors;
	const names = data.names;
	const types = data.types;
	const [[xkey, ...xs], ...ys] = data.columns;
	config.maxHeight = flatMax(ys);
	config.minHeight = flatMin(ys);

	const norm = {
		X: normalizeMemo(0, xs.length - 1),
		Y: normalizeAnimated(config.animator, config.minHeight, config.maxHeight)
	};
	const controlNorm = {
		X: normalizeMemo(0, xs.length - 1),
		Y: normalizeMemo(config.minHeight, config.maxHeight)
	};

	const updateNorms = function updateNorms() {
		const rStart = control.range[0];
		const rEnd = control.range[1];
		const startIndex = Math.floor(rStart * xs.length);
		const endIndex = Math.round(rEnd * xs.length + 2);

		config.minHeight = flatMinRange(ys, startIndex, endIndex);
		config.maxHeight = flatMaxRange(ys, startIndex, endIndex);
		norm.Y.updateDelta(config.minHeight, config.maxHeight);

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
	}

	function updateCanvasSize(e) {
		config.shouldChartUpdate = true;
		config.shouldControlUpdate = true;
        const newWidth = bounds.width;
        const newHeight = bounds.height;
        console.log(newWidth, newHeight)
        if (w !== newWidth || h !== newHeight) {
			normCanvas = normalizeMemo(0, bounds.width);
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
			// console.log('animated', config.shouldChartUpdate);
			ctx.clearRect(0, 0, w, CANVAS_HEIGHT - CONTROL_HEIGHT);
			drawChart(14, 0, w - 28, CANVAS_HEIGHT - CONTROL_HEIGHT);
		}

		if (config.shouldControlUpdate) {
			config.shouldControlUpdate = false;
			ctx.clearRect(0, CANVAS_HEIGHT - CONTROL_HEIGHT, w, CONTROL_HEIGHT);
			drawControl(0, CANVAS_HEIGHT - CONTROL_HEIGHT, w, CONTROL_HEIGHT);
		}
	}

	window.addEventListener('resize', updateCanvasSize);
	updateBounds();
	updateCanvasSize();
	updateNorms()
	render()

	return {
		updateRange: control.updateRange,
		render: render,
		control: control,
	};
}


export default Chart;