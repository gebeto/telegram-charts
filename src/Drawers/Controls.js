export default function ControlsDrawer({ctx, control, drawLine, ys}) {
	const pipaH = 36;
	const pipaH2 = pipaH / 2;

	const controlWidth = 14;
	const controlWidthMul2 = controlWidth * 2;
	const controlWidthDiv2 = controlWidth / 2;
	const controlPipaWidth = (controlWidth - 2) / 2;

	return function drawControl(x, y, width, height) {
		const oldWidth = width;
		const oldX = x;
		width = width - controlWidthMul2;
		x = x + controlWidth

		for (let i = 0; i < ys.length; i++ ) {
			drawLine(ys[i], x, y + 3, width, height - 6);
		}

		const xs = x + width * control.range[0];
		const xe = x + width * control.range[1];
		const ww = width * (control.range[1] - control.range[0]);

		// Fill unactive part
		ctx.save();
		ctx.globalAlpha = 0.6;
		ctx.fillStyle = "#E2EEF9";
		// ctx.fillStyle = "red";

		ctx.beginPath();
		ctx.moveTo(xs - 1, y);
		ctx.lineTo(xs - 1, y + height);
		ctx.arcTo(oldX, y + height, oldX, y + height - controlWidth, controlWidth / 2);
		ctx.arcTo(oldX, y, xs - 1, y, controlWidth / 2);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(xe + 1, y);
		ctx.lineTo(xe + 1, y + height);
		// ctx.lineTo(oldWidth, y + height);
		// ctx.lineTo(oldWidth, y);
		ctx.arcTo(oldWidth, y + height, oldWidth, y + height - controlWidth, controlWidth / 2);
		ctx.arcTo(oldWidth, y, xe, y, controlWidth / 2);
		ctx.closePath();
		ctx.fill();

		ctx.restore();
		// End fill unactive part


		ctx.save();
		ctx.fillStyle = "#C0D1E1";
		ctx.beginPath();
		ctx.rect(xs, y, ww, 1);
		ctx.rect(xs, y + height - 1, ww, 1);
		ctx.fill();


		// Start range
		ctx.beginPath();
		ctx.moveTo(xs, y);
		ctx.lineTo(xs, y + height);
		ctx.arcTo(xs - controlWidth, y + height, xs - controlWidth, y + height - controlWidth, controlWidth / 2);
		ctx.arcTo(xs - controlWidth, y, xs, y, controlWidth / 2);
		ctx.closePath();
		ctx.fill();

		// End range
		ctx.beginPath();
		ctx.moveTo(xe, y);
		ctx.lineTo(xe, y + height);
		ctx.arcTo(xe + controlWidth, y + height, xe + controlWidth, y + height - controlWidth, controlWidth / 2);
		ctx.arcTo(xe + controlWidth, y, xe, y, controlWidth / 2);
		ctx.closePath();
		ctx.fill();

		ctx.restore();

		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = "#FFFFFF";
		ctx.rect(xs - controlPipaWidth, y + pipaH2, -2, height - pipaH);
		ctx.rect(xe + controlPipaWidth, y + pipaH2, 2, height - pipaH);
		ctx.fill();
		ctx.restore();
	}
}