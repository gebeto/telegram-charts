import { PIXEL_RATIO, CURRENT, ONE } from '../../Globals';

export const NONE = 0;
export const DRAG_START = 1;
export const DRAG_END = 2;
export const DRAG_ALL = 3;

export const pipaH = 10 * PIXEL_RATIO;
export const pipaH2 = pipaH / 2;
export const controlWidth = 10 * PIXEL_RATIO;
export const controlWidthMul2 = controlWidth * 2;
export const controlWidthDiv2 = controlWidth / 2;
export const controlWidthDiv13 = controlWidth - controlWidth / 3;
export const controlPipaWidth = 2 * PIXEL_RATIO;
export const controlPipaPos = (controlWidth - controlPipaWidth) / 2;


export function createControlLayer(config) {
	const OPTS = {
		controlsBounds: {
			start: {
				x: 0,
				y: 0,
				width: 0,
				height: 0,
			},
			end: {
				x: 0,
				y: 0,
				width: 0,
				height: 0,
			},
		}
	};
	const controlsBounds = OPTS.controlsBounds;

	let mouseMode = NONE;
	// let oldRange = [config.control.range[0], config.control.range[1]];
	let oldRange = [0, 0];
	const clickRangeBase = 14 * PIXEL_RATIO;

	let xs = 0;
	let xe = 0;
	let ww = xe - xs;

	let oldWidth = 0;
	let oldX = 0;

	function mouseMove(mouse) {
		if (mouseMode === NONE) return;
		config.chart.shouldUpdate = true;
		config.control.shouldUpdate = true;

		const norm = config.normalizeForControl(mouse.newX);
		const normOld = config.normalizeForControl(mouse.x);
		const diff = (norm - normOld);

		const newRangeStart = oldRange[0] + diff;
		const newRangeEnd = oldRange[1] + diff;
		if (mouseMode === DRAG_START) {
			if (newRangeStart > 0) {
				config.control.updateRange(newRangeStart, oldRange[1]);
			} else {
				config.control.updateRange(0, oldRange[1]);
			}
		} else if (mouseMode === DRAG_END) {
			if (newRangeEnd < 1) {
				config.control.updateRange(oldRange[0], newRangeEnd);
			} else {
				config.control.updateRange(oldRange[0], 1);
			}
		} else {
			if (newRangeStart >= 0 && newRangeEnd <= 1) {
				config.control.updateRange(newRangeStart, newRangeEnd);
			} else {
				if (newRangeEnd > 1) {
					let diff = 1 - oldRange[1];
					config.control.updateRange(oldRange[0] + diff, oldRange[1] + diff);
				} else if (newRangeStart < 0) {
					let diff = 0 - oldRange[0];
					config.control.updateRange(oldRange[0] + diff, oldRange[1] + diff);
				}
			}
		}
	}

	function mouseDown(mouse) {
		const clickRange = clickRangeBase;
		const clickRangeStart = clickRangeBase;
		const clickRangeEnd = clickRangeBase;

		const boundsStart = controlsBounds.start;
		const boundsEnd = controlsBounds.end;
		const inControl = mouse.y > boundsStart.y && mouse.y < boundsStart.y + boundsStart.height;
		if (!inControl) return;
		config.chart.shouldUpdate = true;
		config.control.shouldUpdate = true;
		
		oldRange = [config.control.range[0], config.control.range[1]];
		if (mouse.newX > boundsStart.x - clickRangeStart && mouse.newX < boundsStart.x + boundsStart.width && mouse.newY > boundsStart.y - clickRangeStart && mouse.newY < boundsStart.y + boundsStart.height + clickRangeStart) {
			mouseMode = DRAG_START;
		} else if (mouse.newX > boundsEnd.x && mouse.newX < boundsEnd.x + boundsEnd.width + clickRangeEnd && mouse.newY > boundsEnd.y - clickRangeEnd && mouse.newY < boundsEnd.y + boundsEnd.height + clickRangeEnd) {
			mouseMode = DRAG_END;
		} else if (mouse.newX > boundsStart.x + boundsStart.width && mouse.newX < boundsEnd.x && mouse.newY > boundsEnd.y - clickRangeBase && mouse.newY < boundsEnd.y + boundsEnd.height + clickRangeBase) {
			mouseMode = DRAG_ALL;
		}
	}

	function mouseUp(mouse) {
		mouseMode = NONE;
	}


	function init() {
		config.mouse.addListener('move', mouseMove);
		config.mouse.addListener('down', mouseDown);
		config.mouse.addListener('up', mouseUp);
	}

	function destroy() {
		config.mouse.removeListener('move', mouseMove);
		config.mouse.removeListener('down', mouseDown);
		config.mouse.removeListener('up', mouseUp);
	}

	function updateControlBounds(x, width) {
		oldWidth = width;
		oldX = x;
	}

	function renderControl(ctx, x, y, width, height) {
		xs = x + width * config.control.range[0];
		xe = x + width * config.control.range[1];
		ww = xe - xs;

		controlsBounds.start.x = xs - controlWidth;
		controlsBounds.start.y = y;
		controlsBounds.start.width = controlWidth;
		controlsBounds.start.height = height;

		controlsBounds.end.x = xe;
		controlsBounds.end.y = y;
		controlsBounds.end.width = controlWidth;
		controlsBounds.end.height = height;

		// Fill unactive part
		ctx.save();
		ctx.globalAlpha = 0.6;
		// ctx.fillStyle = "#E2EEF9";
		ctx.fillStyle = CURRENT.THEME.scrollBackground;

		ctx.beginPath();
		ctx.moveTo(xs - 1, y);
		ctx.lineTo(xs - 1, y + height);
		ctx.arcTo(oldX, y + height, oldX, y + height - controlWidth, controlWidthDiv2);
		ctx.arcTo(oldX, y, xs - 1, y, controlWidthDiv2);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(xe + 1, y);
		ctx.lineTo(xe + 1, y + height);
		ctx.arcTo(oldX + oldWidth, y + height, oldX + oldWidth, y + height - controlWidth, controlWidthDiv2);
		ctx.arcTo(oldX + oldWidth, y, xe, y, controlWidthDiv2);
		ctx.closePath();
		ctx.fill();

		ctx.restore();
		// End fill unactive part


		// Range body
		ctx.save();
		// ctx.fillStyle = "#C0D1E1";
		ctx.fillStyle = CURRENT.THEME.scrollSelector;
		ctx.beginPath();
		ctx.rect(xs, y, ww, ONE);
		ctx.rect(xs, y + height - ONE, ww, ONE);
		ctx.fill();


		// Start range
		ctx.beginPath();
		const xxxs = xs;
		ctx.moveTo(xxxs, y);
		ctx.lineTo(xxxs, y + height);
		ctx.arcTo(xxxs - controlWidth, y + height, xxxs - controlWidth, y + height - controlWidth, controlWidthDiv13);
		ctx.arcTo(xxxs - controlWidth, y, xxxs, y, controlWidthDiv13);
		ctx.closePath();
		ctx.fill();

		// End range
		ctx.beginPath();
		ctx.moveTo(xe, y);
		ctx.lineTo(xe, y + height);
		ctx.arcTo(xe + controlWidth, y + height, xe + controlWidth, y + height - controlWidth, controlWidthDiv13);
		ctx.arcTo(xe + controlWidth, y, xe, y, controlWidthDiv13);
		ctx.closePath();
		ctx.fill();

		ctx.restore();

		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = "#FFFFFF";
		ctx.rect(xs - controlPipaPos, y + height/2 - pipaH2, -controlPipaWidth, pipaH);
		ctx.rect(xe + controlPipaPos, y + height/2 - pipaH2, controlPipaWidth, pipaH);
		ctx.fill();
		ctx.restore();
	}


	OPTS.updateControlBounds = updateControlBounds;
	OPTS.renderControl = renderControl;
	OPTS.destroy = destroy;
	OPTS.init = init;

	init();

	return OPTS;
}