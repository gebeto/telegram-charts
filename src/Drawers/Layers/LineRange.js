import { PIXEL_RATIO } from '../../Globals';

export default function LineRange({ config, control, ctx, norm, colors }, opts = {}) {
	const lineWidth = (opts.lineWidth || 2) * PIXEL_RATIO;

	return function drawLineRange(data, x, y, width, height, withRange) {
		const [key, ...items] = data;
		const S = config.startIndex;
		const E = config.endIndex;
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(x + S, y + height - norm.Y(items[S]) * height);
		for (let i = 1; i < E + 1; i++) {
			const X = x + norm.X(i) * width;
			const Y = y + height - norm.Y(items[i]) * height;
			ctx.lineTo(X, Y);
		}
		ctx.lineWidth = lineWidth;
		ctx.strokeStyle = colors[key];
		ctx.lineJoin = 'round';
		ctx.stroke();
		ctx.restore();
	}
}