import check from './check.svg';
import { createElement } from './utils';

export function createButtonFor(container, data, key) {
	const button = createElement(container, 'button', 'chart__buttons-button');
	button.textContent = 'Chart ' + data.names[key];
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