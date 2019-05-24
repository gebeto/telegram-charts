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

import LineLayerDrawer from '../Layers/Line';
import LineDotsLayerDrawer from '../Layers/LineDots';
import YAxisLayerDrawer from '../Layers/YAxis';
import XAxisLayerDrawer from '../Layers/XAxis';

import { debugLayer } from '../utils';


export default function LineChartDrawer(drawersArgs) {
	const { ctx, config, control, yAxis, xAxis } = drawersArgs;
	const chartPadding = 6 * PIXEL_RATIO;
	const chartPadding2 = chartPadding * 2;

	const drawLineLayer = LineLayerDrawer(drawersArgs);
	const drawLineDotsLayer = LineDotsLayerDrawer(drawersArgs);
	const drawXAxisLayer = XAxisLayerDrawer(drawersArgs);
	const drawYAxisLayer = YAxisLayerDrawer(drawersArgs, {
		textAlign: 'left',
	});


	return function drawChart(x, y, width, height) {
		// debugLayer(ctx, x, y, width, height);

		const XS = width * control.range[0];
		const xRanged = x - XS / control.scale;
		const widthRanged = width / control.scale;

		const HEIGHT = height - BOTTOM_PADDING - DOT_RADIUS_MUL_2;
		const Y = y + DOT_RADIUS + TWO;

		// Draw layers
		drawXAxisLayer(xAxis, xRanged, y + HEIGHT - X_AXIS_HEIGHT, widthRanged, X_AXIS_HEIGHT);
		drawYAxisLayer(yAxis.items[0], x, Y, width, HEIGHT - X_AXIS_HEIGHT, true);
		for (let i = 0; i < yAxis.items.length; i++ ) {
			drawLineLayer.calculate(yAxis.items[i], xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT);
			drawLineLayer.draw(yAxis.items[i], xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT);
		}
		for (let i = 0; i < yAxis.items.length; i++ ) {
			drawLineDotsLayer(yAxis.items[i], xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT);
		}
	}
}