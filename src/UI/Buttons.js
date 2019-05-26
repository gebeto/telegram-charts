import { createElement, createLongPress } from './utils';


export function createButtonForAxis(container, config, y, globState, handler) {
	const key = y.key;
	const state = {
		enabled: true,
	};
	const button = createElement(container, 'button', 'chart__buttons-button');
	button.textContent = config.data.names[key];
	button.style.backgroundColor = config.data.colors[key];
	button.style.borderColor = config.data.colors[key];
	const longPress = createLongPress(button, onPress, onLongPress);

	function destroy() {
		container.removeChild(button);
		longPress.destroy();
	}

	function init() {
		container.appendChild(button);
		longPress.init();
	}

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
			button.style.color = config.data.colors[key];
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

	state.destroy = destroy;
	state.init = init;

	return state;
}

export function createButtons(container, config, handler) {
	const globalState = {
		activeButtonsCount: config.data.yAxis.items.length,

		hideAllExcept: hideAllExcept,
		hideAll: hideAll,
	};


	const buttonsWrapper = createElement(container, 'div', 'chart__buttons');
	const allButtons = {};

	const buttons = config.data.yAxis.items.map(y => {
		return allButtons[y[0]] = createButtonForAxis(buttonsWrapper, config, y, globalState, (enabled) => {
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

	function destroy() {
		buttons.map(button => button.destroy());
	}

	function init() {
		buttons.map(button => button.init());
	}

	allButtons.destroy = destroy;
	allButtons.init = init;

	return allButtons;
}