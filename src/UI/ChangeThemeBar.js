import { createElement } from './utils';


export function createBar(container, titleText) {
	const bar = createElement(container, 'button', 'change-theme');
	bar.textContent = titleText;
	bar.addEventListener('click', () => {
		console.log('CHANGE THEME');
	});

	return {
		setTitle(titleText) {
			title.textContent = titleText;
		},
		setSubtitle(subtitleText) {
			subtitle.textContent = subtitleText;
		}
	}
}