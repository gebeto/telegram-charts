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
	const { ctx, config, control, ys, yAxis, xAxis } = drawersArgs;
	const chartPadding = 6 * PIXEL_RATIO;
	const chartPadding2 = chartPadding * 2;

	const drawAreaLayer = AreaLayerDrawer(drawersArgs);

	return function drawChart(x, y, width, height) {
		// debugLayer(ctx, x, y, width, height);

		const XS = width * control.range[0];
		const HEIGHT = height - BOTTOM_PADDING - DOT_RADIUS_MUL_2;
		const Y = y + DOT_RADIUS + TWO;

		const percentage = yAxis.items.reduce((curr, item) => curr + item.items.reduce(average, 0) * item.opacity.value, 0) / 100;
		let stacked = 0;

		for (let i = 0; i < yAxis.items.length; i++) {
			const perc = yAxis.items[i].items.reduce(average, 0) / percentage * yAxis.items[i].opacity.value;
			drawAreaLayer(yAxis.items[i], perc, stacked, stacked += perc, x, Y, width, HEIGHT - X_AXIS_HEIGHT);
		}
	}
}