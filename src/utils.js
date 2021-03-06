import { ANIMATION_SPEED } from './Globals';
import Animated from './Utils/Animated';


export function formatNumber(n, short) {
	var abs = Math.abs(n);
	if (abs > 1000000000 && short) return (n / 1000000000).toFixed(2) + 'B';
	if (abs > 1000000 && short) return (n / 1000000).toFixed(2) + 'M';
	if (abs > 1000 && short) return (n / 1000).toFixed(1) + 'K';
	if (abs > 1) return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	return n.toString()
}


export function normalizeMemo(min, max) {
	const delta = max - min;
	const memo = {};

	function norm(val) {
		if (!memo[val]) {
			memo[val] = (val - min) / delta;
		}
		return memo[val];
	}

	norm.de = function denorm(val) {
		return val * delta + min;
	}

	norm.data = {
		delta: delta,
		min: min,
		max: max,
	}

	return norm;
}

export function normalize(min, max) {
	const delta = max - min;

	function norm(val) {
		return (val - min) / delta;
	};

	norm.de = function denorm(val) {
		return val * delta + min;
	}

	return norm;
}

export function normalizeAnimated(animator, min, max) {
	let newMax = min;
	const newMin = animator.createAnimation(min, ANIMATION_SPEED);
	const delta = animator.createAnimation(max - min, ANIMATION_SPEED);
	function norm(val) {
		return (val - newMin.value) / delta.value;
	};
	norm.updateDelta = (min, max) => {
		newMax = max;
		newMin.play(min);
		delta.play(max - min);
	};
	return norm;
}

export const debounce = (func, delay) => {
	let inDebounce
	return function() {
		const context = this
		const args = arguments
		clearTimeout(inDebounce)
		inDebounce = setTimeout(() => func.apply(context, args), delay)
	}
}

export const throttle = (func, limit) => {
	let inThrottle;
	return function() {
		const args = arguments;
		const context = this;
		if (!inThrottle) {
			func.apply(context, args);
			inThrottle = true;
			setTimeout(() => inThrottle = false, limit);
		}
	}
}

export const throttleL = (func, limit) => {
	let inThrottle;
	return function() {
		const args = arguments;
		const context = this;
		if (!inThrottle) {
			inThrottle = true;
			setTimeout(() => {
				func.apply(context, args);
				inThrottle = false;
			}, limit);
		}
	}
}

export const throttleLForceable = (func, limit) => {
	let inThrottle;
	return function(force) {
		const context = this;
		if (force) {
			func.apply(context, null);
			return;
		}
		if (!inThrottle) {
			inThrottle = true;
			setTimeout(() => {
				func.apply(context, null);
				inThrottle = false;
			}, limit);
		}
	}
}

export function memo(fun) {
	const memos = {};
	return function memoized(arg) {
		if (!memos[arg]) {
			memos[arg] = fun(arg);
		}
		return memos[arg];
	}
}

export const average = (curr, item) => curr + item;




export const uninf = (val) => (val === Infinity || val === -Infinity) ? 0 : val;

export const singleMin = set => Math.min.apply(null, set);
export const singleMax = set => Math.max.apply(null, set);
export const singleMinRange = (set, start, end) => Math.min.apply(null, set.slice(start, 1 + end));
export const singleMaxRange = (set, start, end) => Math.max.apply(null, set.slice(start, 1 + end));

export const flatMin = (arr) => Math.min.apply(null, arr.map(singleMin));
export const flatMax = (arr) => Math.max.apply(null, arr.map(singleMax));
export const flatMinRange = (arr, start, end) => Math.min.apply(null, arr.map(set => singleMinRange(set, start, end)));
export const flatMaxRange = (arr, start, end) => Math.max.apply(null, arr.map(set => singleMaxRange(set, start, end)));


export const zipSum = (arr) => {
	// console.log(arr.length);
	const res = new Array(arr[0].length).fill(0);
	let i, j
	for (i = 0; i < arr.length; i++) {
		for (j = 0; j < arr[i].length; j++) {
			res[j] += arr[i][j];
		}
	}
	return res;
}

export const flatMaxZipSum = (arr, start, end) => {
	return arr.map(set => singleMax(set));
};

export const flatMaxZipSumRange = (arr, start, end) => {
	return arr.map(set => singleMaxRange(set, start, end)).reduce((sum, el) => sum + el, 0);
};