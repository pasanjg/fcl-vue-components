const ProgressView = {
	props: ['content-class'],
	data() {
		return {
			message: "",
		};
	},
	template: `
		<div>
			<h3>Progress</h3>
			<fv-progress/>
		</div>
  `,
};