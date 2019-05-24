import { throttle } from '../../utils';
import { CURRENT } from '../../Globals';

import { createMouseDotHandling } from './utils';


export default function BarDots({ canvasBounds, config, ctx, norm, colors, normYKey }) {
	const h = createMouseDotHandling(
		config,
		canvasBounds,
		ctx,
		(context) => context.chunkSize + (context.chunkSizeDiv2 > 10 ? 10 : context.chunkSizeDiv2),
		(context) => context.chunkSizeDiv2 > 10 ? 10 : context.chunkSizeDiv2,
		Math.ceil, 0
	);

	return function drawBarDots(data, stacked, x, y, width, height) {
		h.current.width = width;
		h.current.height = height;
		h.current.x = x;
		h.current.y = y;

		const { key, items, opacity } = data;
		const normY = data.scaling[normYKey];
		const WIDTH = width - h.chunkSize;

		h.count = items.length;
		h.chunkSize = h.chunkScale * WIDTH;
		h.chunkSizeDiv2 = h.chunkSize / 2;

		if (h.current.index > -1 && h.current.index < h.count) {
			const X = x + h.chunkSize * h.current.index;
			ctx.save();
			ctx.strokeStyle = CURRENT.THEME.gridLines;
			ctx.lineWidth = 1;
			ctx.globalAlpha = 0.2;
			ctx.beginPath();
			ctx.rect(X, y + height, h.chunkSize, -(normY(stacked[h.current.index]) * height));
			ctx.fillStyle = CURRENT.THEME.gridLines;
			ctx.fill();
			ctx.stroke();
			ctx.restore();
		}
	}
}