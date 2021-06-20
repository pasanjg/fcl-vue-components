Vue.component('fv-tab-content', {
  props: ['contentclass', 'tabId', 'contentId'],
  data: function () {
    return {
      messge: ""
    }
  },
  template:
    `
  <div v-bind:id="tabId" class="tab-content">
    <div v-bind:class="['tab-pane fade show', contentclass]" v-bind:id="contentId" role="tabpanel">
      <slot/>
    </div>
  </div>
  `
});