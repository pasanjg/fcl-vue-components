Vue.component('fv-progress', {
  props: ['content-class'],
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked Progress {{ count }} times.</button>'
});