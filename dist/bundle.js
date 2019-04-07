
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function () {
	'use strict';

	// import ChartsData from '../assets/chart_data.json';


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
		const canvas = document.createElement('canvas');
		document.body.appendChild(canvas);
		let w = canvas.width = canvas.getBoundingClientRect().width;
		let h = canvas.height = 450;
		const ctx = canvas.getContext('2d');

		// Init data
		const colors = data.colors;
		const names = data.names;
		const types = data.types;
		const [[xkey, ...xs], ...ys] = data.columns;
		const maxHeight = flatMax(ys);
		const minHeight = flatMin(ys);
		const normY = normalize(minHeight, maxHeight);
		const normX = normalize(0, xs.length - 1);

		function updateRelative() {
			w = canvas.width = canvas.getBoundingClientRect().width;
			h = canvas.height = 300;
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

		function drawChart() {
			for (let i = 0; i < ys.length; i++ ) {
				drawLine(ys[i], 0, 0, w, 320);
				drawLine(ys[i], 0, 400, w, 46);
				ctx.fillRect(0, 325, w, 10);
			}
		}

		drawChart();

		window.addEventListener('resize', () => {
			updateRelative();
			drawChart();
		});
	}





	fetch('assets/chart_data.json').then(res => res.json()).then(ChartsData => {
		const chart = Chart(ChartsData[1]);

		(function loop() {
			// chart.render();
			requestAnimationFrame(loop);
		})();

		// const norm1000 = normalize(0, 1000);
		// document.getElementById('range-x').addEventListener('input', (e) => {
		// 	const value = parseInt(e.target.value);
		// 	chart.setRange1(norm1000(value));
		// })
		// document.getElementById('range-scale').addEventListener('input', (e) => {
		// 	const value = parseInt(e.target.value);
		// 	chart.setRange2(norm1000(value));
		// })

		// window.addEventListener('resize', () => {
		// 	el.width = el.getBoundingClientRect().width;
		// 	cel.width = cel.getBoundingClientRect().width;
		// 	chart.updateSize();
		// });
	});

}());
