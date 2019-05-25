import { PIXEL_RATIO } from '../../Globals';
import { createMouseDotHandling } from './utils';


export default function  Bar({ config, control, canvasBounds, ctx, norm, colors, normYKey, xAxis, yAxis }, opts = {}) {
	const chunkScale = config.scaleX;

	const draws = {
		items: [],
		width: 0,
		opacity: 1.0,

		offsetIndex: 0,
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
		const normY = data.scaling[normYKey];
		draws.opacity = opacity.value;
		
		if (!draws.opacity) return;
		if (draws.opacity < 1) {
			config.shouldControlUpdate = true;
		}

		draws.items = [];
		draws.offsetIndex = 0;
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
				draws.offsetIndex++;
				continue;
			} else if (X > endBreakpoint) {
				break;
			}

			draws.items.push([X, Y, Y + BAR_HEIGHT]);
		}

		data.calculated = true;
	}

	function drawBar(data, stacked, x, y, width, height, activeIndex) {

		const { key } = data;
		const { items, opacity } = draws;

		if (!opacity) return;
		const count = items.length;

		ctx.save();
		ctx.beginPath();
		ctx.lineWidth = draws.width;
		ctx.strokeStyle = colors[key];
		for (let i = 0; i < count; i++) {
			const isHovered = activeIndex === i + draws.offsetIndex;
			if (isHovered) {
				ctx.globalAlpha = 0.5;
				ctx.stroke();
				ctx.globalAlpha = 1;
				ctx.beginPath();
			}
			ctx.moveTo(items[i][0], items[i][1]);
			ctx.lineTo(items[i][0], items[i][2]);
			if (isHovered) {
				ctx.stroke();
				ctx.globalAlpha = 0.5;
				ctx.beginPath();
			}
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