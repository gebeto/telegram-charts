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
		// const range = control.range[1] - control.range[0];
		const count = items.length;
		// const shown = Math.round(count * range);
		// const normi = normalize(0, count);

		ctx.save();

		ctx.fillStyle = '#182D3B';
		ctx.font = FONT;
		ctx.textAlign = 'center';
		ctx.globalAlpha = 0.5;

		for (let i = 0; i < count; i++) {
			ctx.fillText(dateString(items[i]), x + norm.X(i) * width, y + height + 14 * PIXEL_RATIO);
		}

		ctx.restore();
	}
}