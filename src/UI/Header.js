import { createElement } from './utils';


export function createHeader(container, titleText, subtitleText) {
	const header = createElement(container, 'div', 'chart__header');

	const title = createElement(header, 'h2', 'chart__header-title');
	title.textContent = titleText;

	const subtitle = createElement(header, 'h3', 'chart__header-sub-title');
	subtitle.textContent = subtitleText;

	return {
		setTitle(titleText) {
			title.textContent = titleText;
		},
		setTitleButton(titleText, onClick) {
			function buttonClickHandler(e) {
				onClick && onClick(e);
				button.removeEventListener('click', buttonClickHandler);
			}
			const button = createElement(null, 'button', 'chart__header-title-button')
			button.textContent = titleText;
			button.addEventListener('click', buttonClickHandler);
			title.innerHTML = '';
			title.appendChild(button);
		},
		setSubtitle(subtitleText) {
			subtitle.textContent = subtitleText;
		}
	}
}