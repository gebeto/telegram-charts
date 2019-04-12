import { PIXEL_RATIO, BOTTOM_PADDING } from '../Globals';

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
	const XAxisSize = 10 * PIXEL_RATIO;

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
		const Y = y + chartPadding;

		// Draw layers
		drawXAxisLayer(xs, x, y + HEIGHT - XAxisSize, width, XAxisSize);
		drawYAxisLayer(config.minHeight, config.maxHeight, x, Y, width, HEIGHT - XAxisSize - chartPadding2);
		for (let i = 0; i < ys.length; i++ ) {
			drawLineLayer(ys[i], x, Y, width, HEIGHT - XAxisSize - chartPadding2);
			drawDotsLayer(ys[i], x, Y, width, HEIGHT - XAxisSize - chartPadding2);
		}
	}
}