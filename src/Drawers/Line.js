export default function Line(ctx, normX, normY, colors) {
	return function drawLine(data, x, y, width, height) {
		const [key, ...items] = data;
		ctx.beginPath();
		ctx.moveTo(x + 0, y + height - normY(items[0]) * height);
		for (let i = 1; i < items.length; i++) {
			ctx.lineTo(x + normX(i) * width, y + height - normY(items[i]) * height);
		}
		ctx.lineWidth = 2;
		ctx.strokeStyle = colors[key];
		ctx.stroke();
	}
}