import Animated from './Utils/Animated';

import LineLayerDrawer from './Drawers/Layers/Line';
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


function drawingWithRange(range, draw) {
	return function drawRange(data, x, y, width, height) {
		const scale = range[1] - range[0];
		const xs = width * range[0];
		const xNew = x - xs / scale;
		const widthNew = width / scale;
		draw(data, xNew, y, widthNew, height);
	}
}


function Chart(data) {
	// Init canvas
	let bounds = {}, w, h, normCanvas;
	const canvas = document.createElement('canvas');
	document.body.appendChild(canvas);
	const ctx = canvas.getContext('2d');

	const config = {
		forceToRender: false,
		needToRender: false,
		mouse: Mouse({
			canvas: canvas,
			canvasBounds: bounds,
		}),
	};

	// config.mouse.addListener('enter', () => {
	// 	console.log('enter');
	// 	// alert('enter');
	// 	config.forceToRender = true;
	// });
	// config.mouse.addListener('leave', () => {
	// 	console.log('leave');
	// 	// alert('leave');
	// 	config.forceToRender = false;
	// });

	// Init data
	const colors = data.colors;
	const names = data.names;
	const types = data.types;
	const [[xkey, ...xs], ...ys] = data.columns;
	const normIndex = normalize(0, xs.length);
	let maxHeight = flatMax(ys);
	let minHeight = flatMin(ys);

	const norm = { X: normalizeMemo(0, xs.length - 1), Y: normalizeAnimated(minHeight, maxHeight) };
	const controlNorm = { X: normalizeMemo(0, xs.length - 1), Y: normalizeMemo(minHeight, maxHeight) };

	const updateNorms = throttle(function updateNorms() {
		const rStart = control.range[0];
		const rEnd = control.range[1];
		const startIndex = Math.floor(rStart * xs.length);
		const endIndex = Math.round(rEnd * xs.length + 2);

		minHeight = flatMinRange(ys, startIndex, endIndex);
		maxHeight = flatMaxRange(ys, startIndex, endIndex);
		norm.Y.updateDelta(minHeight, maxHeight);
	}, 200);


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


	function updateCanvasSize() {
		const newBounds = canvas.getBoundingClientRect();
		for (let key in newBounds) {
			bounds[key] = newBounds[key];
		};
		normCanvas = normalizeMemo(0, bounds.width);
		w = canvas.width = bounds.width * PIXEL_RATIO;
		h = canvas.height = CANVAS_HEIGHT;
	}

	const drawLineControlLayer = LineLayerDrawer({ config, ctx, norm: controlNorm, colors });

	const drawYAxis = YAxisLayerDrawer({ config, control, ctx, norm, colors });
	const drawXAxis = XAxisLayerDrawer({ config, control, ctx, norm, colors });
	const drawLineLayer = LineLayerDrawer({ config, ctx, norm, colors });
	const drawDotsLayer = DotsLayerDrawer({ config, ctx, norm, colors });
	const drawXAxisLayerRange = drawingWithRange(control.range, drawXAxis);
	const drawLineLayerRange = drawingWithRange(control.range, drawLineLayer);
	const drawDotsLayerRange = drawingWithRange(control.range, drawDotsLayer);

	const drawControl = ControlsDrawer({
		config, ctx, control, ys,
		canvasBounds: bounds,
		drawLineLayer: drawLineControlLayer,
	});

	const drawChart = LineChartDrawer({
		config, ctx, control, ys, xs,
		drawLineLayer: drawLineLayerRange,
		drawDotsLayer: drawDotsLayerRange,
		drawXAxisLayer: drawXAxisLayerRange,
	});

	function render(force) {
		// if (!force) {
		// 	if (!config.forceToRender && !config.needToRender) return;
		// }
		updateCanvasSize();
		ctx.clearRect(0, 0, w, h);
		drawYAxis(minHeight, maxHeight, 10, 0, w, CANVAS_HEIGHT - (CONTROL_HEIGHT + BOTTOM_PADDING));
		drawChart(20, 0, w - 40, CANVAS_HEIGHT - (CONTROL_HEIGHT + BOTTOM_PADDING));
		drawControl(0, CANVAS_HEIGHT - CONTROL_HEIGHT, w, CONTROL_HEIGHT);
		Animated.updateAnimations();
	}

	window.addEventListener('resize', updateCanvasSize);
	updateNorms()
	render(true);

	return {
		updateRange: control.updateRange,
		render: render,
		control: control,
	};
}


export default Chart;