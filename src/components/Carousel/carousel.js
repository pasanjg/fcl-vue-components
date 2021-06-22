export const FvCarousel =  {
  props: ['content-class'],
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked Carousel {{ count }} times.</button>'
};
