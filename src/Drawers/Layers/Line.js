import G, { PIXEL_RATIO } from '../../Globals';

export default function Line({ ctx, norm, colors }) {
	return function drawLine(data, x, y, width, height) {
		const [key, ...items] = data;
		ctx.beginPath();
		ctx.moveTo(x + 0, y + height - norm.Y(items[0]) * height);
		for (let i = 1; i < items.length; i++) {
			ctx.lineTo(x + norm.X(i) * width, y + height - norm.Y(items[i]) * height);
		}
		ctx.lineWidth = 2 * PIXEL_RATIO;
		ctx.strokeStyle = colors[key];
		ctx.lineJoin = 'round';
		ctx.stroke();
	}
}