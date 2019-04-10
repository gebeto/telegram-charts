import Animated from './Utils/Animated';


export function normalizeMemo(min, max) {
	const delta = max - min;
	const memo = {};
	return (val) => {
		if (!memo[val]) {
			memo[val] = (val - min) / delta;
		}
		return memo[val];
	};
}

export function normalize(min, max) {
	const delta = max - min;
	function norm(val) {
		return (val - min) / delta;
	};
	return norm;
}

export function normalizeAnimated(min, max) {
	let newMax = min;
	const newMin = Animated.createAnimation(min, 300);
	const delta = Animated.createAnimation(max - min, 300);
	function norm(val) {
		return (val - newMin.value) / delta.value;
	};
	norm.updateDelta = (min, max) => {
		newMax = max;
		newMin.play(min);
		delta.play(max - min);
	}
	return norm;
}

export const flatMax = (arr) => Math.max.apply(null, arr.map(set => Math.max.apply(null, set.slice(1))));
export const flatMin = (arr) => Math.min.apply(null, arr.map(set => Math.min.apply(null, set.slice(1))));

export const flatMaxRange = (arr, start, end) => Math.max.apply(null, arr.map(set => Math.max.apply(null, set.slice(1 + start, end))));
export const flatMinRange = (arr, start, end) => Math.min.apply(null, arr.map(set => Math.min.apply(null, set.slice(1 + start, end))));

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
	let inThrottle
	return function() {
		const args = arguments
		const context = this
		if (!inThrottle) {
			func.apply(context, args)
			inThrottle = true
			setTimeout(() => inThrottle = false, limit)
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