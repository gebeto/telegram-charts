import { PIXEL_RATIO, ONE, CURRENT } from '../../Globals';
import BarLayerDrawer from '../Layers/Bar';
import { debugLayer } from '../utils';
import { createControlLayer, controlWidthMul2, controlWidth } from './utils';


export default function ControlsDrawer(drawersArgs) {
	const { ctx, config, canvasBounds, control, ys, yAxis, xAxis } = drawersArgs;
	const drawBarLayer  = BarLayerDrawer(drawersArgs);

	const { updateControlBounds, renderControl } = createControlLayer(config, control);
	

	return function drawControl(x, y, width, height) {
		// debugLayer(ctx, x, y, width, height);
		
		updateControlBounds(x, width);
		width = width - controlWidthMul2;
		x = x + controlWidth;

		const stacked = new Array(xAxis.length).fill(0);
		for (let i = 0; i < yAxis.items.length; i++) {
			drawBarLayer(yAxis.items[i], stacked, x, y + 3, width, height - 6);
		}

		renderControl(ctx, x, y, width, height);
	}
}