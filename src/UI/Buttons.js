import check from './check.svg';
import { createElement, createLongPress } from './utils';


export function createButtonForAxis(container, animator, data, y, globState, handler) {
	const key = y.key;
	const state = {
		enabled: true,
	};
	const button = createElement(container, 'button', 'chart__buttons-button');
	button.textContent = data.names[key];
	button.style.backgroundColor = data.colors[key];
	button.style.borderColor = data.colors[key];
	createLongPress(button, onPress, onLongPress);

	function onPress() {
		if (globState.activeButtonsCount === 1 && state.enabled) {
			button.className = 'chart__buttons-button error';
			setTimeout(() => {button.className = 'chart__buttons-button';}, 140)
			return;
		}

		state.enabled = !state.enabled;
		update();
	}

	function onLongPress() {
		state.show();
		globState.hideAllExcept(button);
	}
	
	function update() {
		if (state.enabled === true) {
			button.className = 'chart__buttons-button';
			button.style.color = '#FFF';
		} else {
			button.className = 'chart__buttons-button unchecked';
			button.style.color = data.colors[key];
		}

		y.enabled = state.enabled;
		y.opacity.play(state.enabled ? 1 : 0);

		handler && handler(state.enabled);
	}

	function hide(caller) {
		if (state.enabled && caller !== button) {
			state.enabled = false;
			update();
		}
	}

	function show() {
		if (!state.enabled) {
			state.enabled = true;
			update();
		}
	}

	state.hide = hide;
	state.show = show;

	return state;
}

export function createButtons(container, animator, data, ysAxis, handler) {
	const globalState = {
		activeButtonsCount: ysAxis.items.length,

		hideAllExcept: hideAllExcept,
		hideAll: hideAll,
	};


	const buttonsWrapper = createElement(container, 'div', 'chart__buttons');
	const allButtons = {};

	const buttons = ysAxis.items.map(y => {
		return allButtons[y[0]] = createButtonForAxis(buttonsWrapper, animator, data, y, globalState, (enabled) => {
			globalState.activeButtonsCount += enabled ? 1 : -1;
			if (globalState.activeButtonsCount < 1) {
				return;
			}

			handler && handler();
		});
	});

	function hideAll() {
		buttons.forEach(button => {
			button.hide();
		});
	}

	function hideAllExcept(caller) {
		buttons.forEach(button => {
			button.hide(caller);
		});
	}

	return allButtons;
}