export function createThemeChanger(onClick) {
	const html = document.querySelector('html');
	let isLight = true;

	function handleChange() {
		onClick && onClick(isLight);
	}

	document.addEventListener('darkmode', () => {
		const isDark = html.className.match(/\bdark\b/);
		console.log(isDark);
		isLight = !isDark;
		handleChange();
	});

	handleChange();

	return {}
}