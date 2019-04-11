import { memo, normalize } from '../../utils';
import {
	FONT,
	PIXEL_RATIO
} from '../../Globals';


export default function XAxis({ config, control, ctx, norm, colors }) {
	return function drawXAxis(items, x, y, width, height) {
		const count = items.length;
		const S = config.startIndex;
		const E = config.endIndex;

		ctx.save();

		ctx.fillStyle = '#182D3B'
		ctx.font = FONT;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'top';
		ctx.globalAlpha = 0.5;

		for (let i = S; i < E; i++) {
			ctx.fillText(items[i].dayString, x + norm.X(i) * width, y);
		}

		ctx.restore();
	}
}