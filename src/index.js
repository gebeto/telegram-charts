import AnimationLoop from './Utils/AnimationLoop';
import Chart from './Chart';

import { ValueAnimator } from './Utils/Animated';

fetch('assets/chart_data.json').then(res => res.json()).then(ChartsData => {
	// const charts = ChartsData.slice(3, 4).map(data => {
	const charts = ChartsData.map(data => {
		const chart = Chart(data);
		return chart;
	});

	charts.forEach(chart => {
		AnimationLoop.add(() => {
			chart.render();
		});
	});
});
