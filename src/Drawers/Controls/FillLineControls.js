import FillLineLayerDrawer from '../Layers/FillLine';
import { PIXEL_RATIO, ONE, CURRENT } from '../../Globals';
import { debugLayer, createControlLayer } from '../utils';


export default function FillLineControlsDrawer(drawersArgs) {
	const { ctx, config, canvasBounds, control, ys, yAxis, xAxis } = drawersArgs;
	const drawFillLineLayer = FillLineLayerDrawer(drawersArgs);

	let xs = 0;
	let xe = 0;
	let ww = xe - xs;

	const pipaH = 10 * PIXEL_RATIO;
	const pipaH2 = pipaH / 2;

	const controlWidth = 10 * PIXEL_RATIO;
	const controlWidthMul2 = controlWidth * 2;
	const controlWidthDiv2 = controlWidth / 2;
	const controlWidthDiv13 = controlWidth - controlWidth / 3;
	const controlPipaWidth = 2 * PIXEL_RATIO;
	const controlPipaPos = (controlWidth - controlPipaWidth) / 2;

	const { controlsBounds } = createControlLayer(config, control);
	

	return function drawControl(x, y, width, height) {
		// debugLayer(ctx, x, y, width, height);
		
		const oldWidth = width;
		const oldX = x;
		width = width - controlWidthMul2;
		x = x + controlWidth

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
			drawFillLineLayer(yAxis.items[i], stacked, percentage, x, y + 3, width, height - 6);
		}

		xs = x + width * control.range[0];
		xe = x + width * control.range[1];
		ww = xe - xs;

		controlsBounds.start.x = xs - controlWidth;
		controlsBounds.start.y = y;
		controlsBounds.start.width = controlWidth;
		controlsBounds.start.height = height;

		controlsBounds.end.x = xe;
		controlsBounds.end.y = y;
		controlsBounds.end.width = controlWidth;
		controlsBounds.end.height = height;

		// Fill unactive part
		ctx.save();
		ctx.globalAlpha = 0.6;
		// ctx.fillStyle = "#E2EEF9";
		ctx.fillStyle = CURRENT.THEME.scrollBackground;

		ctx.beginPath();
		ctx.moveTo(xs - 1, y);
		ctx.lineTo(xs - 1, y + height);
		ctx.arcTo(oldX, y + height, oldX, y + height - controlWidth, controlWidthDiv2);
		ctx.arcTo(oldX, y, xs - 1, y, controlWidthDiv2);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(xe + 1, y);
		ctx.lineTo(xe + 1, y + height);
		ctx.arcTo(oldX + oldWidth, y + height, oldX + oldWidth, y + height - controlWidth, controlWidthDiv2);
		ctx.arcTo(oldX + oldWidth, y, xe, y, controlWidthDiv2);
		ctx.closePath();
		ctx.fill();

		ctx.restore();
		// End fill unactive part



		// Range body
		ctx.save();
		// ctx.fillStyle = "#C0D1E1";
		ctx.fillStyle = CURRENT.THEME.scrollSelector;
		ctx.beginPath();
		ctx.rect(xs, y, ww, ONE);
		ctx.rect(xs, y + height - ONE, ww, ONE);
		ctx.fill();


		// Start range
		ctx.beginPath();
		const xxxs = xs;
		ctx.moveTo(xxxs, y);
		ctx.lineTo(xxxs, y + height);
		ctx.arcTo(xxxs - controlWidth, y + height, xxxs - controlWidth, y + height - controlWidth, controlWidthDiv13);
		ctx.arcTo(xxxs - controlWidth, y, xxxs, y, controlWidthDiv13);
		ctx.closePath();
		ctx.fill();

		// End range
		ctx.beginPath();
		ctx.moveTo(xe, y);
		ctx.lineTo(xe, y + height);
		ctx.arcTo(xe + controlWidth, y + height, xe + controlWidth, y + height - controlWidth, controlWidthDiv13);
		ctx.arcTo(xe + controlWidth, y, xe, y, controlWidthDiv13);
		ctx.closePath();
		ctx.fill();

		ctx.restore();

		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = "#FFFFFF";
		// ctx.rect(xs - controlPipaPos, y + pipaH2, -controlPipaWidth, height - pipaH);
		// ctx.rect(xe + controlPipaPos, y + pipaH2, controlPipaWidth, height - pipaH);
		ctx.rect(xs - controlPipaPos, y + height/2 - pipaH2, -controlPipaWidth, pipaH);
		ctx.rect(xe + controlPipaPos, y + height/2 - pipaH2, controlPipaWidth, pipaH);
		// ctx.rect(xe + controlPipaPos, y + pipaH2, controlPipaWidth, height - pipaH);
		ctx.fill();
		ctx.restore();
	}
}