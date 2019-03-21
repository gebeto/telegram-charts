import ChartsData from '../assets/chart_data.json';

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


const el = document.createElement('canvas');
document.body.appendChild(el);
el.width = 1000;
el.height = 300;

const flatMax = (arr) => Math.max.apply(null, arr.map(set => Math.max.apply(null, set.slice(1))));
const flatMin = (arr) => Math.min.apply(null, arr.map(set => Math.min.apply(null, set.slice(1))));


class Chart {
	constructor(data, canvas) {
		this.data = data;
		const [segments, ...coords] = this.data.columns;
		this.segments = segments;
		this.dataSets = coords;

		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');

		this.segmentsCount = this.segments.length - 1;
		this.maxHeight = flatMax(this.dataSets);
		this.minHeight = flatMin(this.dataSets);
		this.normH = normalize(this.minHeight, this.maxHeight);
		this.normW = normalize(0, this.segmentsCount - 1);
	}

	drawRow(dataset) {
		const [name, ...ds] = dataset;
		const ctx = this.ctx;
		const h = this.canvas.height;
		const w = this.canvas.width;

		ctx.beginPath();
		ctx.moveTo(this.normW(0) * w, h - this.normH(ds[0]) * h);
		for (let i = 1; i < this.segmentsCount; i++) {
			ctx.lineTo(this.normW(i) * w, h - this.normH(ds[i]) * h );
		}
		ctx.lineWidth = 2;
		ctx.strokeStyle = this.data.colors[name];
		ctx.stroke();
	}

	render() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		for (let i = 0; i < this.dataSets.length; i++) {
			this.drawRow(this.dataSets[i]);
		}
	}
}



const c = ChartsData[0];
const chart = new Chart(c, el);
chart.render();

// (function loop() {
// 	chart.render();
// 	requestAnimationFrame(loop);
// })();