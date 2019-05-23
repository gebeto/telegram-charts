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

let graphsInstances = [];

createBar(window.CONTAINER, (isDay) => {
	console.log(isDay);
	CURRENT.THEME = isDay ? THEME_DAY : THEME_NIGHT;
	document.body.className = isDay ? 'day' : 'night';
	graphsInstances.forEach(chart => chart.update());
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


function initGraphModule() {
	let index = 0;

	return {
		render: function Graph(container, chartData, fabric, opts = {}) {
			const graphOpts = {
				container: container || document.body,
				index: index++,
				title: opts.title || undefined
			};
			const graph = Chart(graphOpts, chartData, fabric);
			AnimationLoop.add(() => {
				graph.render();
			});
			graphsInstances.push(graph);
			return graph;
		}
	}
}


window.GraphFabrics = fabrics;
window.Graph = initGraphModule();