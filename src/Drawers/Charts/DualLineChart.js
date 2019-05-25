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
import LineActivePopup from '../Layers/LineActivePopup';
import YAxisLayerDrawer from '../Layers/YAxis';
import XAxisLayerDrawer from '../Layers/XAxis';

import { debugLayer } from '../utils';


export default function DualLineChartDrawer(drawersArgs) {
	const { ctx, config, control, yAxis, xAxis } = drawersArgs;
	const chartPadding = 6 * PIXEL_RATIO;
	const chartPadding2 = chartPadding * 2;

	const drawLeftYAxisLayer = YAxisLayerDrawer(drawersArgs, {
		textAlign: 'left',
	});

	const drawRightYAxisLayer = YAxisLayerDrawer(drawersArgs, {
		textAlign: 'right',
	});

	const drawXAxisLayer = XAxisLayerDrawer(drawersArgs);
	const drawLineLayer  = LineLayerDrawer(drawersArgs);
	const calculateLineActivePopupIndex  = LineActivePopup(drawersArgs);

	return function drawChart(x, y, width, height) {
		// debugLayer(ctx, x, y, width, height);

		const XS = width * control.range[0];
		const xRanged = x - XS / control.scale;
		const widthRanged = width / control.scale;

		const HEIGHT = height - BOTTOM_PADDING - DOT_RADIUS_MUL_2;
		const Y = y + DOT_RADIUS + TWO;

		// Draw layers
		drawXAxisLayer(xAxis, xRanged, y + HEIGHT - X_AXIS_HEIGHT, widthRanged, X_AXIS_HEIGHT);

		let drawYLine = true;
		if (yAxis.items[0].enabled) {
			drawLeftYAxisLayer(yAxis.items[0], x, Y, width, HEIGHT - X_AXIS_HEIGHT, drawYLine);
			drawYLine = false;
		}
		if (yAxis.items[1].enabled) {
			drawRightYAxisLayer(yAxis.items[1], x + width, Y, -width, HEIGHT - X_AXIS_HEIGHT, drawYLine);
			drawYLine = false;
		}

		const activeIndex = calculateLineActivePopupIndex(xAxis, xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT);
		for (let i = 0; i < yAxis.items.length; i++ ) {
			drawLineLayer.calculate(yAxis.items[i], xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT);
			drawLineLayer.draw(yAxis.items[i], xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT, activeIndex);
		}
	}
}