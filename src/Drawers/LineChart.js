export default function LineChartDrawer({ ctx, control, drawLine, drawDots, drawXAxis, ys, xs }) {
	return function drawChart(x, y, width, height) {
		drawXAxis(xs, x, y, width, height);
		for (let i = 0; i < ys.length; i++ ) {
			drawLine(ys[i], x, y, width, height);
			drawDots(ys[i], x, y, width, height);
		}
	}
}