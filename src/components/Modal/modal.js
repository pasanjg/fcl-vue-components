Vue.component('fv-modal', {
  props: ['content-class'],
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked Modal {{ count }} times.</button>'
});