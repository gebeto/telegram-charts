import { createElement } from './utils';


export function createBar(container, titleText, onClick) {
	let isDay = true;
	const bar = createElement(container, 'button', 'change-theme');
	bar.textContent = titleText;
	bar.addEventListener('click', () => {
		// console.log('CHANGE THEME');
		isDay = !isDay;
		onClick && onClick(isDay);
	});

	return {}
}