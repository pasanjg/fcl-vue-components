
////Data table wrapper Vue component
export const DataTable = {
  props: {
    id: '',
    footer: { default: false },
    columns: { type: Array },
    url: { default: '' },
    options: {},
    griddata: { type: Array }
  },
  data: function () {
    return {

    }
  },
  // inject: ['fetcher'],
  computed: {
    getGridData: {
      get: function () {
        return this.griddata;
      }
    },
    getColumns: {
      get: function () {
        return this.columns;
      }
    }
  },
  created: function () {
  },
  mounted: async function () {
    console.log(this.id)
    var data = await this.fetchData();
    console.log(data)

    this.dataTable = window.$(this.$el).DataTable({
      data: data,
      columns: this.getColumns
    });
  },
  methods: {
    title: function (column) {
      return column.title || column.data;
    },
    fetchData: async function () {
      let result;
      await fetch(this.url)
        .then(response => response.json())
        .then(data => {
          result = data
        });
      return result;
    }
  },
  destroyed: function () {
    this.dataTable.destroy();
  },
  template:
    `
  <table :id="id">

  </table>
  `,
};
