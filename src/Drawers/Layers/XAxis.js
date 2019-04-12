import { memo, normalize } from '../../utils';
import {
	FONT,
	PIXEL_RATIO,
	X_AXIS_HEIGHT,
	X_AXIS_HEIGHT_DIV_2,
	AXIS_TEXT_WIDTH,
	AXIS_TEXT_WIDTH_DIV_2,
} from '../../Globals';


export default function XAxis({ config, control, ctx, norm, colors }) {
	const normx = norm.X(1);
	console.log(normx);

	return function drawXAxis(items, x, y, width, height) {
		const count = items.length;
		const S = config.startIndex;
		const E = config.endIndex;

		ctx.save();

		ctx.fillStyle = '#182D3B'
		ctx.font = FONT;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.globalAlpha = 0.5;

		for (let i = S; i < E; i++) {
			ctx.fillRect(x + norm.X(i) * width - AXIS_TEXT_WIDTH_DIV_2, y, AXIS_TEXT_WIDTH, height)
			// ctx.fillText(items[i].dayString, x + norm.X(i) * width, y + X_AXIS_HEIGHT_DIV_2);
		}

		ctx.restore();
	}
}