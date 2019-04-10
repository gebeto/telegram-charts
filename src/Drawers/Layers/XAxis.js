import { memo, normalize } from '../../utils';
import {
	MONTH_NAMES,
	DAY_NAMES,
	FONT,
	PIXEL_RATIO
} from '../../Globals';


const dateString = memo(function dateString(timestamp) {
	const date = new Date(timestamp);
	return `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}`;
});


export default function XAxis({ config, control, ctx, norm, colors }) {

	return function drawXAxis(items, x, y, width, height) {
		const count = items.length;
		const S = config.startIndex;
		const E = config.endIndex;

		ctx.save();

		ctx.fillStyle = '#182D3B';
		// ctx.fillStyle = 'red';
		ctx.font = FONT;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'top';
		ctx.globalAlpha = 0.5;

		for (let i = S; i < E; i++) {
			ctx.fillText(dateString(items[i]), x + norm.X(i) * width, y);
		}

		ctx.restore();
	}
}