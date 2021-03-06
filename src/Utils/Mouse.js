import { PIXEL_RATIO } from '../Globals';

// let lastEntered = null;

function createDispatcher(types) {
	const handlers = {};
	const dispatchers = {};
	const mouse = {
		x: 0,
		y: 0,
		xRaw: 0,
		yRaw: 0,

		newX: 0,
		newY: 0,
		newXRaw: 0,
		newYRaw: 0,

		isHolding: false,
	}
	types.forEach(type => {
		handlers[type] = [];
		dispatchers[type] = function(mouse, event) {
			for (let i = 0; i < handlers[type].length; i++) {
				handlers[type][i](mouse, event);
			}
		}
	});
	return {
		mouse: mouse,
		addListener(type, handler) {
			handlers[type].push(handler);
		},
		removeListener(type, handler) {
			const index = handlers[type].indexOf(handler);
			handlers[type].splice(index, 1);
		},
		dispatch(type, event) {
			if (dispatchers[type]) {
				dispatchers[type](mouse, event);
			} else {
				throw Error("Unknown event");
			}
		}
	}
}

export function createMouseForChart(config) {
	const dispatcher = createDispatcher(['move', 'enter', 'leave', 'down', 'up']);
	const mouse = dispatcher.mouse;

	function onMouseDown(e) {
		mouse.xRaw = e.clientX - config.canvasBounds.left;
		mouse.yRaw = e.clientY - config.canvasBounds.top;
		mouse.x = mouse.xRaw * PIXEL_RATIO;
		mouse.y = mouse.yRaw * PIXEL_RATIO;

		mouse.newXRaw = mouse.xRaw;
		mouse.newYRaw = mouse.yRaw;
		mouse.newX = mouse.x;
		mouse.newY = mouse.y;

		dispatcher.dispatch('down', e);
	}

	function onMouseMove(e) {
		mouse.newXRaw = e.clientX - config.canvasBounds.left;
		mouse.newYRaw = e.clientY - config.canvasBounds.top;
		mouse.newX = mouse.newXRaw * PIXEL_RATIO;
		mouse.newY = mouse.newYRaw * PIXEL_RATIO;

		dispatcher.dispatch('move', e);
	}

	function onMouseEnter(e) {
		dispatcher.dispatch('enter', e);
	}

	function onMouseUp(e) {
		mouse.isHolding = false;
		dispatcher.dispatch('up', e);
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
		addListener: dispatcher.addListener,
		removeListener: dispatcher.removeListener,
	};
}