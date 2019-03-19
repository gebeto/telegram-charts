import ChartsData from '../assets/chart_data.json';


const createCanvas = (width, height) => {
	const canvas = document.createElement('canvas');
	document.body.appendChild(canvas);
	canvas.width = width;
	canvas.height = height;
	const ctx = canvas.getContext('2d');
	ctx.translate(0, canvas.height);
	ctx.scale(1, -1);
	return [canvas, ctx];
}

const memoMax = (() => {
	const memoKeys = [];
	const memoValues = [];
	return (arr) => {
		let res = null;
		const indexOf = memoKeys.indexOf(arr);
		if (indexOf > -1) {
			res = memoValues[indexOf];
		} else {
			res = [Math.max.apply(null, arr.slice(1))];
			memoKeys.push(arr);
			memoValues.push(res);
		}
		return res;
	}
})();

const maxHeightForColumns = (arr) => {
	return Math.max.apply(null, arr.map(set => memoMax(set)));
}


class Chart {
	constructor(data, canvas) {
		this.data = data;
		const [segments, ...coords] = this.data.columns;
		this.segments = segments;
		this.dataSets = coords;

		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');

		this.segmentsCount = this.segments.length;
		this.maxHeight = flatMax(this.dataSets);
		this.segWidth = this.ctx.canvas.width / this.segmentsCount;
		this.segHeight = this.ctx.canvas.height / this.maxHeight;
	}

	drawRow(dataset) {
		const [name, ...ds] = dataset;
		const ctx = this.ctx;

		ctx.beginPath();
		ctx.moveTo(0, this.maxHeight - ds[0]);
		for (let i = 1; i < this.segmentsCount; i++) {
			ctx.lineTo(i * this.segWidth, this.maxHeight - ds[i]);
		}
		ctx.lineWidth = 10;
		ctx.strokeStyle = this.data.colors[name];
		ctx.stroke();
	}

	render() {
		this.ctx.fillRect(0, 0,100,100)
		this.drawRow(this.dataSets[0]);
		this.drawRow(this.dataSets[1]);
	}
}

const bindParam = (fun, param) => fun.bind(null, param);

const drawColumn = (ctx, data, x, y, width, height, colIndex) => {
	const [cx, ...cy] = data.columns;
	ctx.beginPath();
	ctx.moveTo(x + 0, y + cy[colIndex][1]);
	for (let i = 2; i < cx.length; i++) {
		ctx.lineTo(x + i * sWidth, y + cy[colIndex][i] * sHeight);
	}
	ctx.strokeStyle = data.colors[cy[o][0]];
	ctx.stroke();
}

const drawChart = (ctx, data, x, y, width, height) => {
	const [cx, ...cy] = data.columns;
	const maxSegmentsY = maxHeightForColumns(cy);
	const maxSegmentsX = cx.length;
	const sWidth = width / (maxSegmentsX - 1);
	const sHeight = height / maxSegmentsY;
	ctx.fillRect(x, y, width, height);
	for (let o in cy) {
		dcol(x, y, width, height, o);
		// ctx.beginPath();
		// ctx.moveTo(x + 0, y + cy[o][1]);
		// for (let i = 2; i < cx.length; i++) {
		// 	ctx.lineTo(x + i * sWidth, y + cy[o][i] * sHeight);
		// }
		// ctx.strokeStyle = data.colors[cy[o][0]];
		// ctx.stroke();
	}
}

const chartData = ChartsData[0];
const [ canvas, ctx ] = createCanvas(1000, 500);
ctx.lineWidth = 2;
const dc = bindParam(bindParam(drawChart, ctx), chartData);
const dcol = bindParam(bindParam(drawColumn, ctx), chartData);
dc(50, 50, 900, 400);
// drawChart(ctx, chartData, 50, 50, 900, 400);