import {
	Y_AXIS_TEXT_PADDING,
	PIXEL_RATIO,
	CURRENT,
	FONT,
} from '../../Globals';


export default function YAxis({ control, ctx, normX, normY, colors }) {
	const partsCount = 6;
	
	return function drawYAxis(min, max, x, y, width, height) {
		const a = height / partsCount;
		const part = (height + a/2) / partsCount;
		const partNumber = Math.ceil((max - min) / partsCount);

		ctx.save();
		ctx.beginPath();

		// ctx.fillStyle = '#182D3B';
		ctx.fillStyle = CURRENT.THEME.gridLines;
		ctx.globalAlpha = 0.5;
		ctx.font = FONT;
		ctx.textBaseline = 'bottom';
		for (let i = 0; i < partsCount; i++) {
			ctx.moveTo(x, y + height - i * part);
			ctx.lineTo(x + width, y + height - i * part);
			ctx.fillText(min + partNumber * i, x + 3, y + height - i * part - Y_AXIS_TEXT_PADDING)
		}

		ctx.lineWidth = 1 * PIXEL_RATIO;
		ctx.globalAlpha = 0.1;
		// ctx.strokeStyle = '#182D3B';
		ctx.strokeStyle = CURRENT.THEME.gridLines;
		ctx.stroke();
		ctx.restore();
	}
}