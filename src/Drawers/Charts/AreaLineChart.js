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

import AreaLineLayerDrawer from '../Layers/AreaLine';
import AreaLineActiveLayerDrawer from '../Layers/AreaLineActivePopup';
import YAxisLayerDrawer from '../Layers/YAxis';
import XAxisLayerDrawer from '../Layers/XAxis';

import { debugLayer } from '../utils';


export default function AreaChartDrawer(drawersArgs) {
	const { ctx, config, yAxis, xAxis } = drawersArgs;
	const chartPadding = 6 * PIXEL_RATIO;
	const chartPadding2 = chartPadding * 2;

	const drawXAxisLayer = XAxisLayerDrawer(drawersArgs);
	const drawAreaLineLayers = yAxis.items.map(el => AreaLineLayerDrawer(drawersArgs));
	const drawAreaLineActiveLayer = AreaLineActiveLayerDrawer(drawersArgs);
	const drawYAxisLayer = YAxisLayerDrawer(drawersArgs, {
		textAlign: 'left',
	});

	function destroy() {
		drawAreaLineActiveLayer.destroy();
	}

	function init() {
		drawAreaLineActiveLayer.init();
	}

	function drawChart(x, y, width, height) {
		// debugLayer(ctx, x, y, width, height);

		const XS = width * config.control.range[0];
		const xRanged = x - XS / config.control.scale;
		const widthRanged = width / config.control.scale;

		const HEIGHT = height - BOTTOM_PADDING - DOT_RADIUS_MUL_2;
		const Y = y + DOT_RADIUS + TWO;

		// Draw layers
		const percentage = new Array(xAxis.length).fill(0);
		for (let i = 0; i < yAxis.items.length; i++) {
			for (let j = 0; j < yAxis.items[i].items.length; j++) {
				percentage[j] += yAxis.items[i].items[j] * yAxis.items[i].opacity.value;
			}
		}
		for (let i = 0; i < xAxis.length; i++) {
			percentage[i] /= 100;
		}

		const stacked = new Array(xAxis.length).fill(0);
		for (let i = 0; i < yAxis.items.length; i++) {
			// drawAreaLineLayers[i].calculate(yAxis.items[i], stacked, percentage, xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT);
			drawAreaLineLayers[i].draw(yAxis.items[i], stacked, percentage, xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT);
		}
		
		// console.log(xAxis)
		drawAreaLineActiveLayer(xAxis, xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT);
		
		drawXAxisLayer(xAxis, xRanged, y + HEIGHT - X_AXIS_HEIGHT, widthRanged, X_AXIS_HEIGHT);
		drawYAxisLayer(yAxis.items[0], x, Y, width, HEIGHT - X_AXIS_HEIGHT, true);
	}

	drawChart.destroy = destroy;
	drawChart.init = init;

	return drawChart;
}