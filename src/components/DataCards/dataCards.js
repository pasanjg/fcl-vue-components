export const FvDataCards = {
  props: {
    id: {
      type: String,
    },
    className: {
      type: String,
      default: '',
    },
    col: {
      type: Number,
      default: 3,
      validator: function (value) {
        return [1, 2, 3, 4, 6, 12].indexOf(value) !== -1
      },
    },
    dataList: {
      type: Array,
      default: () => ['<p>Description</p>', 1960, 1970, 1980, 1990, 2000, 2010],
    },
    dataTemplate: {
      type: String,
      default: '<p>Add your template</p>',
    },
  },
  data: function () {
    return {
      title: 'Title',
      description: 'Description',
      year: 2021,
      isSelected: false,
    }
  },
  template:
    `
    <div>
      <div class="row">
        <div :class="['col-md-'+col, 'mb-3', className]" v-for="data in dataList">
          <slot/>
        </div>
      </div>
    </div>
  `
};
