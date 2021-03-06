import { createElement } from './utils';


export function createHeader(container, titleText, subtitleText) {
	const header = createElement(container, 'div', 'chart__header');

	const title = createElement(header, 'h2', 'chart__header-title');
	title.textContent = titleText;

	const subtitle = createElement(header, 'h3', 'chart__header-sub-title');
	subtitle.textContent = subtitleText;

	let isSubtitleFreezed = false;

	return {
		setTitle(titleText) {
			title.textContent = titleText;
		},
		setTitleButton(titleText, onClick) {
			function buttonClickHandler(e) {
				onClick && onClick(e);
				button.removeEventListener('click', buttonClickHandler);
			}
			const button = createElement(null, 'span', 'chart__header-title-button')
			button.textContent = titleText;
			button.addEventListener('click', buttonClickHandler);
			title.innerHTML = '';
			title.appendChild(button);
		},
		setSubtitle(subtitleText) {
			if (isSubtitleFreezed) return;
			subtitle.textContent = subtitleText;
		},
		freezeSubtitle(subtitleText) {
			isSubtitleFreezed = true;
		},
		unfreezeSubtitle() {
			isSubtitleFreezed = false;
		}
	}
}