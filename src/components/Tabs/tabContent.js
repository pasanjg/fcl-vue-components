export const FvTabContent = {
  props: ['contentclass', 'tabid', 'id'],
  template:
    `
  <div :id="tabid" class="tab-content">
    <div :class="['tab-pane fade show', contentclass]" :id="id" role="tabpanel">
      <slot/>
    </div>
  </div>
  `
};
