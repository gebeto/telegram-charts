import { PIXEL_RATIO, ONE, CURRENT } from '../../Globals';
import AreaLineLayerDrawer from '../Layers/AreaLine';
import { debugLayer } from '../utils';
import { createControlLayer, controlWidthMul2, controlWidth } from './utils';


export default function AreaLineControlsDrawer(drawersArgs) {
	const { ctx, config, canvasBounds, control, ys, yAxis, xAxis } = drawersArgs;
	const drawAreaLineLayer = AreaLineLayerDrawer(drawersArgs);

	const { updateControlBounds, renderControl } = createControlLayer(config, control);
	

	return function drawControl(x, y, width, height) {
		// debugLayer(ctx, x, y, width, height);
		
		updateControlBounds(x, width);
		width = width - controlWidthMul2;
		x = x + controlWidth;

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
			drawAreaLineLayer(yAxis.items[i], stacked, percentage, x, y + 3, width, height - 6);
		}

		renderControl(ctx, x, y, width, height);
	}
}