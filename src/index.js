import Animated from './Animated';

import ControlsDrawer from './Drawers/Controls';
import LineDrawer from './Drawers/Line';
import LineChartDrawer from './Drawers/LineChart';

let time = Date.now();


function normalize(min, max) {
	const delta = max - min;
	const memo = {};
	return (val) => {
		if (!memo[val]) {
			memo[val] = (val - min) / delta;
		}
		return memo[val];
	};
}


const flatMax = (arr) => Math.max.apply(null, arr.map(set => Math.max.apply(null, set.slice(1))));
const flatMin = (arr) => Math.min.apply(null, arr.map(set => Math.min.apply(null, set.slice(1))));


function Chart(data) {
	// Init canvas
	let bounds, w, h;
	const canvas = document.createElement('canvas');
	document.body.appendChild(canvas);
	const ctx = canvas.getContext('2d');
	ctx.lineJoin = 'bevel';
	ctx.lineCap = 'butt';

	// Init data
	const colors = data.colors;
	const names = data.names;
	const types = data.types;
	const [[xkey, ...xs], ...ys] = data.columns;
	const maxHeight = flatMax(ys);
	const minHeight = flatMin(ys);
	const normY = normalize(minHeight, maxHeight);
	const normX = normalize(0, xs.length - 1);

	const control = {
		range: [0.1, 0.9],
		updateRange: function updateRange(index, value) {
			const secIndex = index === 0 ? 1 : 0;

			if (index === 0 && value < control.range[1] - 0.1) {
				control.range[index] = value;
			} else if (index === 1 && value > control.range[0] + 0.1) {
				control.range[index] = value;
			}
		}
	};


	function updateCanvasSize() {
		bounds = canvas.getBoundingClientRect();
		w = canvas.width = bounds.width;
		h = canvas.height = 450;
	}

	const drawLine = LineDrawer({ ctx, normX, normY, colors });
	const drawControl = ControlsDrawer({ ctx, control, drawLine: drawLine, ys });
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
		drawChart(0, 0, w, 390);
		drawControl(0, 400, w, 50);
	}

	window.addEventListener('resize', render);
	render();

	return {
		updateRange: control.updateRange,
		render: render,
	};
}





fetch('assets/chart_data.json').then(res => res.json()).then(ChartsData => {
	const chart = Chart(ChartsData[1]);
	const normControl = normalize(0, 1000);

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
