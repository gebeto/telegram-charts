import './styles/index.scss';

import AnimationLoop from './Utils/AnimationLoop';
import Chart from './Chart';

import { createThemeChanger } from './UI/Theme';


import BarChartDrawer from './Drawers/Charts/BarChart';
import BarControlsDrawer from './Drawers/Controls/BarControls';

import DualLineChartDrawer from './Drawers/Charts/DualLineChart';
import LineChartDrawer from './Drawers/Charts/LineChart';
import LineControlsDrawer from './Drawers/Controls/LineControls';

import AreaChartDrawer from './Drawers/Charts/AreaChart';
import AreaLineChartDrawer from './Drawers/Charts/AreaLineChart';
import AreaLineControlsDrawer from './Drawers/Controls/AreaLineControls';


let graphsInstances = [];

createThemeChanger((isLight) => {
	graphsInstances.forEach(chart => chart.update());
});


function fabricByDatasource(datasource) {
	const fabric = {
		drawChartFabric: null,
		drawControlFabric: null,
	};

	const types = Object.keys(datasource.types).map(key => datasource.types[key]).filter(el => el !== 'x');
	if (!types.length) {
		throw new Error("DataSet error. No columns for chart")
	} else if (types.length > 50) {
		throw new Error("DataSet error. Supported up to 50 columns on one graph.")
	}

	const type = types[0];
	// console.log(type);
	if (datasource.y_scaled) {
		if (type !== 'line' || types.length !== 2) {
			throw new Error("DataSet error. 'y_scaled' is only used with exactly 2 'line' columns.")
		}
		fabric.drawChartFabric = (args) => DualLineChartDrawer(args);
		fabric.drawControlFabric = (args) => LineControlsDrawer(args);
	} else if (type == 'bar') {
		fabric.drawChartFabric = (args) => BarChartDrawer(args);
		fabric.drawControlFabric = (args) => BarControlsDrawer(args);
	} else if (type == 'area') {
		fabric.drawChartFabric = (args) => AreaLineChartDrawer(args);
		fabric.drawControlFabric = (args) => AreaLineControlsDrawer(args);
		if (datasource.percentage) {
			fabric.drawZoomedChartFabric = (args) => AreaChartDrawer(args);
		}
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