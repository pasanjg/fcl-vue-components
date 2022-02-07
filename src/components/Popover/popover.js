export const FvPopover = {
  props: ['className'],
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button @click="count++">You clicked Popover {{ count }} times.</button>'
};
