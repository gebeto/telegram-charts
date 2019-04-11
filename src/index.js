import AnimationLoop from './Utils/AnimationLoop';
import Chart from './Chart';

const item = 3;
fetch('assets/chart_data.json').then(res => res.json()).then(ChartsData => {
// fetch('assets/stage_2_data/2/overview.json').then(res => res.json()).then(ChartsData => {
	// const charts = [ChartsData].map((data, index) => {
	const charts = ChartsData.slice(item, item + 1).map((data, index) => {
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
