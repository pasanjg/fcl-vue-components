export const FvCustomWrapper = {
  model: {
    prop: 'value',
    event: 'onSave'
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      content: this.value,
      colors: [
        { "value": "red", "displayName": "Red" },
        { "value": "green", "displayName": "Green" },
        { "value": "purple", "displayName": "Purple" },
        { "value": "orange", "displayName": "Orange" },
        { "value": "black", "displayName": "Black" },
        { "value": "violet", "displayName": "Violet" },
        { "value": "blue", "displayName": "Blue" },
      ],
      selected: {},
    }
  },
  methods: {
    handleSubmit(e) {
      this.$emit('onSave', this.selected);
    }
  },
  template:
    `
    <div>
      <fv-select2 id="demoSelect" :data-list="colors" data-display="displayName" data-value="value" v-model="selected" placeholder="Select color"/>
      <br /> <br />
      <button @click="handleSubmit">Submit</button>
    </div>
  `
};
