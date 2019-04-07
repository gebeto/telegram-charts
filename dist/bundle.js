
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function () {
	'use strict';

	// import ChartsData from '../assets/chart_data.json';


	function normalize(min, max) {
		const delta = max - min;
		return (val, scale = 1) => {
			// if (!memo[val]) {
			// 	memo[val] = (val - min) / delta;
			// }
			// return memo[val];
			return scale === 0 ? 0 : (val - min) / delta / scale;
		};
	}


	const el = document.createElement('canvas');
	document.body.appendChild(el);
	el.width = el.getBoundingClientRect().width;
	el.height = 300;

	const cel = document.createElement('canvas');
	document.body.appendChild(cel);
	cel.width = cel.getBoundingClientRect().width;
	cel.height = 60;


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
		};

		let range = [0, 1];

		let h = canvas.height;
		let w = canvas.width;
		let ch = ccanvas.height;
		let cw = ccanvas.width;

		_this.updateSize = () => {
			h = canvas.height;
			w = canvas.width;

			ch = ccanvas.height;
			cw = ccanvas.width;

			_this.render();
		};



		const drawDataset = (dataset, ctx, { segmentsToDraw, normW, normH }, x, y, w, h) => {
			const [name, ...ds] = dataset;
			const calcForX = (index) => normW(index, range[1] - range[0]) * w;

			ctx.beginPath();
			ctx.moveTo(x + calcForX(0), y + h - normH(ds[0]) * h);
			for (let i = 1; i < segmentsToDraw; i++) {
				const Y = y + h - normH(ds[i]) * h;
				const X = x + calcForX(i);
				const XOff = segmentsToDraw * calcForX(range[0]);
				ctx.lineTo(X - XOff, Y);
			}
			ctx.strokeStyle = data.colors[name];
			ctx.stroke();
		};

		_this.setRange1 = (newRange) => {
			range[0] = newRange;
		};
		_this.setRange2 = (newRange) => {
			range[1] = newRange;
		};

		_this.drawRow = (dataset) => {
			ctx.lineWidth = 2;
			drawDataset(dataset, ctx, chartDat, 0, 0, w, h);

			cctx.lineWidth = 1;
			drawDataset(dataset, cctx, initialDat, 0, 0, cw, ch);
			cctx.lineWidth = 3;
			cctx.strokeStyle = 'rgba(0,0,0,0.1)';
			cctx.strokeRect(0, 434, 1000, 66);
			cctx.fillRect(0, 434, 20, 66);

		};

		_this.render = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			cctx.clearRect(0, 0, ccanvas.width, ccanvas.height);
			for (let i = 0; i < dataSets.length; i++) {
				_this.drawRow(dataSets[i]);
			}
		};

		return _this;
	};



	fetch('assets/chart_data.json').then(res => res.json()).then(ChartsData => {
		const c = ChartsData[1];
		const chart = Chart(c, el, cel);
		chart.render();

		(function loop() {
			chart.render();
			requestAnimationFrame(loop);
		})();

		const norm1000 = normalize(0, 1000);
		document.getElementById('range-x').addEventListener('input', (e) => {
			const value = parseInt(e.target.value);
			chart.setRange1(norm1000(value));
		});
		document.getElementById('range-scale').addEventListener('input', (e) => {
			const value = parseInt(e.target.value);
			chart.setRange2(norm1000(value));
		});

		window.addEventListener('resize', () => {
			el.width = el.getBoundingClientRect().width;
			cel.width = cel.getBoundingClientRect().width;
			chart.updateSize();
		});
	});

}());
