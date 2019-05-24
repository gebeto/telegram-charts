import { memo, normalize, normalizeMemo } from '../../utils';
import {
	FONT,
	CURRENT,
	AXIS_TEXT_WIDTH,
	X_AXIS_HEIGHT_DIV_2,
	AXIS_TEXT_WIDTH_DIV_2,
} from '../../Globals';


const steps = [0, 1, 2, 4, 4, 8, 8, 8, 8, 16, 16, 16, 16, 16, 16, 16, 16, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64];

export default function XAxis({ config, control, ctx, norm, colors, forBars }) {
	let deepness = 0;
	const chunkScale = norm.X(1);
	let chunkSize = 0;

	return function drawXAxis(items, x, y, width, height) {
		const count = items.length;
		if (forBars) {
			chunkSize = chunkScale * (width - chunkScale * width);
		} else {
			chunkSize = chunkScale * width;
		}

		if (forBars) {
			width = width - chunkSize;
		}

		ctx.save();

		// ctx.fillStyle = '#182D3B'
		ctx.fillStyle = CURRENT.THEME.gridLines;
		ctx.font = FONT;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.globalAlpha = 0.5;

		const currRaw = width * chunkScale;
		const curr = Math.floor(currRaw);
		const step = Math.ceil(AXIS_TEXT_WIDTH / currRaw);
		const nextStep = step + 1;
		const realStep = steps[step];
		const nextRealStep = steps[nextStep];

		const breakPoint = currRaw;
		const currItemWidth = AXIS_TEXT_WIDTH / step;
		const fade = breakPoint / currItemWidth;
		const alpha = (fade - 1) * (step);

		for (let i = 0; i < count; i += realStep) {
			const ost = i % nextRealStep;
			if (ost === 0) {
				ctx.globalAlpha = 0.5;
			} else {
				if (alpha > 0.5) {
					ctx.globalAlpha = 0.5;
				} else {
					ctx.globalAlpha = alpha;
				}
			}

			const X = x + (forBars ? chunkSize / 2 : 0) + chunkSize * i;
			const Y = y + X_AXIS_HEIGHT_DIV_2;
			if (X < -AXIS_TEXT_WIDTH || X > ctx.canvas.width + AXIS_TEXT_WIDTH) {
				continue;
			}
			ctx.fillText(items[i].dayString, X, Y);
		}

		ctx.restore();
	}
}