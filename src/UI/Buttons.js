import check from './check.svg';
import { createElement } from './utils';

export function createButtonFor(container, animator, data, y, handler) {
	// let enabled = true;
	const key = y.key;
	const state = {
		enabled: true,
	}
	const button = createElement(container, 'button', 'chart__buttons-button');
	button.textContent = data.names[key];
	button.style.backgroundColor = data.colors[key];
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

		y.enabled = state.enabled;
		y.opacity.play(state.enabled ? 1 : 0);

		handler && handler(state.enabled);
	});

	return state;
}

export function createButtons(container, animator, data, ysAxis, handler) {
	const buttonsWrapper = createElement(container, 'div', 'chart__buttons');
	const buttonsObj = {};

	ysAxis.items.map(y => {
		buttonsObj[y[0]] = createButtonFor(buttonsWrapper, animator, data, y, (enabled) => {
			// console.log(y[0], enabled);
			handler && handler();
		});
	});

	return buttonsObj;
}