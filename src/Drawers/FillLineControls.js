import FillLineLayerDrawer from './Layers/FillLine';
import {
	PIXEL_RATIO,
	SIDES_PADDING,
	ONE,
	CURRENT,
} from '../Globals';

const NONE = 0;
const DRAG_START = 1;
const DRAG_END = 2;
const DRAG_ALL = 3;


export default function ControlsDrawer(drawersArgs) {
	const { ctx, config, canvasBounds, control, ys, yAxis, xAxis } = drawersArgs;
	const drawFillLineLayer = FillLineLayerDrawer(drawersArgs);

	let xs = 0;
	let xe = 0;
	let ww = xe - xs;

	const pipaH = 10 * PIXEL_RATIO;
	const pipaH2 = pipaH / 2;

	const controlWidth = 10 * PIXEL_RATIO;
	const controlWidthMul2 = controlWidth * 2;
	const controlWidthDiv2 = controlWidth / 2;
	const controlWidthDiv13 = controlWidth - controlWidth / 3;
	const controlPipaWidth = 2 * PIXEL_RATIO;
	const controlPipaPos = (controlWidth - controlPipaWidth) / 2;

	let mouseMode = NONE;
	const clickRangeBase = 14 * PIXEL_RATIO;
	let oldRange = [control.range[0], control.range[1]];
	const controlsBounds = {
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

		const boundsStart = controlsBounds.start;
		const boundsEnd = controlsBounds.end;
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

	return function drawControl(x, y, width, height) {
		// ctx.save();
		// ctx.fillStyle = 'green';
		// ctx.fillRect(x, y, width, height);
		// ctx.restore();
		
		const oldWidth = width;
		const oldX = x;
		width = width - controlWidthMul2;
		x = x + controlWidth

		const percentage = new Array(xAxis.length).fill(0);
		for (let i = 0; i < yAxis.items.length; i++) {
			for (let j = 0; j < yAxis.items[i].items.length; j++) {
				percentage[j] += yAxis.items[i].items[j] * yAxis.items[i].opacity.value;
			}
		}
		for (let i = 0; i < xAxis.length; i++) {
			percentage[i] /= 100;
		}

		const stacked = new Array(xAxis.length).fill(0);
		for (let i = 0; i < yAxis.items.length; i++) {
			drawFillLineLayer(yAxis.items[i], stacked, percentage, x, y + 3, width, height - 6);
		}

		xs = x + width * control.range[0];
		xe = x + width * control.range[1];
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
		// ctx.rect(xs - controlPipaPos, y + pipaH2, -controlPipaWidth, height - pipaH);
		// ctx.rect(xe + controlPipaPos, y + pipaH2, controlPipaWidth, height - pipaH);
		ctx.rect(xs - controlPipaPos, y + height/2 - pipaH2, -controlPipaWidth, pipaH);
		ctx.rect(xe + controlPipaPos, y + height/2 - pipaH2, controlPipaWidth, pipaH);
		// ctx.rect(xe + controlPipaPos, y + pipaH2, controlPipaWidth, height - pipaH);
		ctx.fill();
		ctx.restore();
	}
}