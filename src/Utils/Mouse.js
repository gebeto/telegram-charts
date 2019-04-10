import { PIXEL_RATIO } from '../Globals';

// let lastEntered = null;

function createDispatcher(types) {
	const handlers = {};
	const dispatchers = {};
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
	types.forEach(type => {
		handlers[type] = [];
		dispatchers[type] = function(mouse) {
			for (let i = 0; i < handlers[type].length; i++) {
				handlers[type][i](mouse);
			}
		}
	});
	return {
		mouse: mouse,
		addListener(type, handler) {
			handlers[type].push(handler);
		},
		dispatch(type) {
			if (dispatchers[type]) {
				dispatchers[type](mouse);
			} else {
				throw Error("Unknown event");
			}
		}
	}
}

export default function mouseForChart({ canvas, canvasBounds }) {
	const dispatcher = createDispatcher(['move', 'enter', 'leave', 'down', 'up']);
	const mouse = dispatcher.mouse;

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

		dispatcher.dispatch('down');
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

		dispatcher.dispatch('move');
	}

	function onMouseEnter(e) {
		// if (lastEntered && lastEntered !== dispatcher && lastEntered.dispatch) {
		// 	lastEntered.dispatch('leave');
		// }
		// lastEntered = dispatcher;
		dispatcher.dispatch('enter');
	}

	function onMouseUp(e) {
		dispatcher.dispatch('up');
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
	canvas.addEventListener('mouseenter', onMouseEnter);
	canvas.addEventListener('touchstart', onMouseEnter);

	document.addEventListener('touchstart', onTouchDown);
	document.addEventListener('touchmove', onTouchMove, { passive: false });
	document.addEventListener('touchend', onMouseUp);
	document.addEventListener('touchcancel', onMouseUp);
	document.addEventListener('selectstart', e => false);

	return {
		mouse: mouse,
		addListener: dispatcher.addListener,
	};
}