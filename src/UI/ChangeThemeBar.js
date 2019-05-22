import { createElement } from './utils';


export function createBar(container, onClick) {
	let isDay = true;
	const bar = createElement(container, 'button', 'change-theme');

	function handleChange() {
		bar.textContent = `Switch to ${isDay ? 'Night' : 'Day'} Mode`;
		onClick && onClick(isDay);
	}

	bar.addEventListener('click', () => {
		isDay = !isDay;
		handleChange();
	});

	handleChange();

	return {}
}