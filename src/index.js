import ChartsData from './chart_data.json';


const el = document.createElement('canvas');
document.body.appendChild(el);
el.width = 1000;
el.height = 300;

const flatMax = (arr) => Math.max.apply(null, arr.map(set => Math.max.apply(null, set.slice(1))));

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
		ctx.lineWidth = 2;
		ctx.strokeStyle = this.data.colors[name];
		ctx.stroke();
	}

	render() {
		this.ctx.fillRect(0, 0,100,100)
		this.drawRow(this.dataSets[0]);
		this.drawRow(this.dataSets[1]);
	}
}





const c = ChartsData[0];
console.log(c);

const chart = new Chart(c, el);

console.log(chart);
chart.render();