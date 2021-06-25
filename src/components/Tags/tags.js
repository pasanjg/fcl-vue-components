export const FvTags = {
  props: ['contentclass'],
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked Tags {{ count }} times.</button>'
};
