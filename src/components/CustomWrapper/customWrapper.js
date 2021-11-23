export const FvCustomWrapper = {
  // model: {
  //   prop: 'value',
  //   event: 'onSave'
  // },
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
  computed: {
    hasonSaveListener() {
      return this.$listeners && this.$listeners.onSave
    },
  },
  watch: {
    selected(newValue) {
      const vm = this;
      // console.log("NEW", newValue);
      vm.$emit('onSave', newValue);
    },
  },
  template:
    `
    <fv-select2 id="demoSelect" :data-list="colors" data-display="displayName" data-value="value" v-model="selected" placeholder="Select color"/>
  `
};
