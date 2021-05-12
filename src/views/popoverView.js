const PopoverView = {
	props: ['content-class'],
	data() {
		return {
			message: "",
		};
	},
	template: `
		<div>
			<h3>Popover</h3>
			<fv-popover/>
		</div>
  `,
};