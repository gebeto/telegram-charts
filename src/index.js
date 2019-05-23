import './styles/index.scss';

import AnimationLoop from './Utils/AnimationLoop';
import Chart from './Chart';

import { createThemeChanger } from './UI/Theme';


import BarChartDrawer from './Drawers/BarChart';
import BarControlsDrawer from './Drawers/BarControls';

import DualLineChartDrawer from './Drawers/DualLineChart';
import LineChartDrawer from './Drawers/LineChart';
import LineControlsDrawer from './Drawers/LineControls';

import FillLineChartDrawer from './Drawers/FillLineChart';
import AreaChartDrawer from './Drawers/AreaChart';
import FillLineControlsDrawer from './Drawers/FillLineControls';


let graphsInstances = [];

createThemeChanger((isLight) => {
	graphsInstances.forEach(chart => chart.update());
});


function fabricByDatasource(datasource) {
	const fabric = {
		drawChartFabric: null,
		drawControlFabric: null,
	};
	// const [xaxis, ...yaxis] = datasource.columns;
	// const axis = yaxis.map(axi => axi[0]);
	// console.log(axis, datasource.types);
	const types = Object.keys(datasource.types).map(key => datasource.types[key]).filter(el => el !== 'x');
	if (!types.length) {
		throw new Error("No data types for chart")
	} else if (types.length > 50) {
		throw new Error("Too much data. Supported up to 50 columns on one graph.")
	}

	const type = types[0];
	console.log(type);
	if (datasource.y_scaled) {
		fabric.drawChartFabric = (args) => DualLineChartDrawer(args);
		fabric.drawControlFabric = (args) => LineControlsDrawer(args);
	} else if (type == 'bar') {
		fabric.drawChartFabric = (args) => BarChartDrawer(args);
		fabric.drawControlFabric = (args) => BarControlsDrawer(args);
	} else if (type == 'area') {
		fabric.drawChartFabric = (args) => FillLineChartDrawer(args);
		fabric.drawControlFabric = (args) => FillLineControlsDrawer(args);
		fabric.drawZoomedChartFabric = (args) => AreaChartDrawer(args);
	} else {
		fabric.drawChartFabric = (args) => LineChartDrawer(args);
		fabric.drawControlFabric = (args) => LineControlsDrawer(args);
	}

	return fabric;
}


function initGraphModule() {
	let index = 0;

	return {
		render: function Graph(container, chartData, opts = {}) {
			const graphOpts = {
				container: container || document.body,
				index: index++,
				title: opts.title || undefined
			};
			const fabric = fabricByDatasource(chartData);
			const graph = Chart(graphOpts, chartData, fabric);
			AnimationLoop.add(() => {
				graph.render();
			});
			graphsInstances.push(graph);
			return graph;
		}
	}
}


window.Graph = initGraphModule();