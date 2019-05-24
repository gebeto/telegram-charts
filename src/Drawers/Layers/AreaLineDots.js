import { throttle } from '../../utils';
import { CURRENT, DOT_RADIUS } from '../../Globals';

import { createMouseDotHandling } from './utils';


export default function AreaLineDots({ canvasBounds, config, ctx, norm, colors, normYKey }) {
	const h = createMouseDotHandling(
		config,
		canvasBounds,
		ctx,
		(context) => DOT_RADIUS,
		(context) => DOT_RADIUS,
		Math.round, 1
	);

	return function drawAreaLineDots(data, x, y, width, height) {
		h.current.width = width;
		h.current.height = height;
		h.current.x = x;
		h.current.y = y;

		h.count = data.length;
		h.chunkSize = h.chunkScale * width;

		if (h.current.index > -1 && h.current.index < h.count) {
			const X = x + h.chunkSize * h.current.index;
			ctx.save();
			ctx.strokeStyle = CURRENT.THEME.gridLines;
			ctx.lineWidth = 1;
			ctx.globalAlpha = 0.2;
			ctx.beginPath();
			ctx.moveTo(X, y);
			ctx.lineTo(X, y + height);
			ctx.stroke();
			ctx.restore();
		}
	}
}