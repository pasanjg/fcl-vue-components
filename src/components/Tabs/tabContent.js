export const FvTabContent = {
  props: ['contentclass', 'tabid', 'contentid'],
  data: function () {
    return {
      messge: ""
    }
  },
  template:
    `
  <div v-bind:id="tabid" class="tab-content">
    <div v-bind:class="['tab-pane fade show', contentclass]" v-bind:id="contentid" role="tabpanel">
      <slot/>
    </div>
  </div>
  `
};
