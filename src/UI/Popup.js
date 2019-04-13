import arrow from './arrow.svg';
import { createElement } from './utils';

export function createPopupHeader(title) {
	return `
		<strong class="chart__popup-header">
			<span class="chart__popup-header-title">${title}</span>
			<span class="chart__popup-header-icon"><img src="${arrow}" /></span>
		</strong>
	`;
}


export function createPopupItem(color, title, value) {
	return `
		<span class="chart__popup-item" style="color: ${color}">
			<span class="chart__popup-item-title">${title}</span>
			<span class="chart__popup-item-value">${value}</span>
		</span>
	`;
}


export function createPopup(container, data, ys) {
	const popup = createElement(container, 'div', 'chart__popup');

	const publicInterface = {
		element: popup,
		update(index) {
			popup.innerHMTL = `
				${createPopupHeader()}
				${createPopupItem('hello', '10000')}
			`;
		},
		show(index) {
			const curr = ys.map(y => createPopupItem(data.colors[y[0]], data.names[y[0]], y[index + 1]));
			popup.innerHTML = `
				${createPopupHeader(data.columns[0][index + 1].dateString)}
				${curr.join('')}
			`;
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