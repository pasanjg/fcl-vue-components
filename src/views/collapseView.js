const CollapseView = {
	props: ['content-class'],
	data() {
		return {
			message: "",
		};
	},
	template: `
		<div>
			<h3>Collapse</h3>
			<fv-collapse/>
		</div>
  `,
};