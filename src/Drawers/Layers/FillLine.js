import { PIXEL_RATIO } from '../../Globals';
import { normalize } from '../../utils';


export default function FillLine({ config, control, ctx, norm, colors, normYKey, yAxis }, opts = {}) {
	const chunkSize = norm.X(1);
	return function drawFillLine(data, stacked, percentage, x, y, width, height) {
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
		const chunk = chunkSize * width;
		const X = x + chunk * width;
		stacked[0] += items[0] * copacity;
		const onePercent = percentage[0] / 100;
		const perc = Math.round(stacked[0] / onePercent);
		const Y = y + height - normY(perc) * height;
		ctx.moveTo(x, Y);
		for (let i = 1; i < count; i++) {
			stacked[i] += items[i] * copacity;
			const onePercent = percentage[i] / 100;
			const perc = Math.round(stacked[i] / onePercent);
			const X = x + chunk * i - chunk;
			const Y = y + height - normY(perc) * height;
			ctx.lineTo(X, Y);
		}
		// console.groupEnd();

		// for (let i = count - 1; i >= 1; i--) {
		// 	// percentage[i] += items[i] * copacity;
		// 	const chunk = chunkSize * width;
		// 	const X = x + chunk * i - chunk;
		// 	const Y = y + height - normY(percentage[i] - items[i] * copacity) * height;
		// 	const HEIGHT = normY(items[i]) * height * copacity;
		// 	ctx.lineTo(X, Y, chunk, HEIGHT > 0 ? HEIGHT : 0);
		// }
		ctx.globalAlpha = copacity;
		ctx.fillStyle = colors[key]
		ctx.strokeStyle = colors[key]
		// ctx.fill();
		ctx.stroke();
		ctx.restore();
	}
}