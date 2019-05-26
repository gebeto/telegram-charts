import { PIXEL_RATIO, ONE, CURRENT } from '../../Globals';
import BarLayerDrawer from '../Layers/Bar';
import { debugLayer } from '../utils';
import { createControlLayer, controlWidthMul2, controlWidth } from './utils';


export default function ControlsDrawer(drawersArgs) {
	const { ctx, config, canvasBounds, control, yAxis, xAxis } = drawersArgs;
	const  barLayers = yAxis.items.map(el => BarLayerDrawer(drawersArgs));
	const { updateControlBounds, renderControl, destroy: destroyControl, init: initControl } = createControlLayer(config, control);
	
	function destroy() {
		destroyControl();
	}

	function init() {
		initControl();
	}

	
	const stacked = new Array(xAxis.length);
	function drawControl(x, y, width, height) {
		// debugLayer(ctx, x, y, width, height);
		
		updateControlBounds(x, width);
		width = width - controlWidthMul2;
		x = x + controlWidth;

		stacked.fill(0);
		const shouldRecalculate = barLayers[0].shouldBulkRecalculate(yAxis);

		for (let i = 0; i < yAxis.items.length; i++) {
			if (shouldRecalculate) {
				barLayers[i].calculate(yAxis.items[i], stacked, x, y + 3, width, height - 6);
			}
			barLayers[i].draw(yAxis.items[i], x, y + 3, width, height - 6);
		}

		renderControl(ctx, x, y, width, height);
	}

	drawControl.destroy = destroy;
	drawControl.init = init;

	return drawControl;
}