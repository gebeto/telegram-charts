import { throttle } from '../../utils';
import { PI2, ONE, TWO, CURRENT, DOT_RADIUS, PIXEL_RATIO } from '../../Globals';


export function createMouseDotHandling(config, canvasBounds, ctx, paddingLeftSelector, paddingRightSelector, rounding, plus) {
	const mouse = config.mouse.mouse;
	const popup = config.popup;
	const chunkScale = config.scaleX;


	const current = {
		x: 0,
		y: 0,
		width: 0,
		height: 0,

		indexOld: -1,
		index: -1,
	};

	const context = {
		count: 0,
		chunkScale: config.scaleX,
		chunkSize: chunkScale * current.width,
		chunkSizeDiv2: chunkScale * current.width / 2,

		onCanvasOld: false,
		onCanvas: false,
		isLeft: true,

		current: current,
	};

	let TOUCHED = false;
	

	const handleOver = throttle((mouse, e) => {
		// Check if mouse on canvas container
		context.onCanvasOld = context.onCanvas;
		context.onCanvas = (ctx.canvas === e.target || ctx.canvas.nextSibling.contains(e.target));
		if ((!context.onCanvas && context.onCanvasOld) || e.target.tagName === 'BUTTON') {
			if (current.index !== -1) {
				config.shouldChartUpdate = true;
			}
			current.index = -1;
			popup.hide();
		}

		if (!context.onCanvas) return;
		if (e.target !== ctx.canvas) return;

		if (context.onCanvas || (context.onCanvasOld === true && context.onCanvas === false)) {
			current.indexOld = current.index;
			if (mouse.newY > current.y && mouse.newY < current.y + current.height) {
				current.index = context.count - rounding((current.width + current.x - mouse.newX) / context.chunkSize + plus);
				if (current.index < context.count && current.index >= 0) {
					popup.show(current.index);
				} else {
					current.index = -1;
					popup.hide();
				}
			} else {
				current.index = -1;
				popup.hide();
			}
		}

		if (current.indexOld !== current.index) {
			config.shouldChartUpdate = true;

			if (current.index !== -1) {
				const popupBounds = popup.element.getBoundingClientRect();
				const currentPos = (current.index * context.chunkSize + current.x) / PIXEL_RATIO;
				const paddingLeft = paddingRightSelector(context) / PIXEL_RATIO;
				const paddingRight = paddingLeftSelector(context) / PIXEL_RATIO;
				if (currentPos - popupBounds.width - paddingRight < 0) {
					context.isLeft = false;
				} else if (currentPos + popupBounds.width + paddingRight > canvasBounds.width / PIXEL_RATIO) {
					context.isLeft = true;
				}

				if (context.isLeft) {
					popup.element.style.left = `${currentPos - popupBounds.width - paddingLeft}px`;
				} else {
					popup.element.style.left = `${currentPos + paddingRight}px`;
				}
			}

			current.indexOld = current.index;
		}
	}, 50);

	// config.mouse.addListener('move', handleOver);
	config.mouse.addListener('move', (mouse, e) => { TOUCHED && handleOver(mouse, e); });
	config.mouse.addListener('down', (mouse, e) => { TOUCHED = true; handleOver(mouse, e); });
	config.mouse.addListener('up', (mouse, e) => { TOUCHED = false; });

	return context;
}