import './styles/index.scss';

import ChartTypes from './ChartTypes';
import AnimationLoop from './Utils/AnimationLoop';
import Chart from './Chart';


import { createThemeChanger } from './UI/Theme';


let graphsInstances = [];

createThemeChanger((isLight) => {
	graphsInstances.forEach(chart => chart.update());
});


function fabricByDatasource(datasource) {
	const types = Object.keys(datasource.types).map(key => datasource.types[key]).filter(el => el !== 'x');
	if (!types.length) {
		throw new Error("DataSet error. No columns for chart")
	} else if (types.length > 50) {
		throw new Error("DataSet error. Supported up to 50 columns on one graph.")
	}

	const type = types[0];
	if (ChartTypes[type]) {
		if (datasource.y_scaled) {
			if (type !== 'line' || types.length !== 2) {
				throw new Error("DataSet error. 'y_scaled' is only used with exactly 2 'line' columns.")
			}
			return ChartTypes['dual_line'];
		}
		return ChartTypes[type]
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