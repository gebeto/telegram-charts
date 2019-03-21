import ChartsData from '../assets/chart_data.json';

function debounce(f, ms) {
	let timer = null;

	return function (...args) {
		const onComplete = () => {
			f.apply(this, args);
			timer = null;
		}

		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(onComplete, ms);
	};
}

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

function lerp(position, targetPosition) {
	return position + (targetPosition - position) * 0.2;
}


const el = document.createElement('canvas');
document.body.appendChild(el);
el.width = 1000;
el.height = 500;
const cel = document.createElement('canvas');
document.body.appendChild(cel);
cel.width = 1000;
cel.height = 100;

const flatMax = (arr, offset, count) => Math.max.apply(null, arr.map(set => Math.max.apply(null, set.slice(1 + offset, count))));
const flatMin = (arr, offset, count) => Math.min.apply(null, arr.map(set => Math.min.apply(null, set.slice(1 + offset, count))));


const Chart = (data, canvas, ccanvas) => {
	const _this = {};

	const [segments, ...dataSets] = data.columns;
	const ctx = canvas.getContext('2d');
	const cctx = ccanvas.getContext('2d');

	const segmentsCount = segments.length - 1;
	const maxHeight = flatMax(dataSets, 0, segments.length);
	const minHeight = flatMin(dataSets, 0, segments.length);
	let segmentsToDraw = segmentsCount;
	let normH = normalize(minHeight, maxHeight);
	let normW = normalize(0, segmentsToDraw - 1);

	const initialDat = {
		segmentsToDraw,
		normH,
		normW,
	};

	const chartDat = {
		segmentsToDraw,
		normH,
		normW,
	}

	const h = canvas.height;
	const w = canvas.width;

	const ch = ccanvas.height;
	const cw = ccanvas.width;

	let p1 = segmentsCount / 1000;
	let percentage = segments.length;
	let offset = 0;

	_this.updateOffsetSegmentsToDraw = (offs) => {
		offset = offs;
		_this.updateSegmentsToDraw();
	};
	_this.updatePercentageSegmentsToDraw = (perc) => {
		percentage = perc;
		_this.updateSegmentsToDraw();
	};

	_this.updateSegmentsToDraw = () => {
		const segmentsToDraw_raw = p1 * percentage;
		chartDat.segmentsToDraw = Math.round(segmentsToDraw_raw);
		const newMinHeight = flatMin(dataSets, 0, chartDat.segmentsToDraw);
		const newMaxHeight = flatMax(dataSets, 0, chartDat.segmentsToDraw);
		chartDat.normH = normalize(newMinHeight, newMaxHeight);
		chartDat.normW = normalize(0, segmentsToDraw_raw - 1);
	};

	const drawDataset = (dataset, ctx, { segmentsToDraw, normW, normH }, x, y, w, h) => {
		const [name, ...ds] = dataset;
		ctx.beginPath();
		ctx.moveTo(x + normW(0) * w, y + h - normH(ds[0]) * h);
		for (let i = 1; i < segmentsToDraw; i++) {
			const Y = y + h - normH(ds[i]) * h;
			const X = x + normW(i) * w;
			ctx.lineTo(X, Y);
		}
		ctx.strokeStyle = data.colors[name];
		ctx.stroke();
	}

	_this.drawRow = (dataset) => {
		ctx.lineWidth = 2;
		drawDataset(dataset, ctx, chartDat, 0, 0, w, h);

		cctx.lineWidth = 1;
		drawDataset(dataset, cctx, initialDat, 0, 0, cw, ch);
		cctx.lineWidth = 3;
		cctx.strokeStyle = 'rgba(0,0,0,0.1)'
		cctx.strokeRect(0, 434, 1000, 66);
		cctx.fillRect(0, 434, 20, 66)
	}

	_this.render = () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (let i = 0; i < dataSets.length; i++) {
			_this.drawRow(dataSets[i]);
		}
	};

	return _this;
}



const c = ChartsData[4];
const chart = Chart(c, el, cel);
chart.render();
const rangeS = document.querySelector('#range-scale')
const rangeX = document.querySelector('#range-x')



rangeS.addEventListener('input', (e) => {
	const value = parseInt(e.target.value);
	// console.log(value);
	chart.updatePercentageSegmentsToDraw(value);
	// chart.render();
});

rangeX.addEventListener('input', (e) => {
	const value = parseInt(e.target.value);
	// console.log(value);
	chart.updateOffsetSegmentsToDraw(value);
	// chart.render();
});

(function loop() {
	chart.render();
	requestAnimationFrame(loop);
})();


