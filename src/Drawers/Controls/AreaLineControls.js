import { PIXEL_RATIO, ONE, CURRENT } from '../../Globals';
import AreaLineLayerDrawer from '../Layers/AreaLine';
import { debugLayer } from '../utils';
import { createControlLayer, controlWidthMul2, controlWidth } from './utils';


export default function AreaLineControlsDrawer(drawersArgs) {
	const { config } = drawersArgs;
	const { ctx, data } = config;
	const { colors, yAxis, xAxis } = data;
	const drawAreaLineLayers = yAxis.items.map(el => AreaLineLayerDrawer(drawersArgs));
	const { updateControlBounds, renderControl, destroy: destroyControl, init: initControl } = createControlLayer(config);
	
	function destroy() {
		destroyControl();
	}

	function init() {
		initControl();
	}

	function drawControl(x, y, width, height) {
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
			// drawAreaLineLayers.calculate(yAxis.items[i], stacked, percentage, x, y + 3, width, height - 6);
			drawAreaLineLayers[i].draw(yAxis.items[i], stacked, percentage, x, y + 3, width, height - 6);
		}

		renderControl(ctx, x, y, width, height);
	}

	drawControl.destroy = destroy;
	drawControl.init = init;

	return drawControl;
}