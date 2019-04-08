import Animated from './Animated';

import ControlsDrawer from './Drawers/Controls';
import LineDrawer from './Drawers/Line';
import LineChartDrawer from './Drawers/LineChart';

let time = Date.now();

const CANVAS_HEIGHT = 450;
const PIXEL_RATIO = window.devicePixelRatio;


function normalizeMemo(min, max) {
	const delta = max - min;
	const memo = {};
	return (val) => {
		if (!memo[val]) {
			memo[val] = (val - min) / delta;
		}
		return memo[val];
	};
}

function normalize(min, max) {
	const delta = max - min;
	return (val) => {
		return (val - min) / delta;
	};
}


const flatMax = (arr) => Math.max.apply(null, arr.map(set => Math.max.apply(null, set.slice(1))));
const flatMin = (arr) => Math.min.apply(null, arr.map(set => Math.min.apply(null, set.slice(1))));


function Chart(data) {
	// Init canvas
	let bounds = {}, w, h, normCanvas;
	const canvas = document.createElement('canvas');
	document.body.appendChild(canvas);
	const ctx = canvas.getContext('2d');
	ctx.scale(PIXEL_RATIO, PIXEL_RATIO);

	// Init data
	const colors = data.colors;
	const names = data.names;
	const types = data.types;
	const [[xkey, ...xs], ...ys] = data.columns;
	const maxHeight = flatMax(ys);
	const minHeight = flatMin(ys);
	const normY = normalizeMemo(minHeight, maxHeight);
	const normX = normalizeMemo(0, xs.length - 1);

	const control = {
		range: [0.1, 0.9],
		updateRange: function updateRange(index, value) {
			const secIndex = index === 0 ? 1 : 0;

			if (index === 0 && value < control.range[1] - 0.1) {
				control.range[index] = value;
			} else if (index === 1 && value > control.range[0] + 0.1) {
				control.range[index] = value;
			}
		},
		updateRangeWithNormalCanvas: function updateRangeWithNormalCanvas(xPos) {
			return normCanvas(xPos);
		},
	};


	function updateCanvasSize() {
		const newBounds = canvas.getBoundingClientRect();
		for (let key in newBounds) {
			bounds[key] = newBounds[key];
		};
		normCanvas = normalizeMemo(0, bounds.width);
		w = canvas.width = bounds.width;
		h = canvas.height = CANVAS_HEIGHT;
	}

	const drawLine = LineDrawer({ ctx, normX, normY, colors });
	const drawControl = ControlsDrawer({ ctx, canvasBounds: bounds, control, drawLine: drawLine, ys });
	const drawChart = LineChartDrawer({ ctx, control, drawLine: drawLineRange, ys });
	
	function drawLineRange(data, x, y, width, height) {
		const scale = control.range[1] - control.range[0];
		const xs = width * control.range[0];
		const xNew = x - xs / scale;
		const widthNew = width / scale;
		drawLine(data, xNew, y, widthNew, height);
	}

	function render() {
		updateCanvasSize();
		ctx.clearRect(0, 0, w, h);
		drawChart(0, 0, w, CANVAS_HEIGHT - 60);
		drawControl(0, CANVAS_HEIGHT - 50, w, 50);
	}

	window.addEventListener('resize', render);
	render();

	return {
		updateRange: control.updateRange,
		render: render,
	};
}





fetch('assets/chart_data.json').then(res => res.json()).then(ChartsData => {
	const chart = Chart(ChartsData[0]);
	const normControl = normalizeMemo(0, 1000);

	document.querySelector('#range-start').addEventListener('input', (e) => {
		const value = parseInt(e.target.value);
		chart.updateRange(0, normControl(value));
	});
	document.querySelector('#range-end').addEventListener('input', (e) => {
		const value = parseInt(e.target.value);
		chart.updateRange(1, normControl(value));
	});

	(function loop() {
		chart.render();
		requestAnimationFrame(loop);
	})();
});
