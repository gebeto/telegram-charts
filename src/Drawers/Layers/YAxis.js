import {
	FONT,
	CURRENT,
	PIXEL_RATIO,
	Y_AXIS_TEXT_PADDING,
} from '../../Globals';
import { formatNumber } from '../../utils';


export default function YAxis({ config }, opts = {}) {
	const { ctx, control, data } = config;
	const { colors, yAxis, xAxis } = data;
	const partsCount = 6;
	const textAlign = opts.textAlign || 'left';
	
	return function drawYAxis(data, x, y, width, height, drawLine, separateAxis) {
		const min = Math.round(data.scaling.minHeightAnim.value);
		const max = Math.round(data.scaling.maxHeightAnim.value);
		const opacity = data.opacity.value;
		const a = height / partsCount;
		const part = (height + a/2) / partsCount;
		const partNumber = Math.ceil((max - min) / partsCount);

		ctx.save();
		ctx.beginPath();

		// ctx.fillStyle = '#182D3B';
		ctx.fillStyle = data.scaling.color || CURRENT.THEME.gridLines;
		if (separateAxis) {
			ctx.globalAlpha = opacity / 2;
		} else {
			ctx.globalAlpha = data.scaling.color ? 0.8 : 0.5;
		}

		ctx.font = FONT;
		ctx.textBaseline = 'bottom';
		ctx.textAlign = textAlign;
		for (let i = 0; i < partsCount; i++) {
			if (drawLine) {
				ctx.moveTo(x, y + height - i * part);
				ctx.lineTo(x + width, y + height - i * part);
			}
			const number = formatNumber(min + partNumber * i, true);
			ctx.fillText(number, x + 3, y + height - i * part - Y_AXIS_TEXT_PADDING);
		}

		ctx.lineWidth = 1 * PIXEL_RATIO;
		if (drawLine) {
			ctx.globalAlpha = 0.1;
			// ctx.strokeStyle = '#182D3B';
			ctx.strokeStyle = CURRENT.THEME.gridLines;
			ctx.stroke();
		}
		ctx.restore();
	}
}