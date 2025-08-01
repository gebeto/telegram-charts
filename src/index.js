import "./styles/index.scss";

import AnimationLoop from "./Utils/AnimationLoop";
import Chart from "./Chart";

import { createThemeChanger } from "./UI/Theme";
import { fabricByDatasource } from "./ChartTypes";

let graphsInstances = [];

createThemeChanger((isLight) => {
  graphsInstances.forEach((chart) => chart.update());
});

function initGraphModule() {
  let index = 0;

  return {
    render: function Graph(container, chartData, opts = {}) {
      const graphOpts = {
        container: container || document.body,
        index: index++,
        title: opts.title || undefined,
      };
      const fabric = fabricByDatasource(chartData);
      const graph = Chart(graphOpts, chartData, fabric);
      AnimationLoop.add(() => {
        graph.render();
      });
      graphsInstances.push(graph);
      return graph;
    },
  };
}

const Graph = initGraphModule();

export default Graph;
