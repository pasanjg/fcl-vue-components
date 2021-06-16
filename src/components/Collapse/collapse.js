Vue.component('fv-collapse', {
  props: ['contentclass', 'collapseId'],
  data: function () {
    return {
      count: 0,
    }
  },
  mounted() {
    const trigger = document.querySelector("[data-target='#" + this.collapseId + "']")
    const collapse = document.getElementById(this.collapseId);

    this.openCollapse(trigger, collapse);
  },
  methods: {
    openCollapse: function (trigger, collapse) {
      let vm = this;

      trigger.addEventListener('click', function () {
        collapse.classList.toggle('show');
      });
    }
  },
  template:
    `
  <div v-bind:id="collapseId" v-bind:class="['collapse collapsible', contentclass]">
    <slot/>
  </div>
  `
});