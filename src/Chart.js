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
	let bounds = {
		left: 0,
		top: 0,
	}, w, h, normCanvas;
	const canvas = document.createElement('canvas');
	document.body.appendChild(canvas);
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
		const an = config.animator.updateAnimations();
		if (an) config.shouldChartUpdate = true;

		if (config.shouldChartUpdate) {
			config.shouldChartUpdate = false;
			console.log('animated', config.shouldChartUpdate);
			ctx.clearRect(0, 0, w, CANVAS_HEIGHT - CONTROL_HEIGHT - BOTTOM_PADDING);
			drawChart(14, 0, w - 28, CANVAS_HEIGHT - CONTROL_HEIGHT - BOTTOM_PADDING);
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