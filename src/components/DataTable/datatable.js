////Data table wrapper Vue component
export const DataTableDraft = {
  props: {
    id: '',
    footer: { default: false },
    columns: { type: Array },
    url: { default: '' },
    options: {},
    griddata: { type: Array },
  },
  data: function () {
    return {

    }
  },
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
  mounted: function () {
    this.createDatatable();
  },
  methods: {
    title: function (column) {
      return column.title || column.data;
    },
    createDatatable: function () {
      const vm = this;

      vm.dataTable = window.$(vm.$el).DataTable({
        data: vm.griddata,
        columns: vm.getColumns,
      });
    },
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
