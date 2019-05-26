import {
	PIXEL_RATIO,
	BOTTOM_PADDING,
	X_AXIS_HEIGHT,
	CURRENT,
	PI2,
	ONE,
	TWO,
	DOT_RADIUS,
	DOT_RADIUS_DIV_2,
	DOT_RADIUS_MUL_2,
} from '../../Globals';

export function drawDotsForLines({ config }, y, height, activeIndex, drawLineLayers) {
	const { ctx, data } = config;
	const { colors, yAxis, xAxis } = data;
	for (let i = 0; i < yAxis.items.length; i++ ) {
		const { key } = yAxis.items[i];
		const { draws } = drawLineLayers[i];
		const itemsIndex = activeIndex - draws.offsetIndex;
		if (draws.items[itemsIndex]) {
			const [ X, Y ] = draws.items[itemsIndex];
			ctx.save();
			ctx.strokeStyle = CURRENT.THEME.gridLines;
			ctx.lineWidth = 1;
			ctx.globalAlpha = 0.1;
			ctx.beginPath();
			ctx.moveTo(X, y);
			ctx.lineTo(X, y + height);
			ctx.stroke();
			ctx.restore();

			ctx.save();
			ctx.beginPath();
			ctx.arc(X, Y, DOT_RADIUS, 0, PI2);
			ctx.fillStyle = CURRENT.THEME.background;
			ctx.lineWidth = TWO;
			ctx.globalAlpha = draws.opacity;
			ctx.strokeStyle = colors[key];
			ctx.fill();
			ctx.stroke();
			ctx.restore();
		}
	}
}