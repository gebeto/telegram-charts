import { PIXEL_RATIO, PI1, FONT } from '../../Globals';


export default function Area({ config, control, ctx, norm, colors, normYKey, yAxis }, opts = {}) {
	const lineWidth = 2 * PIXEL_RATIO;
	const mouse = config.mouse.mouse;
	const popup = config.popup;
	const chunkScale = config.scaleX;

	let currentWidth = 0;
	let currentHeight = 0;
	let currentX = 0;
	let currentY = 0;
	let RADIUS = 0;
	let centerX = 0;
	let centerY = 0;

	// config.mouse.addListener('down', function down(mouse, e) {
	// 	if (e.target !== ctx.canvas) return;
	// 	console.log('G+HEY', Math.round(mouse.newX), Math.round(mouse.newY));
	// 	config.chart.shouldUpdate = true;
	// });

	function calculate(data, perc, start, end, x, y, width, height) {
		
	}

	function drawArea(data, perc, start, end, x, y, width, height) {
		const { key, items, opacity } = data;
		const copacity = opacity.value;

		currentWidth = width;
		currentHeight = height;
		currentX = x;
		currentY = y;

		if (!copacity) return;
		if (copacity < 1) {
			config.control.shouldUpdate = true;
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

		// const startX = centerX + Math.cos(angleStart) * RADIUS;
		// const startY = centerY + Math.sin(angleStart) * RADIUS;
		// const endX = centerX + Math.cos(angleEnd) * RADIUS;
		// const endY = centerY + Math.sin(angleEnd) * RADIUS;
		// const mouseDistX = Math.abs(centerX - mouse.newX);
		// const mouseDistY = Math.abs(centerY - mouse.newY);
		// const mouseDist = Math.sqrt(mouseDistX * mouseDistX + mouseDistY * mouseDistY);
		// console.log(RADIUS, mouseDist);
		// ctx.fillRect(startX, startY, 10, 10);
		// ctx.fillRect(endX, endY, 10, 10);
		
		// mouse.newX
		// mouse.newY
		ctx.fillText(perc.toFixed(0) + '%', textX, textY);
		ctx.restore();
	}

	return {
		calculate: calculate,
		draw: drawArea,
	}
}