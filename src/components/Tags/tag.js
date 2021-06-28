export const EventBus = new Vue();

export const FvTag = {
  props: ['tagid', 'contentclass', 'placeholder', 'values', 'themeclass', 'chipclass', 'btnclass'],
  data: function () {
    return {
      placeholder: this.placeholder ?? 'Type and hit enter',
      values: this.values ?? [''],
    }
  },
  mounted() {
    this.inputTrigger();
    EventBus.$on(`${this.tagid}RemoveChip`, this.removeChip);
  },
  methods: {
    inputTrigger() {
      const vm = this;
      const input = document.getElementById(`${vm.tagid}Input`);

      input.addEventListener("keyup", function (event) {
        if (event.key === 'Enter') {
          event.preventDefault();
          vm.addInput();
        }
      });
    },
    addInput() {
      const vm = this;
      const input = document.getElementById(`${vm.tagid}Input`);

      if (input.value != "" && vm.$data.values.indexOf(input.value) == -1) {
        vm.$data.values.push(input.value);
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
    <div :id="tagid" :class="['border rounded d-flex-inline flex-wrap align-items-center p-2', contentclass]">
      <fv-chip v-for="(value, i) in $data.values" :key="i" :chipid="tagid+value" :tagid="tagid" :contentclass="[themeclass, chipclass]" :value="value" />
      <div class="input-group mt-1">
        <input :id="tagid+'Input'" type="search" class="form-control shadow-none rounded px-2" :placeholder="$data.placeholder">
        <div class="input-group-append">
          <button :class="['btn btn-primary shadow-none', themeclass, btnclass]" @click="addInput()" type="button">Add</button>
        </div>
      </div>
    </div>
  `
};
