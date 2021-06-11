const RatingView = {
	props: ['contentclass'],
	data() {
		return {
			message: "",
		};
	},
	template: `
		<div>
			<h3>Rating</h3>
			<fv-rating/>
		</div>
  `,
};