const TagsView = {
	props: ['content-class'],
	data() {
		return {
			message: "",
		};
	},
	template: `
		<div>
			<h3>Tags</h3>
      <br />
			<fv-tags/>
		</div>
  `,
};