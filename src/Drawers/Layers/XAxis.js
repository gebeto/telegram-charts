import { memo, normalize, normalizeMemo } from '../../utils';
import {
	FONT,
	PIXEL_RATIO,
	X_AXIS_HEIGHT,
	X_AXIS_HEIGHT_DIV_2,
	AXIS_TEXT_WIDTH,
	AXIS_TEXT_WIDTH_DIV_2,
	AXIS_TEXT_WIDTH_MUL_2,
	AXIS_TEXT_WIDTH_MUL_3,
} from '../../Globals';



export default function XAxis({ config, control, ctx, norm, colors }) {
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

		const x1 = norm.X(0) * width;
		const x2 = norm.X(1) * width;
		const currRaw = x1 - x2;
		const curr = Math.floor(x2 - x1);
		const divider = Math.floor(AXIS_TEXT_WIDTH / curr);
		// const dividerNew = divider;
		// const incer = (AXIS_TEXT_WIDTH / divider)
		console.log(curr, divider);


		for (let i = 0; i < count; i += 1 << divider) {
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