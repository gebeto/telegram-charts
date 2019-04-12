import { memo, normalize, normalizeMemo } from '../../utils';
import {
	FONT,
	SIDES_PADDING2,
	PIXEL_RATIO,
	X_AXIS_HEIGHT,
	X_AXIS_HEIGHT_DIV_2,
	AXIS_TEXT_WIDTH,
	AXIS_TEXT_WIDTH_DIV_2,
	AXIS_TEXT_WIDTH_MUL_2,
	AXIS_TEXT_WIDTH_MUL_3,
} from '../../Globals';




export default function XAxis({ config, control, ctx, norm, colors }) {
	let deepness = 0;
	const diff = norm.X(112);

	return function drawXAxis(items, x, y, width, height) {
		const count = items.length;

		ctx.save();

		ctx.fillStyle = '#182D3B'
		ctx.font = FONT;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.globalAlpha = 0.5;

		// for (let i = S; i < E; i++) {
		// 	ctx.fillRect(x + norm.X(i) * width - AXIS_TEXT_WIDTH_DIV_2, y, AXIS_TEXT_WIDTH, height);
		// 	ctx.fillText(items[i].dayString, x + norm.X(i) * width, y + X_AXIS_HEIGHT_DIV_2);
		// }

		const currRaw = diff * width;
		const curr = Math.floor(currRaw);
		const step = currRaw / AXIS_TEXT_WIDTH;
		// console.log(diff, curr, currRaw, step);

		for (let i = 0; i < count; i += 1) {
			// const X = x + AXIS_TEXT_WIDTH_DIV_2 + norm.X(i) * (width - AXIS_TEXT_WIDTH);
			// const Y = y + X_AXIS_HEIGHT_DIV_2;

			const X = x + norm.X(i) * width;
			const Y = y + X_AXIS_HEIGHT_DIV_2;
			ctx.fillRect(X - AXIS_TEXT_WIDTH_DIV_2, Y - height / 2, AXIS_TEXT_WIDTH, height);

			ctx.fillText(items[i].dayString, X, Y);
		}

		ctx.restore();
	}
}