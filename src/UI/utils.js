export function createElement(parent, elementTag, className) {
	const element = document.createElement(elementTag);
	element.className = className;
	if (parent) {
		parent.appendChild(element);
	}
	return element;
}