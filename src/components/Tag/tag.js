export const FvTag = {
  props: ['id', 'className', 'placeholder', 'values', 'themeClass', 'chipClass', 'btnClass', 'allowSpaces', 'limit'],
  data: function () {
    return {
      placeholder: this.placeholder,
      values: this.values ?? [],
      limit: this.limit,
    }
  },
  mounted() {
    this.initPlaceholder();
    this.inputTrigger();
    EventBus.$on(`${this.id}RemoveChip`, this.removeChip);
  },
  methods: {
    initPlaceholder() {
      const vm = this;
      if (vm.allowSpaces != 'true' && vm.placeholder == null) {
        vm.$data.placeholder = 'Type and hit enter/space';
      } else if (vm.allowSpaces === 'true' && vm.placeholder == null) {
        vm.$data.placeholder = 'Type and hit enter';
      }

      if (vm.limit > 0 && vm.placeholder == null) {
        vm.$data.placeholder += ` (max. ${vm.$data.limit})`;
      }
    },
    inputTrigger() {
      const vm = this;
      const input = document.getElementById(`${vm.id}Input`);

      input.addEventListener("keyup", function (event) {

        if (vm.allowSpaces === 'true') {
          if (event.key === 'Enter') {
            event.preventDefault();
            vm.addInput();
          }
        } else {
          // Trigger by Enter or Space
          if (event.key === 'Enter' || event.keyCode === 32) {
            event.preventDefault();
            vm.addInput();
          }
        }
      });
    },
    addInput() {
      const vm = this;
      const input = document.getElementById(`${vm.id}Input`);
      const inputValue = input.value;
      const limit = vm.limit;
      const values = vm.$data.values;

      if (limit > 0 && values.length >= limit) {
        return;
      }

      if (vm.allowSpaces != 'true' && inputValue.trim().includes(' ')) {
        return;
      }

      if (inputValue != "" && vm.$data.values.indexOf(inputValue.trim()) == -1) {
        vm.$data.values.push(inputValue.trim());
        input.value = "";
      } else {
        input.value = "";
      }
    },
    removeChip(removeElement) {
      const vm = this;
      const index = vm.$data.values.indexOf(removeElement);

      if (index > -1) {
        vm.$data.values.splice(index, 1);
      }
    }
  },
  beforeDestroy() {
    EventBus.$off();
  },
  template:
    `
    <div :id="id" :class="['border rounded d-flex-inline flex-wrap align-items-center p-2', className]">
      <fv-chip v-for="(value, i) in $data.values" :key="i" :id="id+value" :tag-id="id" :className="[themeClass, chipClass]" :value="value" />
      <div class="input-group mt-1">
        <input :id="id+'Input'" type="search" class="form-control shadow-none rounded px-2" :placeholder="$data.placeholder">
        <div class="input-group-append">
          <button :class="['btn btn-primary shadow-none', themeClass, btnClass]" @click="addInput()" type="button">Add</button>
        </div>
      </div>
    </div>
  `
};
