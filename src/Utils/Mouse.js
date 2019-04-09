export default function mouseForChart({ canvasBounds }) {
	const moveHandlers = [];
	const downHandlers = [];
	const upHandlers = [];

	const mouse = {
		x: 0,
		y: 0,
		newX: 0,
		newY: 0,
		normNewX: 0,
		normNewY: 0,
		onCanvas: false,
	}

	function onMouseDown(e) {
		mouse.newX = mouse.x = (e.clientX - canvasBounds.left);
		mouse.newY = mouse.y = (e.clientY - canvasBounds.top);
		// mouse.normNewX = control.normalizeForCanvas(mouse.newX);
		// mouse.normNewY = control.normalizeForCanvas(mouse.newY);

		for (let i = 0; i < downHandlers.length; i++) {
			downHandlers[i](mouse);
		}
	}

	function onMouseMove(e) {
		mouse.newX = (e.clientX - canvasBounds.left);
		mouse.newY = (e.clientY - canvasBounds.top);
		// mouse.normNewX = control.normalizeForCanvas(mouse.newX);
		// mouse.normNewY = control.normalizeForCanvas(mouse.newY);

		mouse.onCanvas = mouse.newX < canvasBounds.right && mouse.newX > canvasBounds.left && mouse.newY > canvasBounds.top && mouse.newY < canvasBounds.bottom;

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