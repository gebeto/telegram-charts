import AnimationLoop from './Utils/AnimationLoop';
import Chart from './Chart';


fetch('assets/chart_data.json').then(res => res.json()).then(ChartsData => {
	const charts = ChartsData.slice(3, 4).map((data, index) => {
	// const charts = ChartsData.map((data, index) => {
		const chart = Chart(data, index);
		return chart;
	});

	charts.forEach(chart => {
		AnimationLoop.add(() => {
			chart.render();
		});
	});
});
