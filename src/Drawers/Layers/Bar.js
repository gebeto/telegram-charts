import { PIXEL_RATIO } from '../../Globals';
import { normalize } from '../../utils';


export default function Bar({ config, control, ctx, norm, colors, normYKey, yAxis }, opts = {}) {
	const chunkSize = norm.X(1);
	return function drawBar(data, stacked, x, y, width, height) {
		const { key, items, opacity } = data;
		const normY = data.scaling[normYKey];
		const copacity = opacity.value;

		if (!copacity) return;
		if (copacity < 1) {
			config.shouldControlUpdate = true;
		}

		const count = items.length;
		ctx.save();
		ctx.beginPath();
		for (let i = 1; i < count; i++) {
			stacked[i] += items[i] * copacity;
			const chunk = chunkSize * width;
			const X = x + chunk * i - chunk;
			const Y = y + height - normY(stacked[i]) * height;
			ctx.rect(X, Y, chunk, normY(items[i]) * height * copacity);
		}
		// ctx.globalAlpha = copacity;
		ctx.fillStyle = colors[key]
		ctx.strokeStyle = colors[key]
		ctx.fill();
		// ctx.stroke();
		ctx.restore();
	}
}