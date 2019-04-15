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

import BarLayerDrawer from './Layers/Bar';
import BarDotsLayerDrawer from './Layers/BarDots';
import YAxisLayerDrawer from './Layers/YAxis';
import XAxisLayerDrawer from './Layers/XAxis';


export default function BarChartDrawer(drawersArgs) {
	const { ctx, config, control, ys, yAxis, xAxis } = drawersArgs;
	const chartPadding = 6 * PIXEL_RATIO;
	const chartPadding2 = chartPadding * 2;

	const drawXAxisLayer = XAxisLayerDrawer(drawersArgs);
	const drawBarLayer  = BarLayerDrawer(drawersArgs);
	const drawBarDotsLayer  = BarDotsLayerDrawer(drawersArgs);
	const drawYAxisLayer = YAxisLayerDrawer(drawersArgs, {
		textAlign: 'left',
	});


	return function drawChart(x, y, width, height) {
		// ctx.save();
		// ctx.fillStyle = 'green';
		// ctx.fillRect(x, y, width, height);
		// ctx.restore();

		const XS = width * control.range[0];
		const xRanged = x - XS / control.scale;
		const widthRanged = width / control.scale;

		const HEIGHT = height - BOTTOM_PADDING - DOT_RADIUS_MUL_2;
		const Y = y + DOT_RADIUS + TWO;

		// Draw layers
		const stacked = new Array(xAxis.length).fill(0);
		for (let i = 0; i < yAxis.items.length; i++) {
			drawBarLayer(yAxis.items[i], stacked, xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT);
		}
		drawBarDotsLayer(yAxis.items[0], stacked, xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT);
		
		drawXAxisLayer(xAxis, xRanged, y + HEIGHT - X_AXIS_HEIGHT, widthRanged, X_AXIS_HEIGHT);
		drawYAxisLayer(yAxis.items[0], x, Y, width, HEIGHT - X_AXIS_HEIGHT, true);
	}
}