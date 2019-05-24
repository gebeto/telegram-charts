import { PIXEL_RATIO, ONE, CURRENT } from '../../Globals';
import BarLayerDrawer from '../Layers/Bar';
import { debugLayer } from '../utils';
import { createControlLayer, controlWidthMul2, controlWidth } from './utils';


export default function ControlsDrawer(drawersArgs) {
	const { ctx, config, canvasBounds, control, ys, yAxis, xAxis } = drawersArgs;
	const drawBarLayers = yAxis.items.map(el => BarLayerDrawer(drawersArgs));
	const { updateControlBounds, renderControl } = createControlLayer(config, control);
	

	return function drawControl(x, y, width, height) {
		// debugLayer(ctx, x, y, width, height);
		
		updateControlBounds(x, width);
		width = width - controlWidthMul2;
		x = x + controlWidth;

		const stacked = new Array(xAxis.length).fill(0);
		let recalc = false;
		for (let i = 0; i < yAxis.items.length; i++) {
			if (recalc = yAxis.items[i].opacity.inProgress || !yAxis.items[i].calculated) {
				break;
			}
		}

		for (let i = 0; i < yAxis.items.length; i++) {
			if (recalc) {
				yAxis.items[i].calculated = true;
				drawBarLayers[i].calculate(yAxis.items[i], stacked, x, y + 3, width, height - 6);
			}
			drawBarLayers[i].draw(yAxis.items[i], x, y + 3, width, height - 6);
		}

		renderControl(ctx, x, y, width, height);
	}
}