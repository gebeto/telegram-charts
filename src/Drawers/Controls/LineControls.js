import { PIXEL_RATIO, ONE, CURRENT } from '../../Globals';
import LineLayerDrawer from '../Layers/Line';
import { debugLayer } from '../utils';
import { createControlLayer, controlWidthMul2, controlWidth } from './utils';


export default function ControlsDrawer(drawersArgs) {
	const { ctx, config, canvasBounds, control, ys, yAxis, xAxis } = drawersArgs;
	const lineLayers = yAxis.items.map(el => LineLayerDrawer(drawersArgs, { lineWidth: 1 }));
	const { updateControlBounds, renderControl } = createControlLayer(config, control);


	return function drawControl(x, y, width, height) {
		// debugLayer(ctx, x, y, width, height);

		updateControlBounds(x, width);
		width = width - controlWidthMul2;
		x = x + controlWidth;

		for (let i = 0; i < yAxis.items.length; i++ ) {
			if (lineLayers[i].shouldRecalculate(yAxis.items[i])) {
				lineLayers[i].calculate(yAxis.items[i], x, y + 3, width, height - 6);
			}
			lineLayers[i].draw(yAxis.items[i], x, y + 3, width, height - 6);
		}

		renderControl(ctx, x, y, width, height);
	}
}