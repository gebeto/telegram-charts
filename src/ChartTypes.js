import BarChartDrawer from './Drawers/Charts/BarChart';
import BarControlsDrawer from './Drawers/Controls/BarControls';

import DualLineChartDrawer from './Drawers/Charts/DualLineChart';
import LineChartDrawer from './Drawers/Charts/LineChart';
import LineControlsDrawer from './Drawers/Controls/LineControls';

import AreaChartDrawer from './Drawers/Charts/AreaChart';
import AreaLineChartDrawer from './Drawers/Charts/AreaLineChart';
import AreaLineControlsDrawer from './Drawers/Controls/AreaLineControls';


const DualLine = {
	drawChartFabric: (args) => DualLineChartDrawer(args),
	drawControlFabric: (args) => LineControlsDrawer(args),
};

const Bar = {
	drawChartFabric: (args) => BarChartDrawer(args),
	drawControlFabric: (args) => BarControlsDrawer(args),
};

const Area = {	
	drawChartFabric: (args) => AreaLineChartDrawer(args),
	drawControlFabric: (args) => AreaLineControlsDrawer(args),
};

const AreaCircle = {	
	drawChartFabric: (args) => AreaChartDrawer(args),
	drawControlFabric: (args) => AreaLineControlsDrawer(args),
};

const Line = {
	drawChartFabric: (args) => LineChartDrawer(args),
	drawControlFabric: (args) => LineControlsDrawer(args),
};


const ChartTypes = {
	bar: Bar,
	area: Area,
	line: Line,
	dual_line: DualLine,
};

export function fabricByDatasource(datasource, isZoom) {
	const types = Object.keys(datasource.types).map(key => datasource.types[key]).filter(el => el !== 'x');
	if (!types.length) {
		// throw new Error("DataSet error. No columns for chart")
		console.warn("DataSet error. No columns for chart")
	} else if (types.length > 50) {
		// throw new Error("DataSet error. Supported up to 50 columns on one graph.")
		console.warn("DataSet warning. Supported up to 50 columns on one graph.")
	}

	const type = types[0];
	if (ChartTypes[type]) {
		if (datasource.y_scaled) {
			if (type === 'line' || types.length === 2) {
				return ChartTypes['dual_line'];
			} else {
				// throw new Error("DataSet error. 'y_scaled' is only used with exactly 2 'line' columns.")
				console.warn("DataSet warning. 'y_scaled' is only used with exactly 2 'line' columns.");
			}
		}
		if (isZoom) {
			if (type === 'area') {
				return AreaCircle;
			}
		}
		return ChartTypes[type]
	}

	return fabric;
}

export default ChartTypes;