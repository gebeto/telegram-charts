import { throttle } from '../../utils';
import { PIXEL_RATIO, FONT, PI2 } from '../../Globals';


export default function Dots({ config, ctx, norm, colors }) {
	const mouse = config.mouse.mouse;
	const dotRadius = 4 * PIXEL_RATIO;
	const lineWidth = 2 * PIXEL_RATIO;

	let currentWidth = 0;
	let currentHeight = 0;
	let currentX = 0;
	let currentY = 0;
	let count = 0;
	let chunkSize = norm.X(1) * currentWidth;

	let currentIndexOld = -1;
	let currentIndex = -1;

	let onCanvasOld = false;
	let onCanvas = false;

	const popup = config.popup;

	const handleOver = (mouse, e) => {
		// Check if mouse on canvas
		onCanvasOld = onCanvas;
		onCanvas = ctx.canvas.parentNode.contains(e.target);
		if (e.target !== ctx.canvas && onCanvas) return;
		
		if (onCanvas || (onCanvasOld === true && onCanvas === false)) {
			currentIndexOld = currentIndex;
			if (mouse.newY > currentY && mouse.newY < currentY + currentHeight) {
				currentIndex = count - Math.ceil((currentWidth + currentX - mouse.newX) / chunkSize + 1);
				// popup.style.opacity = 1;
				// popup.style.visibility = 'visible';
				popup.show(currentIndex);
			} else {
				currentIndex = -1;
				// popup.style.opacity = 0;
				// popup.style.visibility = 'hidden';
				popup.hide();
			}
		}

		if (currentIndexOld !== currentIndex) {
			config.shouldChartUpdate = true;

			if (currentIndex !== -1) {
				const popupBounds = popup.element.getBoundingClientRect();
				popup.element.style.left = `${mouse.newX / PIXEL_RATIO - popupBounds.width / 2}px`;
			}
		}
	};

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
		chunkSize = norm.X(1) * width;
		const chunkSizeDiv2 = chunkSize / 2;

		if (currentIndex > -1 && currentIndex < count) {
			const X = x + norm.X(currentIndex) * width;
			ctx.save();
			ctx.strokeStyle = '#182D3B';
			ctx.lineWidth = 1;
			ctx.globalAlpha = 0.1;
			ctx.beginPath();
			ctx.moveTo(X, y);
			ctx.lineTo(X, y + height);
			ctx.stroke();
			ctx.restore();

			ctx.save();
			ctx.beginPath();
			ctx.arc(X, y + height - norm.Y(items[currentIndex]) * height, dotRadius, 0, PI2);
			ctx.lineWidth = lineWidth;
			ctx.strokeStyle = colors[key];
			ctx.fillStyle = '#FFF';
			ctx.fill();
			ctx.stroke();
			ctx.restore();
		}
	}
}