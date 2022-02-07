export const FvCarousel =  {
  props: ['className'],
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button @click="count++">You clicked Carousel {{ count }} times.</button>'
};
