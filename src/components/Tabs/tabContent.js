export const FvTabContent = {
  props: ['className', 'tabid', 'id'],
  template:
    `
  <div :id="tabid" class="tab-content">
    <div :class="['tab-pane fade show', className]" :id="id" role="tabpanel">
      <slot/>
    </div>
  </div>
  `
};
