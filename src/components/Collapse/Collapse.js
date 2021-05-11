Vue.component('Collapse', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked Collapse {{ count }} times.</button>'
});