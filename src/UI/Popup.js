import { createElement } from './utils';

export function createPopupHeader(title) {
	return `
		<strong class="chart__popup-header">
			<span class="chart__popup-header-title">${title}</span>
			<span class="chart__popup-header-icon"></span>
		</strong>
	`;
}


export function createPopupItem(color, title, value) {
	return `
		<span class="chart__popup-item">
			<span class="chart__popup-item-title">${title}</span>
			<span class="chart__popup-item-value" style="color: ${color}">${value}</span>
		</span>
	`;
}


export function createPopup(container, config, data, ys) {
	const popup = createElement(container, 'div', 'chart__popup');

	function changeHtml(index) {
		const curr = ys.items.filter(y => y.enabled).map(y => createPopupItem(data.colors[y.key], data.names[y.key], y.items[index]));
		if (!curr.length) return;
		popup.innerHTML = `
			${createPopupHeader(data.columns[0][index + 1].dateString)}
			${curr.join('')}
		`;
	}

	const publicInterface = {
		element: popup,
		update: changeHtml,
		show(index) {
			changeHtml(index);
			popup.style.opacity = 1;
			popup.style.visibility = 'visible';
		},
		hide() {
			popup.style.opacity = 0;
			popup.style.visibility = 'hidden';
		}
	};

	return publicInterface;
}