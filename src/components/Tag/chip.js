export const FvChip = {
  props: ['id', 'tagId', 'className', 'value'],
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
      const removeBtn = document.getElementById(`${vm.id}Close`);

      if (removeBtn != null) {
        removeBtn.addEventListener('click', function () {
          EventBus.$emit(`${vm.tagId}RemoveChip`, vm.value);
        });
      }
    },
  },
  template:
    `
    <span :id="id" v-if="value" :class="['badge badge-secondary p-2 mb-1 mr-1', className]">
      {{ value }}
      <i :id="id+'Close'"class="fas fa-times-circle btn-link text-decoration-none text-white"></i>
    </span>
  `
};
