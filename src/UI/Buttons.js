import check from './check.svg';
import { createElement } from './utils';

export function createButtonFor(container, data, key, handler) {
	let state = true;
	const button = createElement(container, 'button', 'chart__buttons-button');
	// button.textContent = 'Chart ' + data.names[key];
	button.textContent = data.names[key];
	button.style.background = data.colors[key];
	button.style.borderColor = data.colors[key];
	button.addEventListener('click', () => {
		state = !state;

		if (state === true) {
			button.className = 'chart__buttons-button';
			button.style.color = '#FFF';
		} else {
			button.className = 'chart__buttons-button unchecked';
			button.style.color = data.colors[key];
		}

		handler && handler(state);
	})
}

export function createButtons(container, data, ysAxis) {
	const buttonsWrapper = createElement(container, 'div', 'chart__buttons');

	const buttons = ysAxis.map(y => createButtonFor(buttonsWrapper, data, y[0], (state) => {
		console.log(y[0], state);
	}));

	// const title = createElement(header, 'h2', 'chart__header-title');
	// title.textContent = titleText;

	// const subtitle = createElement(header, 'h3', 'chart__header-sub-title');
	// subtitle.textContent = subtitleText;

	return {
		// setTitle(titleText) {
		// 	title.textContent = titleText;
		// },
		// setSubtitle(subtitleText) {
		// 	subtitle.textContent = subtitleText;
		// }
	}
}