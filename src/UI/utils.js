export function createElement(parent, elementTag, className) {
	const element = document.createElement(elementTag);
	element.className = className;
	if (parent) {
		parent.appendChild(element);
	}
	return element;
}

export function createLongPress(button, handlePress, handleLongPress) {
	let timeout = null;
	let dropClick = false;

	function mouseUp() {
		clearTimeout(timeout);
		if (dropClick) {
			dropClick = false;
			return;
		}

		handlePress && handlePress();
	}

	function mouseDown() {
		timeout = setTimeout(() => {
			handleLongPress && handleLongPress();
			dropClick = true;
		}, 200);
	}

	function mouseMove() {
		clearTimeout(timeout);
	}

	function init() {
		button.addEventListener('click', mouseUp);
		button.addEventListener('mousedown', mouseDown);
		button.addEventListener('mousemove', mouseMove);
		button.addEventListener('touchstart', mouseDown);
		button.addEventListener('touchmove', mouseMove);
	}

	function destroy() {
		button.removeEventListener('click', mouseUp);
		button.removeEventListener('mousedown', mouseDown);
		button.removeEventListener('mousemove', mouseMove);
		button.removeEventListener('touchstart', mouseDown);
		button.removeEventListener('touchmove', mouseMove);
	}

	init();

	return {
		init, destroy,
	};
}