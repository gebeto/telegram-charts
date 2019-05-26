import { createElement } from './utils';
import { formatNumber } from '../utils';

export function createPopupHeader(title, widthArrow) {
	return `
		<strong class="chart__popup-header">
			<span class="chart__popup-header-title">${title}</span>
			${widthArrow ? '<span class="chart__popup-header-icon"></span>' : '<span></span>'}
		</strong>
	`;
}


export function createPopupItem(color, title, value) {
	return `
		<span class="chart__popup-item">
			<span class="chart__popup-item-title">${title}</span>
			<span class="chart__popup-item-value" style="color: ${color}">${formatNumber(value)}</span>
		</span>
	`;
}


export function createPopup(container, config) {
	const popup = createElement(container, 'div', 'chart__popup');
	const clickHandlers = [];
	let currentIndex = -1;

	popup.addEventListener('click', () => {
		if (config.data.xAxis[currentIndex]) {
			for (let i = 0; i < clickHandlers.length; i++) {
				clickHandlers[i](config.data.xAxis[currentIndex].timestamp);
			}
		}
	});

	function changeHtml(index) {
		const filtered = config.data.yAxis.items.filter(y => y.enabled)
		const curr = filtered.map(y => createPopupItem(config.data.colors[y.key], config.data.names[y.key], y.items[index]));
		if (!curr.length) return;
		popup.innerHTML = `
			${createPopupHeader(config.data.xAxis[index].dateString, config.data.x_on_zoom)}
			${curr.join('')}
		`;
	}

	const publicInterface = {
		element: popup,
		update: changeHtml,
		show(index) {
			currentIndex = index;
			changeHtml(index);
			popup.style.opacity = 1;
			popup.style.visibility = 'visible';
		},
		hide() {
			currentIndex = -1;
			popup.style.opacity = 0;
			popup.style.visibility = 'hidden';
		},
		onClick(handler) {
			clickHandlers.push(handler);
		}
	};

	return publicInterface;
}