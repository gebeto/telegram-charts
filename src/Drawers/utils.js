import { PIXEL_RATIO } from '../Globals';


export function debugLayer(ctx, x, y, width, height) {
	ctx.save();
	ctx.fillStyle = 'green';
	ctx.fillRect(x, y, width, height);
	ctx.restore();
}

