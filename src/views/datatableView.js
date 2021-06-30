export const DataTableView = {
  data: function () {
    return {
      columns: [
        { "data": "userId", "title": "User ID" },
        { "data": "id", "title": "ID" },
        { "data": "title", "title": "Title" },
        { "data": "completed", "title": "Completed" },
      ],
      griddata: [],
    }
  },
  mounted: function () {

  },
  template:
    `
  <div>
    <h3>Data Table</h3>
    <br />
    <datatable id="demoTable" :columns='$data.columns' url="https://jsonplaceholder.typicode.com/todos"/>
  </div>
`,
};
