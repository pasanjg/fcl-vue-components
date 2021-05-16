Vue.component('fv-tab', {
  props: ['content-class', 'title'],
  data: function () {
    return {
      count: 0
    }
  },
  template: `
  <div id="{{title}}" class="tab-pane fade show active">
    <slot class="tab-pane fade" id="{{title}}"></slot>
  </div>
  `
});