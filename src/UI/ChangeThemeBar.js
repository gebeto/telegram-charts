import { createElement } from './utils';


export function createBar(container, onClick) {
	let isDay = true;
	// let isDay = !localStorage.isNight;
	const bar = createElement(container, 'button', 'change-theme');

	function handleChange() {
		bar.textContent = `Switch to ${isDay ? 'Night' : 'Day'} Mode`;
		onClick && onClick(isDay);
	}

	bar.addEventListener('click', () => {
		isDay = !isDay;
		// if (isDay) { localStorage.removeItem('isNight'); }
		// else { localStorage.setItem('isNight', 1); }
		handleChange();
	});

	handleChange();

	return {}
}