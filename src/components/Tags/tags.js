export const FvTags = {
  props: ['content-class'],
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked Tags {{ count }} times.</button>'
};
