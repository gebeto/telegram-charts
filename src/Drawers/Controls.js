export default function ControlsDrawer(ctx, control, drawLine, ys) {
	return function drawControl(x, y, width, height) {
		for (let i = 0; i < ys.length; i++ ) {
			drawLine(ys[i], x + 7, y + 3, width - 14, height - 6);
		}

		const xs = x + width * control.range[0];
		const xe = x + width * control.range[1];
		const ww = width * (control.range[1] - control.range[0]);

		ctx.save();
		ctx.fillStyle = "#C4D6EA";
		ctx.beginPath();
		const controlWidth = 14;
		const controlWidth2 = controlWidth * 2;
		const controlPipaWidth = (controlWidth - 2) / 2;
		ctx.rect(xs + controlWidth, y, ww - controlWidth2, 1);
		ctx.rect(xs + controlWidth, y + height - 1, ww - controlWidth2, 1);
		ctx.fill();


		ctx.beginPath();
		ctx.moveTo(xs + controlWidth, y);
		ctx.lineTo(xs + controlWidth, y + height);
		ctx.arcTo(xs, y + height, xs, y + height - controlWidth, controlWidth / 2);
		ctx.arcTo(xs, y, xs + controlWidth, y, controlWidth / 2);
		ctx.lineTo(xs, y);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(xe - controlWidth, y);
		ctx.lineTo(xe - controlWidth, y + height);
		ctx.arcTo(xe, y + height, xe, y + height - controlWidth, controlWidth / 2);
		ctx.arcTo(xe, y, xe - controlWidth, y, controlWidth / 2);
		ctx.closePath();
		ctx.fill();

		ctx.restore();

		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = '#FFFFFF';
		ctx.rect(xs + controlPipaWidth, y + 15, 2, height - 30);
		ctx.rect(xe - controlPipaWidth, y + 15, -2, height - 30);
		ctx.fill();
		ctx.restore();
	}
}