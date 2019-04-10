import Animated, { createAnimator } from './Utils/Animated';

import LineLayerDrawer from './Drawers/Layers/Line';
import LineRangeLayerDrawer from './Drawers/Layers/LineRange';
import DotsLayerDrawer from './Drawers/Layers/Dots';
import YAxisLayerDrawer from './Drawers/Layers/YAxis';
import XAxisLayerDrawer from './Drawers/Layers/XAxis';

import ControlsDrawer from './Drawers/Controls';
import LineChartDrawer from './Drawers/LineChart';

import Mouse from './Utils/Mouse';

import G, {
	PIXEL_RATIO,
	CANVAS_HEIGHT,
	CHART_HEIGHT,
	CONTROL_HEIGHT,
	BOTTOM_PADDING,
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


function Chart(data, index) {
	// Init canvas
	let bounds = {}, w, h, normCanvas;
	const canvas = document.createElement('canvas');
	document.body.appendChild(canvas);
	const ctx = canvas.getContext('2d');

	const config = {
		shouldUpdate: true,
		animator: createAnimator(),
		mouse: Mouse({
			canvas: canvas,
			canvasBounds: bounds,
		}),
		maxHeight: 0,
		minHeight: 0,
	};

	// config.mouse.addListener('enter', () => {
	// 	console.log('enter');
	// });
	// config.mouse.addListener('leave', () => {
	// 	console.log('leave');
	// });

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
	const controlNorm = { X: normalizeMemo(0, xs.length - 1), Y: normalizeMemo(config.minHeight, config.maxHeight) };

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


	function updateCanvasSize(e) {
		const newBounds = canvas.getBoundingClientRect();
		for (let key in newBounds) {
			bounds[key] = newBounds[key];
		};
		normCanvas = normalizeMemo(0, bounds.width);
		w = canvas.width = bounds.width * PIXEL_RATIO;
		h = canvas.height = CANVAS_HEIGHT;
	}

	const drawersArgs = {
		config, control, ctx, norm, colors, ys, xs,
		canvasBounds: bounds,
	};

	const drawChart = LineChartDrawer(drawersArgs);
	const drawControl = ControlsDrawer({ ...drawersArgs, norm: controlNorm });

	function render() {
		config.animator.updateAnimations();
		ctx.clearRect(0, 0, w, h);
		drawChart(14, 0, w - 28, CANVAS_HEIGHT - CONTROL_HEIGHT - BOTTOM_PADDING);
		// drawChart(20, 0, w - 40, CANVAS_HEIGHT - (CONTROL_HEIGHT + BOTTOM_PADDING));
		drawControl(0, CANVAS_HEIGHT - CONTROL_HEIGHT, w, CONTROL_HEIGHT);
	}

	window.addEventListener('resize', updateCanvasSize);
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