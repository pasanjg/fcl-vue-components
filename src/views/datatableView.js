export const DataTableView = {
  data: function () {
    return {
      columns: [
        { "data": "userId", "title": "User ID" },
        { "data": "id", "title": "ID" },
        { "data": "title", "title": "Title" },
        { "data": "completed", "title": "Completed" },
      ],
      griddata: null,
    }
  },
  inject: ['fetcher'],
  mounted: async function () {
    const url = "https://jsonplaceholder.typicode.com/todos"
    this.griddata = await this.fetcher(url);
  },
  template:
    `
  <div>
    <h3>Data Table</h3>
    <br /> <br />

    <h5>Table 1</h5>
    <datatable v-if="griddata != null" :columns='columns' :griddata="griddata"/>
  </div>
`,
};
