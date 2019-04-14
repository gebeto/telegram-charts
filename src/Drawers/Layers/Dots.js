import { throttle } from '../../utils';
import { PIXEL_RATIO, FONT, PI2, CURRENT } from '../../Globals';


export default function Dots({ canvasBounds, config, ctx, norm, colors, ys }) {
	const mouse = config.mouse.mouse;
	const dotRadius = 4 * PIXEL_RATIO;
	const lineWidth = 2 * PIXEL_RATIO;

	let currentWidth = 0;
	let currentHeight = 0;
	let currentX = 0;
	let currentY = 0;
	let count = 0;
	const normX1 = norm.X(1);
	let chunkSize = normX1 * currentWidth;

	let currentIndexOld = -1;
	let currentIndex = -1;

	let onCanvasOld = false;
	let onCanvas = false;

	const popup = config.popup;

	const handleOver = throttle((mouse, e) => {
		// Check if mouse on canvas container
		onCanvasOld = onCanvas;
		// onCanvas = ctx.canvas.parentNode.contains(e.target);
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
				currentIndex = count - Math.round((currentWidth + currentX - mouse.newX) / chunkSize + 1);
				if (currentIndex < count) {
					popup.show(currentIndex);
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
				const popos = popupBounds.width / 2;
				const currentPos = (currentIndex * chunkSize + currentX) / PIXEL_RATIO;
				if (currentPos - popos < canvasBounds.left + 10) {
					popup.element.style.left = `${canvasBounds.left + 10}px`;
				} else if (currentPos + popos > canvasBounds.right - 10) {
					popup.element.style.left = `${canvasBounds.right - popupBounds.width - 10}px`;
				} else {
					popup.element.style.left = `${currentPos - popupBounds.width / 2}px`;
				}
			}

			currentIndexOld = currentIndex;
		}
	}, 50);

	config.mouse.addListener('move', handleOver);
	config.mouse.addListener('down', handleOver);

	return function drawDots(data, x, y, width, height) {
		currentWidth = width;
		currentHeight = height;
		currentX = x;
		currentY = y;

		const [key, ...items] = data;
		const opacity = config.buttons[key].opacity.value;
		if (!opacity) return;

		count = items.length;
		chunkSize = normX1 * width;
		const chunkSizeDiv2 = chunkSize / 2;

		if (currentIndex > -1 && currentIndex < count) {
			const X = x + norm.X(currentIndex) * width;
			ctx.save();
			// ctx.strokeStyle = '#182D3B';
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
			ctx.globalAlpha = opacity;
			ctx.arc(X, y + height - norm.Y(items[currentIndex]) * height, dotRadius, 0, PI2);
			ctx.lineWidth = lineWidth;
			ctx.strokeStyle = colors[key];
			// ctx.fillStyle = '#FFF';
			ctx.fillStyle = CURRENT.THEME.background;
			ctx.fill();
			ctx.stroke();
			ctx.restore();
		}
	}
}