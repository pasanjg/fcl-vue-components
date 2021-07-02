export const chartTypes = ['line-chart', 'bar-chart', 'pie-chart', 'doughnut-chart', 'radar-chart', 'polararea-chart', 'bubble-chart', 'scatter-chart'];

function getChart(type) {
  switch (type) {
    case chartTypes[0]:
      return VueChartJs.Line;
    case chartTypes[1]:
      return VueChartJs.Bar;
    case chartTypes[2]:
      return VueChartJs.Pie;
    case chartTypes[3]:
      return VueChartJs.Doughnut;
    case chartTypes[4]:
      return VueChartJs.Radar;
    case chartTypes[5]:
      return VueChartJs.PolarArea;
    case chartTypes[6]:
      return VueChartJs.Bubble;
    case chartTypes[7]:
      return VueChartJs.Scatter;
    default:
      throw new Error("Wrong chart type!");
  }
};

export const ChartJS = (type) => {
  return {
    extends: getChart(type),
    props: ['chartdata', 'chartoptions'],
    mounted() {
      this.renderChart(this.chartdata, this.chartoptions)
    },
  }
}
