import { PIXEL_RATIO, CURRENT, DOT_RADIUS, PI2 } from '../../Globals';


export default function Line({ config, control, ctx, norm, colors, normYKey, yAxis }, opts = {}) {
	const lineWidth = (opts.lineWidth || 2) * PIXEL_RATIO;
	const chunkScale = config.scaleX;

	const draws = {
		items: [],
		opacity: 1.0,

		offsetIndex: 0,
	};

	let prevWidth = 0;

	function shouldBulkRecalculate(datas) {
		return true;
	}

	function shouldRecalculate(data) {
		const result = (
			data.opacity.inProgress
			|| !data.calculated
			|| ctx.canvas.width !== prevWidth
		);
		prevWidth = ctx.canvas.width;
		return result;
	}

	function calculate(data, x, y, width, height) {
		const { key, items, opacity } = data;
		const normY = data.scaling[normYKey];
		const currOpacity = opacity.value;
		draws.opacity = opacity.value;

		if (!currOpacity) return;
		if (currOpacity < 1) {
			config.control.shouldUpdate = true;
		}

		draws.items = [];
		draws.offsetIndex = 0;

		const count = items.length;
		const chunkSize = chunkScale * width;
		const yh = y + height;

		const startBreakpoint = -chunkSize;
		const endBreakpoint = ctx.canvas.width + chunkSize;

		draws.items.push([x + 0, yh - normY(items[0]) * height]);

		for (let i = 1; i < count; i++) {
			const X = x + chunkSize * i;
			const Y = yh - normY(items[i]) * height;
			if (Y > yh) {
				config.control.shouldUpdate = true;
			}
			if (X < startBreakpoint) {
				draws.offsetIndex++;
				continue;
			} else if (X > endBreakpoint) {
				break;
			}

			draws.items.push([X, Y]);
		}

		data.calculated = true;
	}

	function drawLine(data, x, y, width, height) {
		const { items, opacity } = draws;
		const { key } = data;

		if (!opacity) return;
		const count = items.length;

		ctx.save();
		ctx.beginPath();
		ctx.moveTo(items[0][0], items[0][1]);
		for (let i = 1; i < count; i++) {
			ctx.lineTo(items[i][0], items[i][1]);
		}
		ctx.lineWidth = lineWidth;
		ctx.strokeStyle = colors[key];
		ctx.globalAlpha = opacity;
		ctx.lineJoin = 'round';
		ctx.stroke();
		ctx.restore();
	}

	return {
		draws: draws,
		shouldBulkRecalculate: shouldBulkRecalculate,
		shouldRecalculate: shouldRecalculate,
		calculate: calculate,
		draw: drawLine,
	}
}