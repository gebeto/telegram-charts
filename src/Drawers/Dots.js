const PI2 = Math.PI * 2;

export default function Line({ ctx, normX, normY, colors }) {
	return function drawDots(data, x, y, width, height) {
		const [key, ...items] = data;
		for (let i = 1; i < items.length; i++) {
			ctx.beginPath();
			ctx.arc(
				x + normX(i) * width,
				y + height - normY(items[i]) * height,
				4, 0, PI2,
			);
			ctx.lineWidth = 2;
			ctx.strokeStyle = colors[key];
			ctx.fillStyle = '#FFF';
			ctx.fill();
			ctx.stroke();
		}
	}
}