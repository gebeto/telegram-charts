import {
	PIXEL_RATIO,
	BOTTOM_PADDING,
	X_AXIS_HEIGHT,
	CURRENT,
	PI2,
	ONE,
	TWO,
	DOT_RADIUS,
	DOT_RADIUS_DIV_2,
	DOT_RADIUS_MUL_2,
} from '../../Globals';

import LineLayerDrawer from '../Layers/Line';
import LineActivePopupLayer from '../Layers/LineActivePopup';
import YAxisLayerDrawer from '../Layers/YAxis';
import XAxisLayerDrawer from '../Layers/XAxis';
import { drawDotsForLines } from './utils';

import { debugLayer } from '../utils';


export default function LineChartDrawer(drawersArgs) {
	const { ctx, config, colors, yAxis, xAxis } = drawersArgs;
	const chartPadding = 6 * PIXEL_RATIO;
	const chartPadding2 = chartPadding * 2;

	// const drawLineLayer = LineLayerDrawer(drawersArgs);
	const drawLineLayers = yAxis.items.map(el => LineLayerDrawer(drawersArgs));
	const calculateLineActivePopupIndex = LineActivePopupLayer(drawersArgs);
	const drawXAxisLayer = XAxisLayerDrawer(drawersArgs);
	const drawYAxisLayer = YAxisLayerDrawer(drawersArgs, {
		textAlign: 'left',
	});


	return function drawChart(x, y, width, height) {
		// debugLayer(ctx, x, y, width, height);

		const XS = width * config.control.range[0];
		const xRanged = x - XS / config.control.scale;
		const widthRanged = width / config.control.scale;

		const HEIGHT = height - BOTTOM_PADDING - DOT_RADIUS_MUL_2;
		const Y = y + DOT_RADIUS + TWO;

		// Draw layers
		drawXAxisLayer(xAxis, xRanged, y + HEIGHT - X_AXIS_HEIGHT, widthRanged, X_AXIS_HEIGHT);
		drawYAxisLayer(yAxis.items[0], x, Y, width, HEIGHT - X_AXIS_HEIGHT, true);
		for (let i = 0; i < yAxis.items.length; i++ ) {
			drawLineLayers[i].calculate(yAxis.items[i], xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT);
			drawLineLayers[i].draw(yAxis.items[i], xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT);
		}

		const activeIndex = calculateLineActivePopupIndex(xAxis, xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT);
		drawDotsForLines(drawersArgs, y, height, activeIndex, drawLineLayers);
	}
}