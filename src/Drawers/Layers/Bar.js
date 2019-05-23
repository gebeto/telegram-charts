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

		const WIDTH = (width - chunkSize * width);
		const count = items.length;
		ctx.save();
		ctx.beginPath();
		for (let i = 0; i < count; i++) {
			stacked[i] += items[i] * copacity;
			const chunk = chunkSize * WIDTH;
			// const X = Math.ceil(x + chunk * i);
			// const Y = Math.ceil(y + height - normY(stacked[i]) * height);
			// const BAR_HEIGHT = Math.ceil(normY(items[i]) * height * copacity);
			// const BAR_WIDTH = Math.ceil(chunk - chunkSize);
			const X = x + chunk * i;
			const Y = y + height - normY(stacked[i]) * height;
			const BAR_HEIGHT = normY(items[i]) * height * copacity;
			const BAR_WIDTH = chunk - chunkSize;
			ctx.rect(X, Y, BAR_WIDTH, BAR_HEIGHT > 0 ? BAR_HEIGHT : 0);
		}
		// ctx.globalAlpha = copacity;
		ctx.fillStyle = colors[key]
		ctx.strokeStyle = colors[key]
		ctx.fill();
		// ctx.stroke();
		ctx.restore();
	}
}