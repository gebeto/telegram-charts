import { PIXEL_RATIO } from '../../Globals';
import { normalize } from '../../utils';


export default function FillLine({ config, control, ctx, norm, colors, normYKey, yAxis }, opts = {}) {
	const chunkSize = norm.X(1);
	return function drawFillLine(data, stacked, percentage, x, y, width, height) {
		const { key, items, opacity } = data;
		const normY = data.scaling[normYKey];
		const normYM = normY(1);
		const copacity = opacity.value;

		if (!copacity) return;
		if (copacity < 1) {
			config.shouldControlUpdate = true;
		}
		const count = items.length;

		ctx.save();
		ctx.beginPath();
		const chunk = chunkSize * width;
		const XS = new Array(count).fill(0);

		const onePercent = percentage[0];
		const perc = Math.round(stacked[0] / onePercent);
		const Y = y + height - normYM * perc * height;
		ctx.moveTo(x, Y);
		XS[0] = x + chunk * 0;

		for (let i = 1; i < count; i++) {
			const perc = Math.round(stacked[i] / percentage[i]);
			XS[i] = x + chunk * i;
			const Y = y + height - normYM * perc * height;
			ctx.lineTo(XS[i], Y);
		}

		for (let i = count - 1; i >= 0; i--) {
			stacked[i] += items[i] * copacity;
			const perc = Math.round(stacked[i] / percentage[i]);
			const Y = y + height - normYM * perc * height;
			ctx.lineTo(XS[i], Y);
		}
		ctx.closePath();

		ctx.fillStyle = colors[key];
		ctx.fill();
		ctx.restore();
	}
}