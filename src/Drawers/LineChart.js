export default function LineChartDrawer(ctx, control, drawLine, ys) {
	console.log("Asdasdas");
	return function drawChart(x, y, width, height) {
		for (let i = 0; i < ys.length; i++ ) {
			drawLine(ys[i], x, y, width, height);
		}
	}
}