export const CustomWrapperView = {
  data: function() {
    return {
      selectedValue: null,
    };
  },
  template:
    `
		<div>
			<h3>Custom Wrappper</h3>
      <br /> <br />
      {{ selectedValue }}
      <br /> <br />

			<fv-custom-wrapper v-model="selectedValue"/>
		</div>
  `,
};
