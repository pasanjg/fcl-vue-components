const PopoverView = {
	props: ['class'],
	template: `
      <div>
				<h3>Popover</h3>
				<Popover/>
			</div>
  `,
	data() {
		return {
			message: "",
		};
	},
};