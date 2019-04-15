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

import FillLineLayerDrawer from './Layers/FillLine';
import YAxisLayerDrawer from './Layers/YAxis';
import XAxisLayerDrawer from './Layers/XAxis';


export default function BarChartDrawer(drawersArgs) {
	const { ctx, config, control, ys, yAxis, xAxis } = drawersArgs;
	const chartPadding = 6 * PIXEL_RATIO;
	const chartPadding2 = chartPadding * 2;

	const drawXAxisLayer = XAxisLayerDrawer(drawersArgs);
	const drawFillLineLayer  = FillLineLayerDrawer(drawersArgs);
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
			// console.log(yAxis.items[i].items[1])
			drawFillLineLayer(yAxis.items[i], stacked, percentage, xRanged, Y, widthRanged, HEIGHT - X_AXIS_HEIGHT);
		}
		// console.groupEnd();
		
		drawXAxisLayer(xAxis, xRanged, y + HEIGHT - X_AXIS_HEIGHT, widthRanged, X_AXIS_HEIGHT);
		drawYAxisLayer(yAxis.items[0], x, Y, width, HEIGHT - X_AXIS_HEIGHT, true);
	}
}