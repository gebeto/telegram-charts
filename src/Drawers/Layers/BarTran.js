import { PIXEL_RATIO } from '../../Globals';


export default function  Bar({ config, control, ctx, norm, colors, normYKey, xAxis, yAxis }, opts = {}) {
	const chunkScale = config.scaleX;

	const draws = {
		items: [],
		width: 0,
		opacity: 1.0,

		scaleY: 0,
		scaleX: 0,
	}

	let prevWidth = 0;

	function shouldBulkRecalculate(yAxis) {
		let result = false;
		if (prevWidth !== ctx.canvas.width) {
			prevWidth = ctx.canvas.width;
			return true;
		}
		for (let i = 0; i < yAxis.items.length; i++) {
			if (result = yAxis.items[i].opacity.inProgress
				|| !yAxis.items[i].calculated
			) {
				break;
			}
		}
		return result;
	}

	function shouldRecalculate(data) {
		return true;
	}

	function calculate(data, stacked, x, y, width, height) {
		const { key, items, opacity } = data;

		// console.log(width / items.length, x, y, width, height);

		// const max = Math.max.apply(null, items);
		let max = 0;
		for (let i = 0; i < xAxis.length; i++) {
			const newMax = yAxis.items.reduce((prev, curr) => prev + curr.items[i], 0);
			max = newMax > max ? newMax : max;
			// console.log(newMax)
			// yAxis.items[i]
		}
		console.log(max)
		// const max = Math.max.apply(null, yAxis.items.map(item => Math.max.apply(null, item.items)));
		// console.log(yAxis)
		// console.log(max, height)
		// draws.scaleX = control.scale;
		draws.scaleX = width / items.length;
		draws.scaleY = height / max;
		draws.items = [];

		for (let i = 0; i < items.length; i++) {
			draws.items.push([i, stacked[i], stacked[i] + items[i]]);
			stacked[i] += items[i];
		}


		// stacked[i] += items[i] * draws.opacity;

		// draws.items.push([X, Y, Y + BAR_HEIGHT]);

		// const normY = data.scaling[normYKey];
		// draws.opacity = opacity.value;
		
		// if (!draws.opacity) return;
		// if (draws.opacity < 1) {
		// 	config.shouldControlUpdate = true;
		// }

		// draws.items = [];
		// draws.width = chunkScale * width;

		// const WIDTH = (width - draws.width);
		// draws.width = chunkScale * WIDTH;
		// const count = items.length;
		// const chunk = chunkScale * WIDTH;
		// const chunk_2 = chunk / 2;
		// const endBreakpoint = ctx.canvas.width + count;
		// const startBreakpoint = -chunk;
		// for (let i = 0; i < count; i++) {
		// 	stacked[i] += items[i] * draws.opacity;
		// 	const X = x + chunk * i + chunk_2;
		// 	const Y = y + height - normY(stacked[i]) * height;
		// 	const BAR_HEIGHT = normY(items[i]) * height * draws.opacity;
			
		// 	if (X < startBreakpoint) {
		// 		continue;
		// 	} else if (X > endBreakpoint) {
		// 		break;
		// 	}

		// 	draws.items.push([X, Y, Y + BAR_HEIGHT]);
		// }

		// data.calculated = true;
	}

	function drawBarLayer(data, x, y, width, height) {
		const { key } = data;
		const { items, opacity } = draws;

		if (!opacity) return;
		const count = items.length;

		ctx.save();
		ctx.scale(1, 1);
		ctx.translate(x, y + height);
		ctx.scale(1, -1);
		ctx.scale(draws.scaleX, draws.scaleY);

		ctx.beginPath();
		for (let i = 0; i < count; i++) {
			ctx.moveTo(items[i][0], items[i][1]);
			ctx.lineTo(items[i][0], items[i][2]);

			// ctx.moveTo(items[i][0], items[i][1]);
			// ctx.lineTo(items[i][0], items[i][2]);
		}
		// ctx.lineWidth = draws.width;
		// ctx.lineWidth = 1000;
		ctx.strokeStyle = colors[key];
		ctx.stroke();
		ctx.restore();
	}

	return {
		shouldBulkRecalculate: shouldBulkRecalculate,
		shouldRecalculate: shouldRecalculate,
		calculate: calculate,
		draw: drawBarLayer,
	};
}