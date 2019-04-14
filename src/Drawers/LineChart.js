import {
	PIXEL_RATIO,
	BOTTOM_PADDING,
	X_AXIS_HEIGHT,
} from '../Globals';

import LineLayerDrawer from './Layers/Line';
import DotsLayerDrawer from './Layers/Dots';
import YAxisLayerDrawer from './Layers/YAxis';
import XAxisLayerDrawer from './Layers/XAxis';


export default function LineChartDrawer(drawersArgs) {
	const { ctx, config, control, ys, xAxis } = drawersArgs;
	const chartPadding = 6 * PIXEL_RATIO;
	const chartPadding2 = chartPadding * 2;

	const drawYAxisLayer = YAxisLayerDrawer(drawersArgs);
	const drawXAxisLayer = XAxisLayerDrawer(drawersArgs);
	const drawLineLayer  = LineLayerDrawer(drawersArgs);
	const drawDotsLayer  = DotsLayerDrawer(drawersArgs);

	return function drawChart(x, y, width, height) {
		// ctx.save();
		// ctx.fillStyle = 'green';
		// ctx.fillRect(x, y, width, height);
		// ctx.restore();

		const XS = width * control.range[0];
		const xRanged = x - XS / control.scale;
		const widthRanged = width / control.scale;

		const HEIGHT = height - BOTTOM_PADDING
		const Y = y;

		// Draw layers
		drawXAxisLayer(xAxis, xRanged, y + HEIGHT - X_AXIS_HEIGHT, widthRanged, X_AXIS_HEIGHT);
		// drawYAxisLayer(config.minHeight, config.maxHeight, x, Y, width, HEIGHT - X_AXIS_HEIGHT);
		drawYAxisLayer(Math.round(config.minHeightAnim.value), Math.round(config.maxHeightAnim.value), x, Y, width, HEIGHT - X_AXIS_HEIGHT);
		for (let i = 0; i < ys.length; i++ ) {
			drawLineLayer(ys[i], xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT);
		}
		for (let i = 0; i < ys.length; i++ ) {
			drawDotsLayer(ys[i], xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT);
		}
	}
}