const TabsView = {
	props: ['content-class'],
	data() {
		return {
			message: "",
		};
	},
	template: `
		<div>
			<h3>Tabs</h3>
			<fv-tabs/>
		</div>
  `,
};