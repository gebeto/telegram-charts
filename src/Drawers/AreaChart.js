import {
	PIXEL_RATIO,
	BOTTOM_PADDING,
	X_AXIS_HEIGHT,
	ONE,
	TWO,
	DOT_RADIUS,
	DOT_RADIUS_DIV_2,
	DOT_RADIUS_MUL_2,
} from '../Globals';

import AreaLayerDrawer from './Layers/Area';
import { average } from '../utils';
import { debugLayer } from './utils';


export default function AreaChartDrawer(drawersArgs) {
	const { ctx, config, control, ys, yAxis, xAxis } = drawersArgs;
	const chartPadding = 6 * PIXEL_RATIO;
	const chartPadding2 = chartPadding * 2;

	const drawAreaLayer = AreaLayerDrawer(drawersArgs);

	return function drawChart(x, y, width, height) {
		// debugLayer(ctx, x, y, width, height);

		const XS = width * control.range[0];
		// const xRanged = x - XS / control.scale;
		// const widthRanged = width / control.scale;

		const HEIGHT = height - BOTTOM_PADDING - DOT_RADIUS_MUL_2;
		const Y = y + DOT_RADIUS + TWO;

		// Draw layers
		// const percentage = new Array(xAxis.length).fill(0);
		// for (let i = 0; i < yAxis.items.length; i++) {
		// 	for (let j = 0; j < yAxis.items[i].items.length; j++) {
		// 		percentage[j] += yAxis.items[i].items[j] * yAxis.items[i].opacity.value;
		// 	}
		// }
		// for (let i = 0; i < xAxis.length; i++) {
		// 	percentage[i] /= 100;
		// }

		const percentage = yAxis.items.reduce((curr, item) => curr + item.items.reduce(average, 0) * item.opacity.value, 0) / 100;
		// const stacked = new Array(yAxis.length).fill(0);
		let stacked = 0;

		for (let i = 0; i < yAxis.items.length; i++) {
			const perc = yAxis.items[i].items.reduce(average, 0) / percentage * yAxis.items[i].opacity.value;
			drawAreaLayer(yAxis.items[i], perc, stacked, stacked += perc, x, Y, width, HEIGHT - X_AXIS_HEIGHT);
		}
	}
}