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
	// if (datasource.percentage) {
	// 	drawZoomedChartFabric: (args) => AreaChartDrawer(args),
	// }
};

const Line = {
	drawChartFabric: (args) => LineChartDrawer(args),
	drawControlFabric: (args) => LineControlsDrawer(args),
};


export default {
	bar: Bar,
	area: Area,
	line: Line,
	dual_line: DualLine,
}