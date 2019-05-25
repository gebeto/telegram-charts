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

import BarLayerDrawer from '../Layers/Bar';
import BarActivePopup from '../Layers/BarActivePopup';
import YAxisLayerDrawer from '../Layers/YAxis';
import XAxisLayerDrawer from '../Layers/XAxis';

import { debugLayer } from '../utils';


export default function BarChartDrawer(drawersArgs) {
	const { ctx, config, control, yAxis, xAxis } = drawersArgs;
	const chartPadding = 6 * PIXEL_RATIO;
	const chartPadding2 = chartPadding * 2;

	const drawBarLayer  = BarLayerDrawer(drawersArgs);
	const calculateActiveBarIndex  = BarActivePopup(drawersArgs);
	const drawXAxisLayer = XAxisLayerDrawer({...drawersArgs, forBars: true});
	const drawYAxisLayer = YAxisLayerDrawer(drawersArgs, {
		textAlign: 'left',
	});


	return function drawChart(x, y, width, height) {
		// debugLayer(ctx, x, y, width, height);

		const XS = width * control.range[0];
		const xRanged = x - XS / control.scale;
		const widthRanged = width / control.scale;

		const HEIGHT = height - BOTTOM_PADDING - DOT_RADIUS_MUL_2;
		const Y = y + TWO;

		// Draw layers
		const currentIndex = calculateActiveBarIndex(xAxis, stacked, xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT);
		console.log(currentIndex)
		const stacked = new Array(xAxis.length).fill(0);
		for (let i = 0; i < yAxis.items.length; i++) {
			drawBarLayer.calculate(yAxis.items[i], stacked, xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT);
			drawBarLayer.draw(yAxis.items[i], stacked, xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT, currentIndex);
		}
		
		drawXAxisLayer(xAxis, xRanged, y + HEIGHT - X_AXIS_HEIGHT, widthRanged, X_AXIS_HEIGHT);
		drawYAxisLayer(yAxis.items[0], x, Y, width, HEIGHT - X_AXIS_HEIGHT, true);
	}
}