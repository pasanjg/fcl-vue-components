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
			<fv-tabs>
				<fv-tab title="Home">This is Home tab content</fv-tab>
				<fv-tab title="Profile">This is Profile tab content</fv-tab>
				<fv-tab title="Content">This is Contact tab content</fv-tab>
			</fv-tabs>
		</div>
  `,
};