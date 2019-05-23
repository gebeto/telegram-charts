import {
	CURRENT,
} from '../Globals';

export const THEME_DAY = {
	background: '#FFFFFF',
	scrollBackground: '#E2EEF9',
	scrollSelector: '#C0D1E1',
	gridLines: '#182D3B',
	tooltipArrow: '#D2D5D7',
	zoomText: '#108BE3',
};

export const THEME_NIGHT = {
	background: '#1B232F',
	scrollBackground: '#304259',
	scrollSelector: '#56626D',
	gridLines: '#FFFFFF',
	tooltipArrow: '#D2D5D7',
	zoomText: '#48AAF0',
};

export function createThemeChanger(onClick) {
	const html = document.querySelector('html');
	let isLight = true;

	function handleChange() {
		CURRENT.THEME = isLight ? THEME_DAY : THEME_NIGHT;
		onClick && onClick(isLight);
	}

	document.addEventListener('darkmode', () => {
		const isDarkMatch = html.className.toLowerCase().split(" ").indexOf("dark") > -1;
		isLight = !isDarkMatch;
		handleChange();
	});

	// handleChange();
	document.dispatchEvent(new Event('darkmode'));

	return {}
}