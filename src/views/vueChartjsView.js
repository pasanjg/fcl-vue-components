export const VueChartJSView = {
  data: function () {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Downloads',
            backgroundColor: '#007bff',
            data: [40, 39, 10, 40, 39, 80, 40],
          }
        ]
      },
      chartDataBubble: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Uploads',
            data: [{ x: 3, y: 7, r: 10 }],
            backgroundColor: "#e83e8c",
            hoverBackgroundColor: "#e83e8c"
          },
          {
            label: 'Downloads',
            data: [{ x: 6, y: 3, r: 7 }],
            backgroundColor: "#007bff",
            hoverBackgroundColor: "#008cff"
          },
          {
            label: 'Remaining',
            data: [{ x: 5, y: 5, r: 15 }],
            backgroundColor: "#20c997",
            hoverBackgroundColor: "#28a745"
          },
          {
            label: 'Network',
            data: [{ x: 3.5, y: 4, r: 7 }],
            backgroundColor: "#fd7e14",
            hoverBackgroundColor: "#ffc107"
          },
        ]
      },
      chartDataScatter: {
        datasets: [{
          label: 'Scatter Dataset',
          backgroundColor: "#6f42c1",
          data: [
            { x: 2, y: 0 },
            { x: 0, y: 10 },
            { x: 10, y: 10 },
            { x: 15, y: 2 },
            { x: 8, y: 3, r: 8 },
            { x: 2, y: 5, r: 6 },
            { x: 6, y: 9 },
            { x: 9, y: 8 },
            { x: 3, y: 2, r: 10 },
            { x: 5, y: 4, r: 15 },
          ],
        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
    }
  },
  template:
    `
		<div>
			<h3>Vue ChartJS</h3> <br />
      <ul>
        <li>
          <a href="https://vue-chartjs.org/guide/#browser" target="_blank">CDN Links</a>
        </li>
        <li>
          <a href="https://www.chartjs.org/docs/2.9.4/" target="_blank">ChartJS Docs</a>
        </li>
      </ul>
      <br />

      <div class="row">
        <div class="col-md-6 mb-5">
          <h5>Line chart</h5>
          <line-chart :chart-data="$data.chartData" :chart-options="$data.chartOptions" />
        </div>
        <div class="col-md-6 mb-5">
          <h5>Bar chart</h5>
          <bar-chart :chart-data="$data.chartData" :chart-options="$data.chartOptions" />
        </div>
        <div class="col-md-6 mb-5">
          <h5>Pie chart</h5>
          <pie-chart :chart-data="$data.chartData" :chart-options="$data.chartOptions" />
        </div>
        <div class="col-md-6 mb-5">
          <h5>Doughnut chart</h5>
          <doughnut-chart :chart-data="$data.chartData" :chart-options="$data.chartOptions" />
        </div>
        <div class="col-md-6 mb-5">
          <h5>Radar chart</h5>
          <radar-chart :chart-data="$data.chartData" :chart-options="$data.chartOptions" />
        </div>
        <div class="col-md-6 mb-5">
          <h5>Polar Area chart</h5>
          <polararea-chart :chart-data="$data.chartData" :chart-options="$data.chartOptions" />
        </div>
        <div class="col-md-6 mb-5">
          <h5>Bubble chart</h5>
          <bubble-chart :chart-data="$data.chartDataBubble" :chartOptions="$data.chartOptions" />
        </div>
        <div class="col-md-6 mb-5">
          <h5>Scatter chart</h5>
          <bubble-chart :chart-data="$data.chartDataScatter" :chartOptions="$data.chartOptions" />
        </div>
      </div>
		</div>
  `,
};
