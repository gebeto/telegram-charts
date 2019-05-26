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
import LineActivePopup from '../Layers/LineActivePopup';
import YAxisLayerDrawer from '../Layers/YAxis';
import XAxisLayerDrawer from '../Layers/XAxis';
import { drawDotsForLines } from './utils';

import { debugLayer } from '../utils';


export default function DualLineChartDrawer(drawersArgs) {
	const { ctx, config, colors, yAxis, xAxis } = drawersArgs;

	const drawLeftYAxisLayer = YAxisLayerDrawer(drawersArgs, {
		textAlign: 'left',
	});

	const drawRightYAxisLayer = YAxisLayerDrawer(drawersArgs, {
		textAlign: 'right',
	});

	const drawXAxisLayer = XAxisLayerDrawer(drawersArgs);
	// const drawLineLayer  = LineLayerDrawer(drawersArgs);
	const drawLineLayers = yAxis.items.map(el => LineLayerDrawer(drawersArgs));
	const calculateLineActivePopupIndex  = LineActivePopup(drawersArgs);

	return function drawChart(x, y, width, height) {
		// debugLayer(ctx, x, y, width, height);

		const XS = width * config.control.range[0];
		const xRanged = x - XS / config.control.scale;
		const widthRanged = width / config.control.scale;

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

		for (let i = 0; i < yAxis.items.length; i++ ) {
			drawLineLayers[i].calculate(yAxis.items[i], xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT);
			drawLineLayers[i].draw(yAxis.items[i], xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT, activeIndex);
		}

		const activeIndex = calculateLineActivePopupIndex(xAxis, xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT);
		drawDotsForLines(drawersArgs, y, height, activeIndex, drawLineLayers);
	}
}