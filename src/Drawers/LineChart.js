export default function LineChartDrawer({ ctx, control, drawLineLayer, drawDotsLayer, drawXAxisLayer, ys, xs }) {
	return function drawChart(x, y, width, height) {
		drawXAxisLayer(xs, x, y, width, height);

		for (let i = 0; i < ys.length; i++ ) {
			drawLineLayer(ys[i], x, y, width, height);
			drawDotsLayer(ys[i], x, y, width, height);
		}

	}
}