import { PIXEL_RATIO } from '../Globals';

export default function mouseForChart({ canvasBounds }) {
	const moveHandlers = [];
	const downHandlers = [];
	const upHandlers = [];

	const mouse = {
		x: 0,
		y: 0,
		rawX: 0,
		rawY: 0,

		newX: 0,
		newY: 0,
		rawNewX: 0,
		rawNewY: 0,

		onCanvas: false,
	}

	function setCoords(x, y) {
		mouse.rawX = x;
		mouse.rawY = y;
		mouse.x = x * PIXEL_RATIO;
		mouse.y = y * PIXEL_RATIO;
		setNewCoords(x, y);
	}

	function setNewCoords(x, y) {
		mouse.rawNewX = x;
		mouse.rawNewY = y;
		mouse.newX = x * PIXEL_RATIO;
		mouse.newY = y * PIXEL_RATIO;
	}

	function onMouseDown(e) {
		setCoords(
			e.clientX - canvasBounds.left,
			e.clientY - canvasBounds.top
		);

		for (let i = 0; i < downHandlers.length; i++) {
			downHandlers[i](mouse);
		}
	}

	function onMouseMove(e) {
		setNewCoords(
			e.clientX - canvasBounds.left,
			e.clientY - canvasBounds.top
		);

		mouse.onCanvas = 
			mouse.rawNewY < canvasBounds.right
			&& mouse.rawNewY > canvasBounds.left
			&& mouse.rawNewY > canvasBounds.top
			&& mouse.rawNewY < canvasBounds.bottom;

		for (let i = 0; i < moveHandlers.length; i++) {
			moveHandlers[i](mouse);
		}
	}

	function onMouseUp(e) {
		for (let i = 0; i < upHandlers.length; i++) {
			upHandlers[i](mouse);
		}
	}

	function onTouchDown(e) {
		onMouseDown(e.touches[0]);
	}
	function onTouchMove(e) {
		onMouseMove(e.touches[0]);
	}

	document.addEventListener('mousedown', onMouseDown);
	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);

	document.addEventListener('touchstart', onTouchDown);
	document.addEventListener('touchmove', onTouchMove, { passive: false });
	document.addEventListener('touchend', onMouseUp);
	document.addEventListener('touchcancel', onMouseUp);
	document.addEventListener('selectstart', e => false);

	return {
		mouse: mouse,
		addMoveListener(handler) {
			moveHandlers.push(handler);
		},
		addDownListener(handler) {
			downHandlers.push(handler);
		},
		addUpListener(handler) {
			upHandlers.push(handler);
		},
	};
}