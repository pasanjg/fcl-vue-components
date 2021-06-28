import { EventBus } from "../../components/Tags/tag.js";

export const FvChip = {
  props: ['chipid', 'tagid', 'contentclass', 'value'],
  data: function () {
    return {

    }
  },
  mounted() {
    this.removeValue();
  },
  methods: {
    removeValue() {
      const vm = this;
      const removeBtn = document.getElementById(`${vm.chipid}Close`);

      if (removeBtn != null) {
        removeBtn.addEventListener('click', function () {
          EventBus.$emit(`${vm.tagid}RemoveChip`, vm.value);
        });
      }
    },
  },
  template:
    `
    <span :id="chipid" v-if="value" :class="['badge badge-secondary p-2 mb-1 mr-1', contentclass]">
      {{ value }}
      <i :id="chipid+'Close'"class="fas fa-times-circle btn-link text-decoration-none text-white"></i>
    </span>
  `
};
