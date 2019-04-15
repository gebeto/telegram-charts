import {
	PIXEL_RATIO,
	PI1,
	FONT,
} from '../../Globals';
import { normalize, throttle } from '../../utils';

console.log('pi1', PI1)


export default function Area({ config, control, ctx, norm, colors, normYKey, yAxis }, opts = {}) {
	const lineWidth = 2 * PIXEL_RATIO;
	const mouse = config.mouse.mouse;
	const popup = config.popup;
	const normX1 = norm.X(1);

	let currentWidth = 0;
	let currentHeight = 0;
	let currentX = 0;
	let currentY = 0;
	let RADIUS = 0;
	let centerX = 0;
	let centerY = 0;

	// config.mouse.addListener('down', function down(mouse, e) {
	// 	if (e.target !== ctx.canvas) return;
	// 	console.log('G+HEY', mouse.newX, mouse.newY);
	// 	config.shouldChartUpdate = true;
	// });

	return function drawArea(data, perc, start, end, x, y, width, height) {
		const { key, items, opacity } = data;
		const copacity = opacity.value;

		currentWidth = width;
		currentHeight = height;
		currentX = x;
		currentY = y;

		if (!copacity) return;
		if (copacity < 1) {
			config.shouldControlUpdate = true;
		}

		RADIUS = Math.min(width / 2, height / 2);
		centerX = x + width / 2;
		centerY = y + height / 2;

		// const ang = Math.atan2(mouse.newX - centerX, mouse.newY - centerY) * 2
		// console.log(ang);

		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = 'red';
		ctx.moveTo(centerX, centerY);
		const angleStart = PI1 * start * 2;
		const angleEnd = PI1 * end * 2;
		ctx.arc(centerX, centerY, RADIUS, angleStart, angleEnd);
		ctx.moveTo(centerX, centerY);
		ctx.fillStyle = colors[key];
		ctx.fill();
		ctx.restore();

		ctx.save();
		ctx.fillStyle = '#fff';
		ctx.textAlign = 'center';
		ctx.globalAlpha = copacity;
		ctx.textBaseline = 'middle';
		ctx.font = FONT;
		const textAngle = angleStart + (angleEnd - angleStart) / 2;
		const textX = centerX + Math.cos(textAngle) * (RADIUS / 2);
		const textY = centerY + Math.sin(textAngle) * (RADIUS / 2);
		ctx.fillText(perc.toFixed(0) + '%', textX, textY);
		ctx.restore();
	}
}