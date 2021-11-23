export const CustomWrapperView = {
  data: function() {
    return {
      selectedValue: null,
    };
  },
  methods: {
    getSavedItem(item) {
      console.debug('Saved', item);
    },
  },
  template:
    `
		<div>
			<h3>Custom Wrappper</h3>
      <br /> <br />
      {{ selectedValue }}
      <br /> <br />

			<fv-custom-wrapper v-model="selectedValue" @onSave="getSavedItem"/>
      <br /> <br />
      <button>Submit</button>
		</div>
  `,
};
