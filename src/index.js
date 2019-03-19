import ChartsData from '../assets/chart_data.json';

const WIDTH = 1000;
const HEIGHT = 500;

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


const withData = (fun, data) => (...args) => fun(data, ...args);
const withCtx = (fun, ctx) => (...args) => fun(ctx, ...args);

const drawColumn = (ctx, x, y, width, height, data, colIndex) => {
	ctx.beginPath();
	ctx.moveTo(x + 0, y + cy[o][1]);
	for (let i = 2; i < cx.length; i++) {
		ctx.lineTo(x + i * sWidth, y + cy[o][i] * sHeight);
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
		ctx.beginPath();
		ctx.moveTo(x + 0, y + cy[o][1]);
		for (let i = 2; i < cx.length; i++) {
			ctx.lineTo(x + i * sWidth, y + cy[o][i] * sHeight);
		}
		ctx.strokeStyle = data.colors[cy[o][0]];
		ctx.stroke();
	}
}


const createPoly = (data, index) => {
	const points = [];
	const [name, ...rest] = data.columns[index];
	const range = [0, rest.length];
	const sw = WIDTH / (rest.length - 1);
	for (let i = 0; i < rest.length; i++) {
		points.push(`${i * sw},${rest[i]}`);
	}
	const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
	poly.setAttribute('points', points.join(' '));
	poly.setAttribute('stroke', data.colors[name]);
	poly.setAttribute('fill', 'none');
	poly.setAttribute('stroke-width', '3');

	const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	g.setAttribute('style', 'transition: transform 0.4s, opacity 0.2s;')
	g.appendChild(poly);

	const updatePoints = () => {
		const points = [];
		// 10
		// 100
		const sw = WIDTH / (range[1] - range[0] - 1);
		for (let i = 0; i + range[0] < range[1]; i++) {
			points.push(`${i * sw},${rest[i + range[0]]}`);
		}
		poly.setAttribute('points', points.join(' '));
	}

	return {
		element: g,
		hide: () => {
			g.setAttribute('opacity', '0');
			g.setAttribute('transform', 'scale(1, 0)');
		},
		show: () => {
			g.setAttribute('opacity', '1');
			g.setAttribute('transform', 'scale(1, 1)');
		},
		rangeFrom: (rf) => {
			range[0] = rf;
		},
		rangeTo: (rt) => {
			range[1] = rt;
		},
		update: () => {
			updatePoints();
		}
	};
}

const chartData = ChartsData[0];

const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgElement.setAttribute('width', '1000px');
svgElement.setAttribute('height', '500px');
svgElement.setAttribute('viewBox', '0 0 1000 500');

// Rotate
const g1 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
g1.setAttribute('transform', 'translate(0, 500)');

const g2 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
g2.setAttribute('transform', 'scale(1, -1)');

g1.appendChild(g2);
svgElement.appendChild(g1);

document.body.appendChild(svgElement);

const poly1 = createPoly(chartData, 1);
window.p = poly1;
g2.appendChild(poly1.element);
const poly2 = createPoly(chartData, 2);
g2.appendChild(poly2.element);
window.p = poly1;















const values = {
	scale: 1000,
	x: 0,
};
const changeView = () => {
	console.log(values.scale)
	const x = 1000 - values.scale - values.x;
	const y = (1000 - values.scale) / 2;
	const width = values.scale;
	const height = values.scale / 2;
	svgElement.setAttribute('viewBox', `${x} ${y} ${width} ${height}`)
}


document.getElementById('range-scale').addEventListener('input', (e) => {
	console.log(e.target.value);
	values.scale = parseInt(e.target.value);
	changeView();
	document.getElementById('range-x').setAttribute('min', values.scale)
});
document.getElementById('range-x').addEventListener('input', (e) => {
	console.log(e.target.value);
	values.x = 1000 - parseInt(e.target.value);
	changeView();
});
