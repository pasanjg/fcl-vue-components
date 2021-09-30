import { FvDataCardRender } from "./dataCardRender.js";

export const FvDataCards = {
  components: {
    FvDataCardRender,
  },
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
  data() {
    return {
      index: 0,
    };
  },
  template:
    `
    <fv-data-card-render :dataList="dataList" :data-template="dataTemplate" />
  `
};
