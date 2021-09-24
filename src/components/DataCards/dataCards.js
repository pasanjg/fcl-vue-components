export const FvDataCards = {
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
    dataTemplate: {
      type: String,
      default: '<p>This is your template</p>',
    },
  },
  template:
    `
    <v-runtime-template :template="dataTemplate" />
  `
};
