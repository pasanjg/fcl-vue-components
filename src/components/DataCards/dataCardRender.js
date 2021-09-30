export const FvDataCardRender = {
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
    dataTemplate: {
      type: String,
      default: '<p>This is your templateXX</p>',
    },
  },
  template:
    `
    <v-runtime-template :template="dataTemplate" />
  `
};
