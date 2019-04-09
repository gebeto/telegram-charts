const PI2 = Math.PI * 2;

export default function Line({ config, ctx, normX, normY, colors }) {

	let mousePosX = 0;
	let mousePosY = 0;
	config.mouse.addMoveListener((mouse) => {
		mousePosX = mouse.newX;
		mousePosY = mouse.newY;
	});

	return function drawDots(data, x, y, width, height) {
		const [key, ...items] = data;
		const chunkSize = normX(1) * width;
		const chunkSizeDiv2 = chunkSize / 2;
		let lineDrawn = false
		for (let i = 1; i < items.length; i++) {
			const X = x + normX(i) * width;
			const isX = mousePosX < X + chunkSizeDiv2 && mousePosX > X - chunkSizeDiv2;
			const isY = mousePosY > y && mousePosY < y + height;
			if (isX && isY) {
				if (!lineDrawn) {
					ctx.save();
					ctx.strokeStyle = '#182D3B';
					ctx.lineWidth = 1;
					ctx.globalAlpha = 0.1;
					ctx.beginPath();
					ctx.moveTo(X, y);
					ctx.lineTo(X, y + height);
					ctx.stroke();
					ctx.restore();
				}
				lineDrawn = true;
			} else {
				continue;
			}

			ctx.beginPath();
			ctx.arc(
				X,
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