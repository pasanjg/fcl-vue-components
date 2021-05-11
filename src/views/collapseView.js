const CollapseView = {
	props: ['class'],
	template: `
      <div>
				<h3>Collapse</h3>
				<Collapse/>
			</div>
  `,
	data() {
		return {
			message: "",
		};
	},
};