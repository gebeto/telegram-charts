import { PIXEL_RATIO } from '../../Globals';


export default function Bar({ config, control, ctx, norm, colors }, opts = {}) {
	return function drawLine(data, x, y, width, height) {
		const [key, ...items] = data;
		const count = items.length;
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(x + 0, y + height - norm.Y(items[0]) * height);
		for (let i = 1; i < count; i++) {
			const X = x + norm.X(i) * width;
			const Y = y + height - norm.Y(items[i]) * height;
			ctx.lineTo(X, Y);
		}
		ctx.fillStyle = colors[key];
		// ctx.globalAlpha = opacity;
		// ctx.lineJoin = 'round';
		// ctx.stroke();
		ctx.restore();
	}
}