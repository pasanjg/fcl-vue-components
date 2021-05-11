const Test = {
	props: ['class'],
	template: `
      <button class="{{class}}">dsdds</button>
  `,
	data() {
		return {
			testmessage: "",
		};
	},
};