import Animated from './Utils/Animated';


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
	const newMin = animator.createAnimation(min, 300);
	const delta = animator.createAnimation(max - min, 300);
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


export function drawingWithRange(range, draw) {
	return function drawRange(data, x, y, width, height) {
		const scale = range[1] - range[0];
		const xs = width * range[0];
		const xNew = x - xs / scale;
		const widthNew = width / scale;
		draw(data, xNew, y, widthNew, height);
	}
}