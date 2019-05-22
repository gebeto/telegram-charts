import AnimationLoop from './Utils/AnimationLoop';
import Chart from './Chart';

import { createBar } from './UI/ChangeThemeBar';
import {
	CURRENT,
	THEME_DAY,
	THEME_NIGHT,
} from './Globals';


import BarChartDrawer from './Drawers/BarChart';
import BarControlsDrawer from './Drawers/BarControls';

import DualLineChartDrawer from './Drawers/DualLineChart';
import LineChartDrawer from './Drawers/LineChart';
import LineControlsDrawer from './Drawers/LineControls';

import FillLineChartDrawer from './Drawers/FillLineChart';
import AreaChartDrawer from './Drawers/AreaChart';
import FillLineControlsDrawer from './Drawers/FillLineControls';


window.CONTAINER = document.querySelector('#container');

let charts = [];
// createBar(document.body, (isDay) => {
createBar(window.CONTAINER, (isDay) => {
	console.log(isDay);
	CURRENT.THEME = isDay ? THEME_DAY : THEME_NIGHT;
	document.body.className = isDay ? 'day' : 'night';
	charts.forEach(chart => chart.update());
});


const fabrics = [
	{
		drawChartFabric: (args) => LineChartDrawer(args),
		drawControlFabric: (args) => LineControlsDrawer(args),
	},
	{
		drawChartFabric: (args) => DualLineChartDrawer(args),
		drawControlFabric: (args) => LineControlsDrawer(args),
	},
	{
		drawChartFabric: (args) => BarChartDrawer(args),
		drawControlFabric: (args) => BarControlsDrawer(args),
	},
	{
		drawChartFabric: (args) => BarChartDrawer(args),
		drawControlFabric: (args) => BarControlsDrawer(args),
	},
	{
		drawChartFabric: (args) => FillLineChartDrawer(args),
		drawControlFabric: (args) => FillLineControlsDrawer(args),
	},
	{
		drawChartFabric: (args) => AreaChartDrawer(args),
		drawControlFabric: (args) => FillLineControlsDrawer(args),
	},
];



Promise.all([
	fetch('assets/stage_2_data/1/overview.json').then(res => res.json()),
	fetch('assets/stage_2_data/2/overview.json').then(res => res.json()),
	fetch('assets/stage_2_data/3/overview.json').then(res => res.json()),
	fetch('assets/stage_2_data/4/overview.json').then(res => res.json()),
	fetch('assets/stage_2_data/5/overview.json').then(res => res.json()),
	fetch('assets/stage_2_data/5/overview.json').then(res => res.json()),
]).then(ChartsData => {
	charts = ChartsData.map((data, index) => {
		const chart = Chart(fabrics[index], data, index);
		return chart;
	});

	charts.forEach(chart => {
		AnimationLoop.add(() => {
			chart.render();
		});
	});
});




// fetch('assets/stage_2_data/2/overview.json').then(res => res.json()).then(ChartsData => {
// 	charts = [ChartsData].map((data, index) => {
// 		const chart = Chart(fabrics[1], data, index);
// 		return chart;
// 	});

// 	charts.forEach(chart => {
// 		AnimationLoop.add(() => {
// 			chart.render();
// 		});
// 	});
// });


// fetch('assets/stage_2_data/3/overview.json').then(res => res.json()).then(ChartsData => {
// 	charts = [ChartsData].map((data, index) => {
// 		const chart = Chart(fabrics[2], data, index);
// 		return chart;
// 	});

// 	charts.forEach(chart => {
// 		AnimationLoop.add(() => {
// 			chart.render();
// 		});
// 	});
// });

// fetch('assets/stage_2_data/3/overview.json').then(res => res.json()).then(ChartsData => {
// 	charts = [ChartsData].map((data, index) => {
// 		const chart = Chart(fabrics[2], data, index);
// 		return chart;
// 	});

// 	charts.forEach(chart => {
// 		AnimationLoop.add(() => {
// 			chart.render();
// 		});
// 	});
// });