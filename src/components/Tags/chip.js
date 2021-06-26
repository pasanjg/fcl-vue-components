export const FvChip = {
  props: ['chipid', 'contentclass', 'value'],
  data: function () {
    return {

    }
  },
  mounted() {

  },
  template:
    `
    <span :id="chipid" v-if="value" :class="['badge badge badge-secondary p-2 mb-1 mr-1', contentclass]">
      {{ value }}
      <i :id="chipid+'Close'"class="fas fa-times-circle" role="button"></i>
    </span>
  `
};
