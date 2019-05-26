import { throttle } from '../../utils';
import { PI2, TWO, CURRENT, DOT_RADIUS } from '../../Globals';

import { createMouseDotHandling } from './utils';


export default function LineDots({ config, normYKey }) {
	const { ctx, control, data } = config;
	const { colors, yAxis, xAxis } = data;
	const h = createMouseDotHandling(
		config,
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

	function drawLineDots(items, x, y, width, height) {
		h.current.width = width;
		h.current.height = height;
		h.current.x = x;
		h.current.y = y;

		h.count = items.length;
		h.chunkSize = h.chunkScale * width;
		// chunkSizeDiv2 = chunkSize / 2;

		return h.current.index;
	}

	drawLineDots.destroy = destroy;
	drawLineDots.init = init;

	return drawLineDots;
}