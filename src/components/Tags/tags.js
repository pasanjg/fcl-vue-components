Vue.component('Tags', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked Tags {{ count }} times.</button>'
});