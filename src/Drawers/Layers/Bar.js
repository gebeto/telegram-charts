import { PIXEL_RATIO } from '../../Globals';
import { normalize, throttleL } from '../../utils';


export default function Bar({ config, control, ctx, norm, colors, normYKey, yAxis }, opts = {}) {
	const chunkSize = norm.X(1);

	const draws = {
		items: [],
		width: [],
		opacity: 1.0,
		color: null,
	}

	function calculate(data, stacked, x, y, width, height) {
		const { key, items, opacity } = data;
		const normY = data.scaling[normYKey];
		draws.opacity = opacity.value;
		draws.color = colors[key];
		
		if (!draws.opacity) return;
		if (draws.opacity < 1) {
			config.shouldControlUpdate = true;
		}

		draws.items = [];
		draws.width = chunkSize * width;

		// const WIDTH = (width - chunkSize * width);
		const WIDTH = width;
		const count = items.length;
		for (let i = 0; i < count; i++) {
			stacked[i] += items[i] * draws.opacity;
			const chunk = chunkSize * WIDTH;
			const X = x + chunk * i;
			const Y = y + height - normY(stacked[i]) * height;
			const BAR_HEIGHT = normY(items[i]) * height * draws.opacity;
			
			if (X < -chunk || X > ctx.canvas.width) {
				continue;
			}

			draws.items.push([X, Y, Y + BAR_HEIGHT]);
		}
	}

	function drawBar(data, x, y, width, height) {
		const { key } = data;
		const { items, opacity } = draws;

		if (!opacity) return;
		const count = items.length;

		ctx.save();
		ctx.beginPath();
		for (let i = 0; i < count; i++) {
			ctx.moveTo(items[i][0] + draws.width / 2, items[i][1]);
			ctx.lineTo(items[i][0] + draws.width / 2, items[i][2]);
		}
		ctx.lineWidth = draws.width;
		ctx.strokeStyle = draws.color;
		ctx.stroke();
		ctx.restore();
	}

	return {
		calculate: calculate,
		draw: drawBar,
	};
}