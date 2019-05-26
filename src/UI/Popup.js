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


export function createPopup(container, config, data, xAxis, yAxis) {
	const popup = createElement(container, 'div', 'chart__popup');
	const clickHandlers = [];
	let currentIndex = -1;

	popup.addEventListener('click', () => {
		if (xAxis[currentIndex]) {
			for (let i = 0; i < clickHandlers.length; i++) {
				clickHandlers[i](xAxis[currentIndex].timestamp);
			}
		}
	});

	function changeHtml(index) {
		const filtered = yAxis.items.filter(y => y.enabled)
		const curr = filtered.map(y => createPopupItem(data.colors[y.key], data.names[y.key], y.items[index]));
		if (!curr.length) return;
		popup.innerHTML = `
			${createPopupHeader(xAxis[index].dateString)}
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