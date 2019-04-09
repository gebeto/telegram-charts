
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
	return (val) => {
		return (val - min) / delta;
	};
}