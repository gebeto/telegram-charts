import { PIXEL_RATIO } from '../../Globals';


export default function Line({ config, control, ctx, norm, colors, normYKey }, opts = {}) {
	const lineWidth = (opts.lineWidth || 2) * PIXEL_RATIO;

	return function drawLine(data, x, y, width, height) {
		const { key, items, opacity } = data;
		const normY = data.scaling[normYKey];
		const currOpacity = opacity.value;

		if (!currOpacity) return;
		if (currOpacity < 1) {
			config.shouldControlUpdate = true;
		}

		const count = items.length;
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(x + 0, y + height - normY(items[0]) * height);
		for (let i = 1; i < count; i++) {
			const X = x + norm.X(i) * width;
			const Y = y + height - normY(items[i]) * height;
			ctx.lineTo(X, Y);
		}
		ctx.lineWidth = lineWidth;
		ctx.strokeStyle = colors[key];
		ctx.globalAlpha = currOpacity;
		ctx.lineJoin = 'round';
		ctx.stroke();
		ctx.restore();
	}
}