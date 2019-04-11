import { PIXEL_RATIO } from '../../Globals';


export default function Line({ config, control, ctx, norm, colors }, opts = {}) {
	const lineWidth = (opts.lineWidth || 2) * PIXEL_RATIO;

	return function drawLine(data, x, y, width, height) {
		const [key, ...items] = data;
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(x + 0, y + height - norm.Y(items[0]) * height);
		for (let i = 1; i < items.length; i++) {
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