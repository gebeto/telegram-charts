import check from './check.svg';
import { createElement } from './utils';

export function createButtonFor(container, data, y, handler) {
	// let enabled = true;
	const key = y[0];
	const state = {
		enabled: true,
		data: y,
	}
	const button = createElement(container, 'button', 'chart__buttons-button');
	// button.textContent = 'Chart ' + data.names[key];
	button.textContent = data.names[key];
	button.style.background = data.colors[key];
	button.style.borderColor = data.colors[key];
	button.addEventListener('click', () => {
		state.enabled = !state.enabled;

		if (state.enabled === true) {
			button.className = 'chart__buttons-button';
			button.style.color = '#FFF';
		} else {
			button.className = 'chart__buttons-button unchecked';
			button.style.color = data.colors[key];
		}

		handler && handler(state.enabled);
	});

	return state;
}

export function createButtons(container, data, ysAxis, handler) {
	const buttonsWrapper = createElement(container, 'div', 'chart__buttons');

	const buttons = ysAxis.map(y => createButtonFor(buttonsWrapper, data, y, (enabled) => {
		console.log(y[0], enabled);
		handler && handler()
	}));

	return buttons;
}