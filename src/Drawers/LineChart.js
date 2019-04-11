import { PIXEL_RATIO, BOTTOM_PADDING } from '../Globals';

import { drawingWithRange } from '../utils';

import LineLayerDrawer from './Layers/Line';
import LineRangeLayerDrawer from './Layers/LineRange';
import DotsLayerDrawer from './Layers/Dots';
import YAxisLayerDrawer from './Layers/YAxis';
import XAxisLayerDrawer from './Layers/XAxis';


export default function LineChartDrawer(drawersArgs) {
	const { ctx, config, control, ys, xs } = drawersArgs;
	const chartPadding = 5 * PIXEL_RATIO;
	const XAxisSize = 10 * PIXEL_RATIO;

	const drawYAxisLayer = YAxisLayerDrawer(drawersArgs);
	const drawXAxisLayer = drawingWithRange(control.range, XAxisLayerDrawer(drawersArgs));
	const drawLineLayer  = drawingWithRange(control.range, LineRangeLayerDrawer(drawersArgs));
	const drawDotsLayer  = drawingWithRange(control.range, DotsLayerDrawer(drawersArgs));

	// const backCanvas = document.createElement('canvas');
	// const backCtx = backCanvas.getContext('2d');

	// backCanvas.style.border = '1px solid red';
	// document.body.appendChild(backCanvas);

	const lastRange = [control.range[0], control.range[1], control.range[1] - control.range[0]];


	return function drawChart(x, y, width, height) {
		// ctx.save();
		// ctx.fillStyle = 'green';
		// ctx.fillRect(x, y, width, height);
		// ctx.restore();

		// backCtx.fillRect(0, 0, 100, 100);


		const HEIGHT = height - BOTTOM_PADDING

		const Y = y + chartPadding;
		drawXAxisLayer(xs, x, y + HEIGHT - XAxisSize, width, XAxisSize);
		drawYAxisLayer(config.minHeight, config.maxHeight, x, Y, width, HEIGHT - XAxisSize - chartPadding - chartPadding);

		for (let i = 0; i < ys.length; i++ ) {
			drawLineLayer(ys[i], x, Y, width, HEIGHT - XAxisSize - chartPadding - chartPadding);
			drawDotsLayer(ys[i], x, Y, width, HEIGHT - XAxisSize - chartPadding - chartPadding);
		}
	}
}