const ProgressView = {
	props: ['class'],
	template: `
      <div>
				<h3>Progress</h3>
				<Progress/>
			</div>
  `,
	data() {
		return {
			message: "",
		};
	},
};