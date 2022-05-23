export const FieldWrapperView = {
  data: function () {
    return {
      fields: [
        {
          id: "select1",
          name: "Field 1",
        },
        {
          id: "select2",
          name: "Field 2",
        },
        {
          id: "select3",
          name: "Field 3",
        },
        {
          id: "select4",
          name: "Field 4",
        },
      ],
      options: [
        {
          id: "option1",
          label: "Option 1",
          value: "option1",
        },
        {
          id: "option2",
          label: "Option 2",
          value: "option2",
        },
        {
          id: "option3",
          label: "Option 3",
          value: "option3",
        },
        {
          id: "option4",
          label: "Option 4",
          value: "option4",
        },
      ],
      selected: {
        select1: "",
        select2: "",
        select3: "",
        select4: "",
      },
    };
  },
  template:
    `
		<div>
			<h3>Field Wrapper</h3>
      <br /> <br />

      <fv-fieldwrapper :fields="fields" :options="options" v-model="selected" />

      <br /> <br />
      Selected: {{ selected }}
		</div>
  `,
};
