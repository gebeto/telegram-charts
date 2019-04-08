const NONE = 0;
const DRAG_START = 1;
const DRAG_END = 2;
const DRAG_ALL = 3;


export default function ControlsDrawer({ctx, canvasBounds, control, drawLine, ys}) {
	let xs = 0;
	let xe = 0;
	let ww = xe - xs;

	const pipaH = 36;
	const pipaH2 = pipaH / 2;

	const controlWidth = 14;
	const controlWidthMul2 = controlWidth * 2;
	const controlWidthDiv2 = controlWidth / 2;
	const controlPipaWidth = (controlWidth - 2) / 2;

	const baseClickRange = 14;

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

	const mouse = {
		x: 0,
		y: 0,
		newX: 0,
		newY: 0,
	}

	let mouseMode = NONE;
	let oldRange = [control.range[0], control.range[1]];
	function onMouseDown(e) {
		mouse.newX = mouse.x = (e.clientX - canvasBounds.left);
		mouse.newY = mouse.y = (e.clientY - canvasBounds.top);

		const clickRange = control.range[1] - control.range[0] < 0.3 ? 0 : baseClickRange;
		const clickRangeLeft = baseClickRange;
		const clickRangeRight = baseClickRange;

		const boundsStart = controlsBounds.start;
		const boundsEnd = controlsBounds.end;
		if (mouse.newX > boundsStart.x - clickRangeLeft && mouse.newX < boundsStart.x + boundsStart.width + clickRange && mouse.newY > boundsStart.y - clickRange && mouse.newY < boundsStart.y + boundsStart.height + clickRange) {
			mouseMode = DRAG_START;
		} else if (mouse.newX > boundsEnd.x - clickRange && mouse.newX < boundsEnd.x + boundsEnd.width + clickRangeRight && mouse.newY > boundsEnd.y - clickRange && mouse.newY < boundsEnd.y + boundsEnd.height + clickRange) {
			mouseMode = DRAG_END;
		} else if (mouse.newX > boundsStart.x + boundsStart.width && mouse.newX < boundsEnd.x && mouse.newY > boundsEnd.y - baseClickRange && mouse.newY < boundsEnd.y + boundsEnd.height + baseClickRange) {
			mouseMode = DRAG_ALL;
			oldRange = [control.range[0], control.range[1]];
		}
	}

	function onMouseMove(e) {
		if (!mouseMode) return;

		// console.log('MODE');
		mouse.newX = (e.clientX - canvasBounds.left);
		mouse.newY = (e.clientY - canvasBounds.top);

		const norm = control.updateRangeWithNormalCanvas(mouse.newX);
		if (mouseMode === DRAG_START) {
			if (norm >= 0) {
				control.updateRange(0, norm);
			} else {
				control.updateRange(0, 0);
			}
		} else if (mouseMode === DRAG_END) {
			if (norm <= 1) {
				control.updateRange(1, norm);
			} else {
				control.updateRange(1, 1);
			}
		} else {
			const normNew = control.updateRangeWithNormalCanvas(mouse.x);
			const diff = (norm - normNew);
			if (oldRange[0] + diff >= 0 && oldRange[1] + diff <= 1) {
				control.updateRange(0, oldRange[0] + diff);
				control.updateRange(1, oldRange[1] + diff);
			}
		}
	}

	function onMouseUp(e) { mouseMode = NONE; }

	function onTouchDown(e) {
		onMouseDown(e.touches[0]);
	}
	function onTouchMove(e) {
		onMouseMove(e.touches[0]);
		if (mouseMode !== NONE) {
			e.preventDefault();
		}
	}

	document.addEventListener('mousedown', onMouseDown);
	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);

	document.addEventListener('touchstart', onTouchDown);
	document.addEventListener('touchmove', onTouchMove, { passive: false });
	document.addEventListener('touchend', onMouseUp);
	document.addEventListener('touchcancel', onMouseUp);

	return function drawControl(x, y, width, height) {
		// console.log(mouseMode);
		const oldWidth = width;
		const oldX = x;
		width = width - controlWidthMul2;
		x = x + controlWidth

		for (let i = 0; i < ys.length; i++ ) {
			drawLine(ys[i], x, y + 3, width, height - 6);
		}

		// if (mouseMode === DRAG_START) {
		// 	xs = mouse.newX + controlWidthDiv2;
		// 	xe = x + width * control.range[1];
		// } else if (mouseMode === DRAG_END) {
		// 	xs = x + width * control.range[0];
		// 	xe = mouse.newX - controlWidthDiv2;
		// } else {
		// }
		xs = x + width * control.range[0];
		xe = x + width * control.range[1];
		// const ww = width * (control.range[1] - control.range[0]);
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
		ctx.fillStyle = "#E2EEF9";

		ctx.beginPath();
		ctx.moveTo(xs - 1, y);
		ctx.lineTo(xs - 1, y + height);
		ctx.arcTo(oldX, y + height, oldX, y + height - controlWidth, controlWidth / 2);
		ctx.arcTo(oldX, y, xs - 1, y, controlWidth / 2);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(xe + 1, y);
		ctx.lineTo(xe + 1, y + height);
		ctx.arcTo(oldWidth, y + height, oldWidth, y + height - controlWidth, controlWidth / 2);
		ctx.arcTo(oldWidth, y, xe, y, controlWidth / 2);
		ctx.closePath();
		ctx.fill();

		ctx.restore();
		// End fill unactive part



		// Range body
		ctx.save();
		ctx.fillStyle = "#C0D1E1";
		ctx.beginPath();
		ctx.rect(xs, y, ww, 1);
		ctx.rect(xs, y + height - 1, ww, 1);
		ctx.fill();


		// Start range
		ctx.beginPath();
		ctx.moveTo(xs, y);
		ctx.lineTo(xs, y + height);
		ctx.arcTo(xs - controlWidth, y + height, xs - controlWidth, y + height - controlWidth, controlWidth / 2);
		ctx.arcTo(xs - controlWidth, y, xs, y, controlWidth / 2);
		ctx.closePath();
		ctx.fill();

		// End range
		ctx.beginPath();
		ctx.moveTo(xe, y);
		ctx.lineTo(xe, y + height);
		ctx.arcTo(xe + controlWidth, y + height, xe + controlWidth, y + height - controlWidth, controlWidth / 2);
		ctx.arcTo(xe + controlWidth, y, xe, y, controlWidth / 2);
		ctx.closePath();
		ctx.fill();

		ctx.restore();

		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = "#FFFFFF";
		ctx.rect(xs - controlPipaWidth, y + pipaH2, -2, height - pipaH);
		ctx.rect(xe + controlPipaWidth, y + pipaH2, 2, height - pipaH);
		ctx.fill();
		ctx.restore();
	}
}