export const FvDataCards = {
  props: ['className'],
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked DataCards {{ count }} times.</button>'
};
