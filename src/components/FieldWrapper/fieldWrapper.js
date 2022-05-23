export const FvFieldWrapper = {
  model: {
    prop: 'selected',
    event: 'onSelect'
  },
  props: {
    fields: {
      type: Array,
      required: true,
      default: () => [],
    },
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
    selected: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onChangeOption(e) {
      let selectedArr = [];
      for (let key in this.selected) {
        selectedArr.push(this.selected[key]);
      }

      const selectFields = document.querySelectorAll('.select-field');
      const remainingOptions = this.options.filter(option => !selectedArr.includes(option.value));
      remainingOptions.forEach(option => {
        console.log(option.id);
      });
      console.log('---------------');

      selectFields.forEach(selectField => {
        if (selectField.id !== e.target.id) {
          this.setOptions(selectField, e.target);
        }

        // if (e.target.value === '') {
        //   remainingOptions.forEach(option => {
        //     console.log(option);
        //   });
        //   return;
        // }
      });
    },
    setOptions(selectField, target) {

      selectField.querySelectorAll('option').forEach(option => {
        if (option.value === target.value) {
          option.remove();
        }

        if(option.value === '') {

        }
      });
    },
    emitToVModel(value) {
      this.$emit('onSelect', value);
    },
  },
  template:
    `
    <div>
      <span v-for="field in fields">
        <label :key="'label'+field.id">{{ field.name }}</label>
        <select :id="field.id" :key="'select'+field.id" class="select-field mr-3" v-model="selected[field.id]" @change="onChangeOption($event)">
          <option value="">Select</option>
          <option v-for="option in options" :value="option.value" :id="option.id">{{ option.label }}</option>
        </select>
      </span>
    </div>
  `
};
