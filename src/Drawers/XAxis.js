export default function XAxis({ ctx, normX, normY, colors }) {
	return function drawXAxis(items, x, y, width, height) {
		console.log(x, y)
		ctx.save();
		// ctx.beginPath();
		// ctx.moveTo(x + 0, y + height - normY(items[0]) * height);
		ctx.fillStyle = 'red';
		ctx.textAlign = 'center';
		for (let i = 1; i < items.length; i+=5) {
			ctx.fillText('10', x + normX(i) * width, y + height + 14);
		}
		// ctx.lineWidth = 2;
		// ctx.strokeStyle = colors[key];
		// ctx.lineJoin = 'round';
		// ctx.stroke();
		ctx.restore();
	}
}