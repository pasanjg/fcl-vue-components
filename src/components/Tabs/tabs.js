Vue.component('Tabs', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked Tabs {{ count }} times.</button>'
});