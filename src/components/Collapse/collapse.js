export const FvCollapse = {
  props: ['contentclass', 'collapseId'],
  mounted: function () {
    this.initListener();
  },
  methods: {
    initListener: function () {
      const vm = this;
      const triggers = [...document.querySelectorAll(`[data-target="#${vm.collapseId}"][data-toggle="collapse"], [data-target=".collapse"][data-toggle="collapse"]`)];

      triggers.forEach(trigger => {
        trigger.addEventListener('click', (ev) => {
          const elm = ev.target;
          if (triggers.includes(elm)) {
            const selector = elm.getAttribute('data-target');
            vm.collapse(selector, 'show');
          }
        });
      });
    },
    collapse: function (selector, dclass) {
      const targets = [...document.querySelectorAll(selector)];
      targets.forEach(target => {

        if (selector.includes('.')) {
          if (target.className.includes('show')) {
            target.classList['remove'](dclass);
          } else {
            target.classList['add'](dclass);
          }
        } else {
          target.classList['toggle'](dclass);
        }
      });
    },
  },
  template:
    `
    <div v-bind:id="collapseId" v-bind:class="['collapse', contentclass]">
      <slot/>
    </div>
  `
};
