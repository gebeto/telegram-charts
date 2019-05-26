import { throttle } from '../../utils';
import { PI2, TWO, CURRENT, DOT_RADIUS } from '../../Globals';

import { createMouseDotHandling } from './utils';


export default function LineDots({ canvasBounds, config, ctx, norm, colors, normYKey }) {
	const h = createMouseDotHandling(
		config,
		canvasBounds,
		ctx,
		{
			paddingLeftSelector: (context) => DOT_RADIUS,
			paddingRightSelector: (context) => DOT_RADIUS,
			rounding: Math.round,
			plus: 1,
		}
	);


	return function drawLineDots(items, x, y, width, height) {
		h.current.width = width;
		h.current.height = height;
		h.current.x = x;
		h.current.y = y;

		h.count = items.length;
		h.chunkSize = h.chunkScale * width;
		// chunkSizeDiv2 = chunkSize / 2;

		return h.current.index;
	}
}