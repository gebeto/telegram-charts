import "./styles/index.scss";

import AnimationLoop from "./Utils/AnimationLoop";
import Chart from "./Chart";

import { createThemeChanger } from "./UI/Theme";
import { fabricByDatasource } from "./ChartTypes";

type Chart = {
  update: () => void;
  render: () => void;
};

type GraphOptions = {
  title?: string;
};

type GraphData<T extends string> = {
  title: string;
  columns: [T, ...number[]][];
  types: Record<T, "x" | "line" | "area" | "bar">;
  names: Record<T, string>;
  colors: Record<T, string>;
  stacked?: boolean;
};

let graphsInstances: Chart[] = [];

createThemeChanger((isLight: boolean) => {
  graphsInstances.forEach((chart) => chart.update());
});

function initGraphModule() {
  let index = 0;

  return {
    render: function Graph<T extends string>(
      container: HTMLElement | null,
      chartData: GraphData<T>,
      opts: GraphOptions = {}
    ) {
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

// Graph.render(
//   document.body,
//   {
//     title: "Sample Graph",
//     columns: [
//       ["x", 1, 2, 3, 4, 5],
//       ["y0", 10, 20, 30, 40, 50],
//     ],
//     types: {
//       x: "x",
//       y0: "line",
//     },
//     names: {
//       x: "X Axis",
//       y0: "Y Axis",
//     },
//     colors: {
//       x: "#ff0000",
//       y0: "#00ff00",
//     },
//   },
//   { title: "Default Graph" }
// );

export default Graph;
