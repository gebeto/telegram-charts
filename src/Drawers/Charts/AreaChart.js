import {
	PIXEL_RATIO,
	BOTTOM_PADDING,
	X_AXIS_HEIGHT,
	ONE,
	TWO,
	DOT_RADIUS,
	DOT_RADIUS_DIV_2,
	DOT_RADIUS_MUL_2,
} from '../../Globals';

import { average } from '../../utils';
import AreaLayerDrawer from '../Layers/Area';
import { debugLayer } from '../utils';



export default function AreaChartDrawer(drawersArgs) {
	const { ctx, config, yAxis, xAxis } = drawersArgs;
	const chartPadding = 6 * PIXEL_RATIO;
	const chartPadding2 = chartPadding * 2;

	const drawAreaLayers = yAxis.items.map(el => AreaLayerDrawer(drawersArgs));

	return function drawChart(x, y, width, height) {
		// debugLayer(ctx, x, y, width, height);

		const XS = width * config.control.range[0];
		const HEIGHT = height - BOTTOM_PADDING - DOT_RADIUS_MUL_2;
		const Y = y + DOT_RADIUS + TWO;

		const itemsStart = Math.floor(xAxis.length * config.control.range[0]);
		const itemsDiff = Math.ceil(xAxis.length * (config.control.range[1] - config.control.range[0]));
		const itemsEnd = itemsStart + itemsDiff;
		const percentage = yAxis.items.reduce((curr, item) => {
			return curr + item.items.slice(itemsStart, itemsEnd).reduce(average, 0) * item.opacity.value;
		}, 0) / 100;
		let stacked = 0;

		for (let i = 0; i < yAxis.items.length; i++) {
			const perc = yAxis.items[i].items.slice(itemsStart, itemsEnd).reduce(average, 0) / percentage * yAxis.items[i].opacity.value;
			// drawAreaLayers[i].calculate(yAxis.items[i], perc, stacked, stacked += perc, x, Y, width, HEIGHT - X_AXIS_HEIGHT);
			drawAreaLayers[i].draw(yAxis.items[i], perc, stacked, stacked += perc, x, Y, width, HEIGHT - X_AXIS_HEIGHT);
		}
	}
}