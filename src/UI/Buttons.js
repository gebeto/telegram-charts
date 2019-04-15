import check from './check.svg';
import { createElement } from './utils';

export function createButtonFor(container, animator, data, y, globState, handler) {
	// let enabled = true;
	const key = y.key;
	const state = {
		enabled: true,
	};
	const button = createElement(container, 'button', 'chart__buttons-button');
	button.textContent = data.names[key];
	button.style.backgroundColor = data.colors[key];
	button.style.borderColor = data.colors[key];

	let timeout = null;
	let dropClick = false;
	function mouseUp() {
		clearTimeout(timeout);
		if (dropClick) {
			dropClick = false;
			return;
		}
		if (globState.activeButtonsCount === 1 && state.enabled) {
			button.className = 'chart__buttons-button error';
			setTimeout(() => {button.className = 'chart__buttons-button';}, 140)
			return;
		}
		state.enabled = !state.enabled;

		update();
	}

	function mouseDown() {
		timeout = setTimeout(() => {
			globState.resetAll();
			dropClick = true;
		}, 200);
	}

	function mouseMove() {
		clearTimeout(timeout);
	}

	button.addEventListener('click', mouseUp);
	button.addEventListener('mousedown', mouseDown);
	button.addEventListener('mousemove', mouseMove);
	button.addEventListener('touchstart', mouseDown);
	button.addEventListener('touchmove', mouseMove);
	
	function update() {
		if (state.enabled === true) {
			button.className = 'chart__buttons-button';
			button.style.color = '#FFF';
		} else {
			button.className = 'chart__buttons-button unchecked';
			button.style.color = data.colors[key];
		}

		y.enabled = state.enabled;
		y.opacity.play(state.enabled ? 1 : 0);

		handler && handler(state.enabled);
	}

	state.reset = function reset() {
		if (!state.enabled) {
			state.enabled = true;
			update();
		}
	}

	return state;
}

export function createButtons(container, animator, data, ysAxis, handler) {
	const state = {
		activeButtonsCount: ysAxis.items.length,
	};
	const buttonsWrapper = createElement(container, 'div', 'chart__buttons');
	const buttonsObj = {};

	const buttons = ysAxis.items.map(y => {
		return buttonsObj[y[0]] = createButtonFor(buttonsWrapper, animator, data, y, state, (enabled) => {
			state.activeButtonsCount += enabled ? 1 : -1;
			if (state.activeButtonsCount < 1) {
				return;
			}

			handler && handler();
		});
	});

	state.resetAll = function resetAll() {
		buttons.forEach(button => {
			button.reset();
		});
	}

	return buttonsObj;
}