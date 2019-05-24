import { PIXEL_RATIO } from '../../Globals';


export default function Line({ config, control, ctx, norm, colors, normYKey, yAxis }, opts = {}) {
	const lineWidth = (opts.lineWidth || 2) * PIXEL_RATIO;

	const draws = {
		items: [],
		opacity: 1.0,
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
			config.shouldControlUpdate = true;
		}

		draws.items = [];

		const count = items.length;
		const chunkSize = norm.X(1) * width;
		const yh = y + height;

		draws.items.push([x + 0, yh - normY(items[0]) * height]);

		for (let i = 1; i < count; i++) {
			const X = x + chunkSize * i;
			const Y = yh - normY(items[i]) * height;
			if (Y > yh) {
				config.shouldControlUpdate = true;
			}
			if (X < -chunkSize || X > ctx.canvas.width + chunkSize) {
				continue;
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
		shouldBulkRecalculate: shouldBulkRecalculate,
		shouldRecalculate: shouldRecalculate,
		calculate: calculate,
		draw: drawLine,
	}
}