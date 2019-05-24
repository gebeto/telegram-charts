import { PIXEL_RATIO } from '../../Globals';
import { normalize, throttleL } from '../../utils';


export default function  Bar({ config, control, ctx, norm, colors, normYKey, yAxis }, opts = {}) {
	const chunkScale = norm.X(1);

	const draws = {
		items: [],
		width: 0,
		opacity: 1.0,
	}

	let prevWidth = 0;

	function shouldBulkRecalculate(yAxis) {
		let result = false;
		if (prevWidth !== ctx.canvas.width) {
			prevWidth = ctx.canvas.width;
			return true;
		}
		for (let i = 0; i < yAxis.items.length; i++) {
			if (result = yAxis.items[i].opacity.inProgress || !yAxis.items[i].calculated) {
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
		const normY = data.scaling[normYKey];
		draws.opacity = opacity.value;
		
		if (!draws.opacity) return;
		if (draws.opacity < 1) {
			config.shouldControlUpdate = true;
		}

		draws.items = [];
		draws.width = chunkScale * width;

		const WIDTH = (width - draws.width);
		draws.width = chunkScale * WIDTH;
		const count = items.length;
		const chunk = chunkScale * WIDTH;
		const chunk_2 = chunk / 2;
		const endBreakpoint = ctx.canvas.width + count;
		const startBreakpoint = -chunk;
		for (let i = 0; i < count; i++) {
			stacked[i] += items[i] * draws.opacity;
			const X = x + chunk * i + chunk_2;
			const Y = y + height - normY(stacked[i]) * height;
			const BAR_HEIGHT = normY(items[i]) * height * draws.opacity;
			
			if (X < startBreakpoint) {
				continue;
			} else if (X > endBreakpoint) {
				break;
			}

			draws.items.push([X, Y, Y + BAR_HEIGHT]);
		}

		data.calculated = true;
	}

	function drawBar(data, x, y, width, height) {
		const { key } = data;
		const { items, opacity } = draws;

		if (!opacity) return;
		const count = items.length;
		// const w2 = draws.width / 2;

		ctx.save();
		ctx.lineWidth = draws.width;
		ctx.strokeStyle = colors[key];
		ctx.beginPath();
		for (let i = 0; i < count; i++) {
			// console.log(config.mouse.mouse.newX);
			// const isHovered = config.mouse.mouse.newX > items[i][0] - w2 && config.mouse.mouse.newX < items[i][0] + w2;
			// if (isHovered) {
			// 	ctx.globalAlpha = 0.5;
			// 	ctx.stroke();
			// 	ctx.globalAlpha = 1;
			// 	ctx.beginPath();
			// }
			ctx.moveTo(items[i][0], items[i][1]);
			ctx.lineTo(items[i][0], items[i][2]);
			// if (isHovered) {
			// 	ctx.stroke();
			// 	ctx.globalAlpha = 0.5;
			// 	ctx.beginPath();
			// }
		}
		ctx.stroke();
		ctx.restore();
	}

	return {
		shouldBulkRecalculate: shouldBulkRecalculate,
		shouldRecalculate: shouldRecalculate,
		calculate: calculate,
		draw: drawBar,
	};
}