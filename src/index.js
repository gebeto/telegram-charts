import ChartsData from '../assets/chart_data.json';

const svgForData = (chartData) => {
	const calculateHeight = (ys) => {
		return Math.max.apply(null, ys.map(arr => Math.max.apply(null, arr.slice(1))))
	}

	const WIDTH = 1000;
	// const HEIGHT = 500;
	const HEIGHT = calculateHeight(chartData.columns.slice(1));

	const createSVG = () => {
		const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		svgElement.setAttribute('width', `${WIDTH}px`);
		svgElement.setAttribute('height', `${HEIGHT}px`);
		svgElement.setAttribute('viewBox', `0 0 ${WIDTH} ${HEIGHT}`);
		svgElement.setAttribute('preserveAspectRatio', 'none');
		svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

		// Rotate
		const g1 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		g1.setAttribute('transform', `translate(0, ${HEIGHT})`);

		const g2 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		g2.setAttribute('transform', 'scale(1, -1)');

		g1.appendChild(g2);
		svgElement.appendChild(g1);

		return {
			element: svgElement,
			addPoly: (el) => {
				g2.appendChild(el)
			}
		};
	}


	const createPoly = (data, index, opts) => {
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
		poly.setAttribute('stroke-width', opts.sw || '2');
		poly.setAttribute('vector-effect', 'non-scaling-stroke');

		const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		g.setAttribute('style', 'transition: transform 0.4s, opacity 0.2s;')
		g.appendChild(poly);

		const updatePoints = () => {
			const points = [];
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
			clone: () => {
				return g.cloneNode(true);
			}
		};
	}

	const svg = createSVG();
	document.body.appendChild(svg.element);

	const poly1 = createPoly(chartData, 1, {});
	const poly2 = createPoly(chartData, 2, {});
	svg.addPoly(poly1.element);
	svg.addPoly(poly2.element);


	const preview = createSVG();
	preview.element.setAttribute('height', '80px')
	document.body.appendChild(preview.element);
	const ppoly1 = createPoly(chartData, 1, {sw: 1});
	const ppoly2 = createPoly(chartData, 2, {sw: 1});
	preview.addPoly(ppoly1.element);
	preview.addPoly(ppoly2.element);


	const createRect = () => {
		const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		rect.setAttribute('x', '0%');
		rect.setAttribute('y', '0%');
		rect.setAttribute('width', '100%');
		rect.setAttribute('height', '100%');
		rect.setAttribute('fill', 'red');
		rect.setAttribute('opacity', '0.5');

		const state = {
			moving: false,
			point: 0,
			offset: 1000,
		};

		const rectToggle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		rectToggle.setAttribute('x', `1000px`);
		rectToggle.setAttribute('y', '0%');
		rectToggle.setAttribute('width', '10px');
		rectToggle.setAttribute('height', '100%');
		rectToggle.setAttribute('fill', 'red');

		const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		g.setAttribute('style', `transform: translateX(-${state.offset}px)`);
		g.appendChild(rect);
		g.appendChild(rectToggle);


		const update = () => {
			console.log();
		}

		rectToggle.addEventListener('mousedown', (e) => {
			console.log(e);
			state.moving = true;
		});
		rectToggle.addEventListener('mouseup', (e) => {
			console.log(e);
			state.moving = false;
		});
		rectToggle.addEventListener('mousemove', (e) => {
			if (state.moving) {
				console.log(e);
				// console.dir(g.parentNode);
				const br = g.parentNode.getBoundingClientRect();
				const offAcc = 1000 - (1000 / g.parentNode.clientWidth * (e.clientX - br.x));
				state.offset = offAcc;
				g.setAttribute('style', `transform: translateX(-${state.offset}px)`);
				console.log(offAcc);
			}
		});

		return g;
	}
	const rect1 = createRect();
	preview.element.appendChild(rect1);



	const values = {
		scale: 1000,
		x: 0,
	};
	const changeView = () => {
		console.log(values.scale)
		const x = values.x;
		const y = 0;
		// const x = 1000 - values.scale - values.x;
		// const y = (1000 - values.scale) / 2;
		const width = values.scale;
		// const height = values.scale / 2;
		const height = HEIGHT;
		svg.element.setAttribute('viewBox', `${x} ${y} ${width} ${height}`)
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
};



svgForData(ChartsData[0])