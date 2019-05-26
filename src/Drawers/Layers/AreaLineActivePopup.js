import { throttle } from '../../utils';
import { CURRENT, DOT_RADIUS } from '../../Globals';

import { createMouseDotHandling } from './utils';


export default function AreaLineActivePopup({ canvasBounds, config, ctx, norm, colors, normYKey }) {
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

	function destroy() {
		h.destroy();
	}

	function init() {
		h.init();
	}

	function drawAreaLineActivePopup(data, x, y, width, height) {
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

	drawAreaLineActivePopup.destroy = destroy;
	drawAreaLineActivePopup.init = init;

	return drawAreaLineActivePopup;
}