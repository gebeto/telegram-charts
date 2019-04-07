// import ChartsData from '../assets/chart_data.json';
// import ChartsData from '../assets/chart_data.json';
import Animated from './Animated';
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
		range: [0, 1],
	};

	function updateCanvasSize() {
		bounds = canvas.getBoundingClientRect();
		w = canvas.width = bounds.width;
		h = canvas.height = 450;
	}

	function drawLine(data, x, y, width, height) {
		const [key, ...items] = data;
		ctx.beginPath();
		ctx.moveTo(x + 0, y + height - normY(items[0]) * height);
		for (let i = 1; i < items.length; i++) {
			ctx.lineTo(x + normX(i) * width, y + height - normY(items[i]) * height);
		}
		ctx.lineWidth = 2;
		ctx.strokeStyle = colors[key];
		ctx.stroke();
	}

	function drawLineRange(data, x, y, width, height) {
		const scale = control.range[1] - control.range[0];
		const xs = width * control.range[0];
		const xNew = x - xs / scale;
		const widthNew = width / scale;
		drawLine(data, xNew, y, widthNew, height);
	}


	function drawChart(x, y, width, height) {
		for (let i = 0; i < ys.length; i++ ) {
			drawLineRange(ys[i], x, y, width, height);
		}
	}

	function drawControl(x, y, width, height) {
		for (let i = 0; i < ys.length; i++ ) {
			drawLine(ys[i], x + 7, y + 3, width - 14, height - 6);
		}

		const xs = x + width * control.range[0];
		const xe = x + width * control.range[1];
		const ww = width * (control.range[1] - control.range[0]);

		ctx.save();
		ctx.fillStyle = "#C4D6EA";
		ctx.beginPath();
		const controlWidth = 14;
		const controlWidth2 = controlWidth * 2;
		const controlPipaWidth = (controlWidth - 2) / 2;
		ctx.rect(xs + controlWidth, y, ww - controlWidth2, 1);
		ctx.rect(xs + controlWidth, y + height - 1, ww - controlWidth2, 1);
		ctx.fill();


		ctx.beginPath();
		ctx.moveTo(xs + controlWidth, y);
		ctx.lineTo(xs + controlWidth, y + height);
		ctx.arcTo(xs, y + height, xs, y + height - controlWidth, controlWidth / 2);
		ctx.arcTo(xs, y, xs + controlWidth, y, controlWidth / 2);
		ctx.lineTo(xs, y);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(xe - controlWidth, y);
		ctx.lineTo(xe - controlWidth, y + height);
		ctx.arcTo(xe, y + height, xe, y + height - controlWidth, controlWidth / 2);
		ctx.arcTo(xe, y, xe - controlWidth, y, controlWidth / 2);
		ctx.closePath();
		ctx.fill();

		ctx.restore();

		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = '#FFFFFF';
		ctx.rect(xs + controlPipaWidth, y + 15, 2, height - 30);
		ctx.rect(xe - controlPipaWidth, y + 15, -2, height - 30);
		ctx.fill();
		ctx.restore();
	}

	function render() {
		updateCanvasSize();
		drawChart(0, 0, w, 390);
		drawControl(0, 400, w, 50);
	}

	window.addEventListener('resize', render);
	render();
}





fetch('assets/chart_data.json').then(res => res.json()).then(ChartsData => {
	const chart = Chart(ChartsData[1]);


	// (function loop() {
		
	// 	requestAnimationFrame(loop);
	// })();
});
