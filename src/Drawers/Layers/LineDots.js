import { throttle } from '../../utils';
import { PI2, TWO, CURRENT, DOT_RADIUS } from '../../Globals';

import { createMouseDotHandling } from './utils';


export default function LineDots({ canvasBounds, config, ctx, norm, colors, normYKey }) {
	const h = createMouseDotHandling(
		config,
		canvasBounds,
		ctx,
		(context) => DOT_RADIUS,
		(context) => DOT_RADIUS,
		Math.round, 1
	);

	return function drawLineDots(data, x, y, width, height) {
		h.current.width = width;
		h.current.height = height;
		h.current.x = x;
		h.current.y = y;

		const { key, items, opacity } = data;
		const normY = data.scaling[normYKey];
		const currOpacity = opacity.value;
		if (!currOpacity) return;

		h.count = items.length;
		h.chunkSize = h.chunkScale * width;
		// chunkSizeDiv2 = chunkSize / 2;

		if (h.current.index > -1 && h.current.index < h.count) {
			const X = x + h.chunkSize * h.current.index;
			ctx.save();
			ctx.strokeStyle = CURRENT.THEME.gridLines;
			ctx.lineWidth = 1;
			ctx.globalAlpha = 0.1;
			ctx.beginPath();
			ctx.moveTo(X, y);
			ctx.lineTo(X, y + height);
			ctx.stroke();
			ctx.restore();

			ctx.save();
			ctx.beginPath();
			ctx.globalAlpha = currOpacity;
			ctx.arc(X, y + height - normY(items[h.current.index]) * height, DOT_RADIUS, 0, PI2);
			ctx.lineWidth = TWO;
			ctx.strokeStyle = colors[key];
			ctx.fillStyle = CURRENT.THEME.background;
			ctx.fill();
			ctx.stroke();
			ctx.restore();
		}
	}
}