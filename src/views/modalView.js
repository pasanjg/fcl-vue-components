const ModalView = {
	props: ['content-class'],
	data() {
		return {
			message: "",
		};
	},
	template: `
		<div>
			<h3>Modal</h3>
			<fv-modal/>
		</div>
  `,
};