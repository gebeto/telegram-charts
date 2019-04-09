import { PIXEL_RATIO, FONT } from '../../Globals';

export default function YAxis({ control, ctx, normX, normY, colors }) {
	const partsCount = 7;
	
	return function drawYAxis(min, max, x, y, width, height) {
		const part = height / partsCount;
		const partNumber = Math.round((max - min) / partsCount);

		ctx.save();
		ctx.beginPath();

		ctx.fillStyle = '#182D3B';
		ctx.globalAlpha = 0.5;
		ctx.font = FONT;
		for (let i = 0; i < partsCount; i++) {
			ctx.moveTo(x, y + height - i * part);
			ctx.lineTo(x + width, y + height - i * part);
			ctx.fillText(min + partNumber * i, x + 3, y + height - i * part - 5)
		}

		ctx.lineWidth = 1 * PIXEL_RATIO;
		ctx.globalAlpha = 0.1;
		ctx.strokeStyle = '#182D3B';
		ctx.stroke();
		ctx.restore();
	}
}