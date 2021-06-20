Vue.component('fv-select2', {
  props: ['content-class'],
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked Select2 {{ count }} times.</button>'
});