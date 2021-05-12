Vue.component('fv-collapse', {
  props: ['content-class'],
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked Collapse {{ count }} times.</button>'
});