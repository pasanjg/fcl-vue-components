export const DataTableView = {
  data: function () {
    return {
      columns: [
        { "data": "id", "title": "ID" },
        { "data": "name", "title": "Repo name" },
        { "data": "fork", "title": "Forked" },
        { "data": "created_at", "title": "Created Date" },
      ],
      columnDefs: [
        {
          targets: 3, render: function (data) {
            return moment(data).format('MMMM Do YYYY');
          }
        },
      ],
      griddata: null,
    }
  },
  inject: ['fetcher'],
  mounted: async function () {
    const url = "https://api.github.com/orgs/github/repos"
    this.griddata = await this.fetcher(url);
  },
  template:
    `
  <div>
    <h3>Data Table</h3>
    <br /> <br />

    <h5>github repos</h5> <br />
    <datatable v-if="griddata != null" :columns='columns' :columnDefs="columnDefs" :griddata="griddata"/>
  </div>
`,
};
