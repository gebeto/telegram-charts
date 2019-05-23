import { PIXEL_RATIO, ONE, CURRENT } from '../../Globals';
import LineLayerDrawer from '../Layers/Line';
import { debugLayer } from '../utils';
import { createControlLayer, controlWidthMul2, controlWidth } from './utils';


export default function ControlsDrawer(drawersArgs) {
	const { ctx, config, canvasBounds, control, ys, yAxis, xAxis } = drawersArgs;
	const drawLineLayer = LineLayerDrawer(drawersArgs, { lineWidth: 1 });

	const { updateControlBounds, renderControl } = createControlLayer(config, control);
	

	return function drawControl(x, y, width, height) {
		// debugLayer(ctx, x, y, width, height);

		updateControlBounds(x, width);
		width = width - controlWidthMul2;
		x = x + controlWidth;

		for (let i = 0; i < yAxis.items.length; i++ ) {
			drawLineLayer(yAxis.items[i], x, y + 3, width, height - 6);
		}

		renderControl(ctx, x, y, width, height);
	}
}