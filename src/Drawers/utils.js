import { PIXEL_RATIO } from '../Globals';


export function debugLayer(ctx, x, y, width, height) {
	ctx.save();
	ctx.fillStyle = 'green';
	ctx.fillRect(x, y, width, height);
	ctx.restore();
}


export const NONE = 0;
export const DRAG_START = 1;
export const DRAG_END = 2;
export const DRAG_ALL = 3;

export function createControlLayer(config, control) {
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

	let mouseMode = NONE;
	const clickRangeBase = 14 * PIXEL_RATIO;
	let oldRange = [control.range[0], control.range[1]];

	function mouseMove(mouse) {
		if (mouseMode === NONE) return;
		config.shouldChartUpdate = true;
		config.shouldControlUpdate = true;

		const norm = control.normalizeForControl(mouse.newX);
		const normOld = control.normalizeForControl(mouse.x);
		const diff = (norm - normOld);

		const newRangeStart = oldRange[0] + diff;
		const newRangeEnd = oldRange[1] + diff;
		if (mouseMode === DRAG_START) {
			if (newRangeStart > 0) {
				control.updateRange(newRangeStart, oldRange[1]);
			} else {
				control.updateRange(0, oldRange[1]);
			}
		} else if (mouseMode === DRAG_END) {
			if (newRangeEnd < 1) {
				control.updateRange(oldRange[0], newRangeEnd);
			} else {
				control.updateRange(oldRange[0], 1);
			}
		} else {
			if (newRangeStart >= 0 && newRangeEnd <= 1) {
				control.updateRange(newRangeStart, newRangeEnd);
			} else {
				if (newRangeEnd > 1) {
					let diff = 1 - oldRange[1];
					control.updateRange(oldRange[0] + diff, oldRange[1] + diff);
				} else if (newRangeStart < 0) {
					let diff = 0 - oldRange[0];
					control.updateRange(oldRange[0] + diff, oldRange[1] + diff);
				}
			}
		}
	}

	function mouseDown(mouse) {
		const clickRange = clickRangeBase;
		const clickRangeStart = clickRangeBase;
		const clickRangeEnd = clickRangeBase;

		const boundsStart = OPTS.controlsBounds.start;
		const boundsEnd = OPTS.controlsBounds.end;
		const inControl = mouse.y > boundsStart.y && mouse.y < boundsStart.y + boundsStart.height;
		if (!inControl) return;
		config.shouldChartUpdate = true;
		config.shouldControlUpdate = true;
		
		oldRange = [control.range[0], control.range[1]];
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

	config.mouse.addListener('move', mouseMove);
	config.mouse.addListener('down', mouseDown);
	config.mouse.addListener('up', mouseUp);


	return OPTS;
}