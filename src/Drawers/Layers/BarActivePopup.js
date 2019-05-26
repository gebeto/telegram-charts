import { throttle } from '../../utils';
import { CURRENT } from '../../Globals';

import { createMouseDotHandling } from './utils';


export default function BarDots({ canvasBounds, config, ctx, norm, colors, normYKey }) {
	const h = createMouseDotHandling(
		config,
		canvasBounds,
		ctx,
		{
			paddingLeftSelector: (context) => context.chunkSize + (context.chunkSizeDiv2 > 10 ? 10 : context.chunkSizeDiv2),
			paddingRightSelector: (context) => context.chunkSizeDiv2 > 10 ? 10 : context.chunkSizeDiv2,
			rounding: Math.ceil,
			plus: 0
		}
	);

	return function drawBarDots(items, stacked, x, y, width, height) {
		h.current.width = width;
		h.current.height = height;
		h.current.x = x;
		h.current.y = y;

		const WIDTH = width - h.chunkSize;

		h.count = items.length;
		h.chunkSize = h.chunkScale * WIDTH;
		h.chunkSizeDiv2 = h.chunkSize / 2;

		return h.current.index;
	}
}