import {
	MONTH_NAMES,
	DAY_NAMES,
} from '../Globals';

import {
	normalizeAnimated,
	normalize,
	zipSum,

	uninf,
	singleMin,
	singleMax,
	singleMinRange,
	singleMaxRange,
	flatMin,
	flatMax,
	flatMinRange,
	flatMaxRange,
} from '../utils';


export function dateString(timestamp, index, arr) {
	const date = new Date(timestamp);
	return {
		dayString: `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}`,
		dateString: `${DAY_NAMES[date.getDay()]}, ${date.getDate()} ${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`,
		dateStringTitle: `${date.getDate()} ${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`,
		date: date,
		timestamp: timestamp,
	};
}


export function prepareDataset(data, config) {
	const { title, columns, types, colors, names } = data; // main data
	const { percentage, stacked, y_scaled } = data; // options


	const [[xAxisKey, ...rawXAxis], ...rawYAxisList] = columns;
	const xAxis = rawXAxis.map(el => dateString(el));
	const yAxis = prepareYAxis(rawYAxisList, data, config)

	return {
		title, columns, types, colors, names,
		xAxis, yAxis,
	};
}


export function prepareYAxis(rawYs, data, config) {
	const items = rawYs.map(y => {
		const [yKey, ...yData] = y;
		const item = {
			opacity: config.animator.createAnimation(1, 300),
			key: yKey,
			scaling: {},
			enabled: true,
			items: yData,
		};

		if (data.y_scaled) {
			item.scaling.color = data.colors[item.key];
			item.scaling.minHeight = uninf(singleMin(item.items));
			item.scaling.maxHeight = uninf(singleMax(item.items));
			item.scaling.minHeightAnim = config.animator.createAnimation(0, 300);
			item.scaling.maxHeightAnim = config.animator.createAnimation(0, 300);
			item.scaling.normY = normalizeAnimated(config.animator, item.scaling.minHeight, item.scaling.maxHeight);
			item.scaling.normControlY = normalizeAnimated(config.animator, item.scaling.minHeight, item.scaling.maxHeight);

			item.scaling.updateMinMax = function updateMinMax(startIndex, endIndex) {
				item.scaling.minHeight = uninf(singleMinRange(item.items, startIndex, endIndex));
				item.scaling.maxHeight = uninf(singleMaxRange(item.items, startIndex, endIndex));
				item.scaling.minHeightAnim.play(item.scaling.minHeight);
				item.scaling.maxHeightAnim.play(item.scaling.maxHeight);
				item.scaling.normY.updateDelta(item.scaling.minHeight, item.scaling.maxHeight);
			}
		}

		return item;
	});

	if (!data.y_scaled) {
		const sharedScaling = {};

		if (data.percentage) {
			scaling_Percentage(config, sharedScaling, items);
		} else if (data.stacked) {
			scaling_Stacked(config, sharedScaling, items);
		} else {
			scaling_Default(config, sharedScaling, items);
		}

		items.forEach(item => { item.scaling = sharedScaling; })
	}


	return {
		items: items,
	}
}



function scaling_Percentage(config, sharedScaling, items) {
	// PERCENTAGE
	const minHeight = 0;
	const maxHeight = 100;
	const minHeightAnim = config.animator.createAnimation(minHeight, 300);
	const maxHeightAnim = config.animator.createAnimation(maxHeight, 300);

	sharedScaling.minHeight = minHeight;
	sharedScaling.maxHeight = maxHeight;
	sharedScaling.minHeightAnim = minHeightAnim;
	sharedScaling.maxHeightAnim = maxHeightAnim;
	sharedScaling.normY = normalizeAnimated(config.animator, minHeight, maxHeight);
	sharedScaling.normControlY = normalizeAnimated(config.animator, minHeight, maxHeight);

	sharedScaling.updateMinMax = function updateMinMax(startIndex, endIndex) {};
}


function scaling_Stacked(config, sharedScaling, items) {
	// STACKED
	const rawItems = items.map(f => f.items);
	const min = 0;
	const max = uninf(singleMax(zipSum(rawItems)));
	const minHeight = 0;
	const maxHeight = singleMaxRange(zipSum(rawItems), min, max);
	const minHeightAnim = config.animator.createAnimation(0, 300);
	const maxHeightAnim = config.animator.createAnimation(0, 300);

	sharedScaling.minHeight = minHeight;
	sharedScaling.maxHeight = maxHeight;
	sharedScaling.minHeightAnim = minHeightAnim;
	sharedScaling.maxHeightAnim = maxHeightAnim;
	sharedScaling.normY = normalizeAnimated(config.animator, minHeight, maxHeight);
	sharedScaling.normControlY = normalizeAnimated(config.animator, 0, max);

	function updateMinMax(startIndex, endIndex) {
		// console.log('UPD MIN')
		const filteredRawItems = items.filter(y => y.enabled).map(y => y.items);
		sharedScaling.minHeight = 0;
		try {
			sharedScaling.maxHeight = uninf(singleMaxRange(zipSum(filteredRawItems), startIndex, endIndex));
		} catch(err) {
			return;
		}
		sharedScaling.minHeightAnim.play(sharedScaling.minHeight);
		sharedScaling.maxHeightAnim.play(sharedScaling.maxHeight);
		sharedScaling.normY.updateDelta(sharedScaling.minHeight, sharedScaling.maxHeight);

		const min = 0;
		const max = uninf(singleMax(zipSum(filteredRawItems)));
		sharedScaling.normControlY.updateDelta(min, max);
	}

	sharedScaling.updateMinMax = updateMinMax;
}


function scaling_Default(config, sharedScaling, items) {
	const rawItems = items.map(f => f.items);

	const min = uninf(flatMin(rawItems));
	const max = uninf(flatMax(rawItems));
	const minHeight = flatMin(rawItems, min, max);
	const maxHeight = flatMax(rawItems, min, max);
	const minHeightAnim = config.animator.createAnimation(0, 300);
	const maxHeightAnim = config.animator.createAnimation(0, 300);

	sharedScaling.minHeight = minHeight;
	sharedScaling.maxHeight = maxHeight;
	sharedScaling.minHeightAnim = minHeightAnim;
	sharedScaling.maxHeightAnim = maxHeightAnim;
	sharedScaling.normY = normalizeAnimated(config.animator, minHeight, maxHeight);
	sharedScaling.normControlY = normalizeAnimated(config.animator, min, max);

	function updateMinMax(startIndex, endIndex) {
		// console.log('UPD MIN')
		const filteredRawItems = items.filter(y => y.enabled).map(y => y.items);
		sharedScaling.minHeight = uninf(flatMinRange(filteredRawItems, startIndex, endIndex));
		sharedScaling.maxHeight = uninf(flatMaxRange(filteredRawItems, startIndex, endIndex));
		sharedScaling.minHeightAnim.play(sharedScaling.minHeight);
		sharedScaling.maxHeightAnim.play(sharedScaling.maxHeight);
		sharedScaling.normY.updateDelta(sharedScaling.minHeight, sharedScaling.maxHeight);

		const min = uninf(flatMin(filteredRawItems));
		const max = uninf(flatMax(filteredRawItems));
		sharedScaling.normControlY.updateDelta(min, max);
	}

	sharedScaling.updateMinMax = updateMinMax;
}