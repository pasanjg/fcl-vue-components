const ModalView = {
	props: ['class'],
	template: `
      <div>
				<h3>Modal</h3>
				<Modal/>
			</div>
  `,
	data() {
		return {
			message: "",
		};
	},
};