const TagsView = {
	props: ['class'],
	template: `
      <div>
				<h3>Tags</h3>
				<Tags/>
			</div>
  `,
	data() {
		return {
			message: "",
		};
	},
};