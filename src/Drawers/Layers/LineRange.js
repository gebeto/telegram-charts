import { PIXEL_RATIO } from '../../Globals';


export default function LineRange({ config, control, ctx, norm, colors }, opts = {}) {
	const lineWidth = (opts.lineWidth || 2) * PIXEL_RATIO;
	const part = norm.X(1);

	// console.time('Norm');
	// for (let i = 0; i < 100000; i++) {
	// 	norm.X(i) * 1000;
	// }
	// console.timeEnd('Norm');

	// console.time('Mul');
	// for (let i = 0; i < 100000; i++) {
	// 	(part * i) * 1000;
	// }
	// console.timeEnd('Mul');
	// console.log(norm.X(S) * width, (part * S) * width);

	return function drawLineRange(data, x, y, width, height, range) {
		const [key, ...items] = data;
		// console.log(range);
		const S = config.startIndex > -1 ? config.startIndex : 0;
		const E = config.endIndex < items.length ? config.endIndex : items.length;
		ctx.save();
		ctx.beginPath();
		// console.time('Norm');
		ctx.moveTo(
			x + norm.X(S) * width,
			// x + (part * S) * width,
			y + height - norm.Y(items[S]) * height
		);
		// while 
		
		for (let i = S + 1; i < E; i++) {
			const X = x + norm.X(i) * width;
			// const X = x + (part * i) * width;
			const Y = y + height - norm.Y(items[i]) * height;
			ctx.lineTo(X, Y);
		}
		// console.timeEnd('Norm');
		ctx.lineWidth = lineWidth;
		ctx.strokeStyle = colors[key];
		ctx.lineJoin = 'round';
		ctx.stroke();
		ctx.restore();
	}
}