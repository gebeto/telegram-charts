import AnimationLoop from './Utils/AnimationLoop';
import Chart from './Chart';

import { createBar } from './UI/ChangeThemeBar';
import { CURRENT, THEME_DAY, THEME_NIGHT } from './Globals';

window.CONTAINER = document.querySelector('#container');

let charts = [];
// createBar(document.body, (isDay) => {
createBar(window.CONTAINER, (isDay) => {
	console.log(isDay);
	CURRENT.THEME = isDay ? THEME_DAY : THEME_NIGHT;
	document.body.className = isDay ? 'day' : 'night';
	charts.forEach(chart => chart.update());
});

const item = 3;
// fetch('assets/chart_data.json').then(res => res.json()).then(ChartsData => {
fetch('assets/stage_2_data/2/overview.json').then(res => res.json()).then(ChartsData => {
	charts = [ChartsData].map((data, index) => {
	// charts = ChartsData.slice(item, item + 1).map((data, index) => {
	// charts = ChartsData.map((data, index) => {
		const chart = Chart(data, index);
		return chart;
	});

	charts.forEach(chart => {
		AnimationLoop.add(() => {
			chart.render();
		});
	});
});
