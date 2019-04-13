import { createElement } from './utils';


export function createBar(container, onClick) {
	let isDay = true;
	const bar = createElement(container, 'button', 'change-theme');
	bar.textContent = `Switch to ${isDay ? 'Night' : 'Day'} Mode`;
	bar.addEventListener('click', () => {
		// console.log('CHANGE THEME');
		isDay = !isDay;
		bar.textContent = `Switch to ${isDay ? 'Night' : 'Day'} Mode`;
		onClick && onClick(isDay);
	});

	return {}
}