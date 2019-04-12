import {
	PIXEL_RATIO,
	BOTTOM_PADDING,
	X_AXIS_HEIGHT,
} from '../Globals';

import { drawingWithRange } from '../utils';

import LineLayerDrawer from './Layers/Line';
import LineRangeLayerDrawer from './Layers/LineRange';
import DotsLayerDrawer from './Layers/Dots';
import YAxisLayerDrawer from './Layers/YAxis';
import XAxisLayerDrawer from './Layers/XAxis';


export default function LineChartDrawer(drawersArgs) {
	const { ctx, config, control, ys, xs } = drawersArgs;
	const chartPadding = 6 * PIXEL_RATIO;
	const chartPadding2 = chartPadding * 2;

	const drawYAxisLayer = YAxisLayerDrawer(drawersArgs);
	const drawXAxisLayer = drawingWithRange(control, XAxisLayerDrawer(drawersArgs));
	const drawLineLayer  = drawingWithRange(control, LineRangeLayerDrawer(drawersArgs));
	const drawDotsLayer  = drawingWithRange(control, DotsLayerDrawer(drawersArgs));

	return function drawChart(x, y, width, height) {
		// ctx.save();
		// ctx.fillStyle = 'green';
		// ctx.fillRect(x, y, width, height);
		// ctx.restore();

		const HEIGHT = height - BOTTOM_PADDING
		const Y = y;

		// Draw layers
		drawXAxisLayer(xs, x, y + HEIGHT - X_AXIS_HEIGHT, width, X_AXIS_HEIGHT);
		drawYAxisLayer(config.minHeight, config.maxHeight, x, Y, width, HEIGHT - X_AXIS_HEIGHT);
		for (let i = 0; i < ys.length; i++ ) {
			drawLineLayer(ys[i], x, Y, width, HEIGHT - X_AXIS_HEIGHT);
			drawDotsLayer(ys[i], x, Y, width, HEIGHT - X_AXIS_HEIGHT);
		}
	}
}