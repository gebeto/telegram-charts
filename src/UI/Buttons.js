import check from './check.svg';
import { createElement } from './utils';

export function createButtonFor(container, data, key) {
	const button = createElement(container, 'button', 'chart__buttons-button');

	const icon = createElement(button, 'img', 'chart__buttons-button-icon');
	icon.src = check;
	console.log(icon);

	const title = createElement(button, 'span', 'chart__buttons-button-title')
	title.textContent = 'Chart ' + data.names[key];
}

export function createButtons(container, data, ysAxis) {
	const buttonsWrapper = createElement(container, 'div', 'chart__buttons');

	const button = createButtonFor(buttonsWrapper, data, ysAxis[0][0]);

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