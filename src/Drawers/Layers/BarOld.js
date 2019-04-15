import { throttle } from '../../utils';
import {
	PI2,
	FONT,
	CURRENT,
	DOT_RADIUS,
	PIXEL_RATIO,
} from '../../Globals';


export default function Bars({ canvasBounds, config, ctx, norm, colors, ys, normYKey }) {
	const lineWidth = 2 * PIXEL_RATIO;
	const mouse = config.mouse.mouse;
	const popup = config.popup;
	const normX1 = norm.X(1);

	let currentWidth = 0;
	let currentHeight = 0;
	let currentX = 0;
	let currentY = 0;

	let count = 0;
	let chunkSize = normX1 * currentWidth;
	// let chunkSizeDiv2 = chunkSize / 2;
	let currentIndexOld = -1;
	let currentIndex = -1;
	let onCanvasOld = false;
	let onCanvas = false;
	let isLeft = true;
	let TOUCHED = false;

	let currentPos = 0;
	

	const handleOver = throttle((mouse, e) => {
		// Check if mouse on canvas container
		onCanvasOld = onCanvas;
		onCanvas = (ctx.canvas === e.target || ctx.canvas.nextSibling.contains(e.target));
		if ((!onCanvas && onCanvasOld) || e.target.tagName === 'BUTTON') {
			if (currentIndex !== -1) {
				config.shouldChartUpdate = true;
			}
			currentIndex = -1;
			popup.hide();
		}

		if (!onCanvas) return;
		if (e.target !== ctx.canvas) return;

		if (onCanvas || (onCanvasOld === true && onCanvas === false)) {
			currentIndexOld = currentIndex;
			if (mouse.newY > currentY && mouse.newY < currentY + currentHeight) {
				currentIndex = count - Math.ceil((currentWidth + currentX - mouse.newX) / chunkSize + 1);
				if (currentIndex < count && currentIndex >= 0) {
					popup.show(currentIndex - 1);
				} else {
					currentIndex = -1;
					popup.hide();
				}
			} else {
				currentIndex = -1;
				popup.hide();
			}
		}

		if (currentIndexOld !== currentIndex) {
			config.shouldChartUpdate = true;

			if (currentIndex !== -1) {
				const popupBounds = popup.element.getBoundingClientRect();
				/* CONST */ currentPos = (currentIndex * chunkSize + currentX) / PIXEL_RATIO;
				if (currentPos - popupBounds.width - DOT_RADIUS < 0) {
					isLeft = false;
				} else if (currentPos + popupBounds.width + DOT_RADIUS > canvasBounds.width / PIXEL_RATIO) {
					isLeft = true;
				}

				if (isLeft) {
					popup.element.style.left = `${currentPos - popupBounds.width - DOT_RADIUS}px`;
				} else {
					popup.element.style.left = `${currentPos + chunkSize + DOT_RADIUS}px`;
				}
			}

			currentIndexOld = currentIndex;
		}
	}, 50);

	// config.mouse.addListener('move', handleOver);
	config.mouse.addListener('move', (mouse, e) => { TOUCHED && handleOver(mouse, e); });
	config.mouse.addListener('down', (mouse, e) => { TOUCHED = true; handleOver(mouse, e); });
	config.mouse.addListener('up', (mouse, e) => { TOUCHED = false; });

	return function drawBars(data, prevData, nextData, x, y, width, height) {
		currentWidth = width;
		currentHeight = height;
		currentX = x;
		currentY = y;

		const { key, items, opacity } = data;
		const normY = data.scaling[normYKey];

		count = items.length;
		chunkSize = normX1 * width;

		ctx.save();
		ctx.beginPath();
		for (let i = 0; i < items.length; i++) {
			// if (currentIndex > -1) {
			// 	ctx.globalAlpha = 0.4;
			// }
			// ctx.rect(
			// 	x + chunkSize * i,
			// 	y + height,
			// 	chunkSize,
			// 	-normY(items[i]) * height,
			// );
			ctx.rect(
				x + chunkSize * i,
				// y + height - normY(prevData ? prevData[i] : 0) * height,
				y + height,
				chunkSize,
				-normY(items[i]) * height,
			);
		}
		ctx.fillStyle = colors[key];
		ctx.fill();

		// ctx.globalAlpha = 1;
		// ctx.fillRect(
		// 	x + chunkSize * currentIndex,
		// 	y + height,
		// 	chunkSize,
		// 	-normY(items[currentIndex]) * height
		// );

		ctx.restore();

		// if (currentIndex > -1 && currentIndex < count) {
		// 	const X = x + norm.X(currentIndex) * width;
		// 	ctx.save();
		// 	ctx.strokeStyle = CURRENT.THEME.gridLines;
		// 	ctx.lineWidth = 1;
		// 	ctx.globalAlpha = 0.1;
		// 	ctx.beginPath();
		// 	ctx.moveTo(X, y);
		// 	ctx.lineTo(X, y + height);
		// 	ctx.stroke();
		// 	ctx.restore();

		// 	ctx.save();
		// 	ctx.beginPath();
		// 	ctx.globalAlpha = currOpacity;
		// 	ctx.arc(X, y + height - normY(items[currentIndex]) * height, DOT_RADIUS, 0, PI2);
		// 	ctx.lineWidth = lineWidth;
		// 	ctx.strokeStyle = colors[key];
		// 	ctx.fillStyle = CURRENT.THEME.background;
		// 	ctx.fill();
		// 	ctx.stroke();
		// 	ctx.restore();
		// }
	}
}