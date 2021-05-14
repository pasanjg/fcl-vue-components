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
			<fv-progress contentclass="bg-danger" value="47" showvalue="true" height="20px"/>
		</div>
  `,
};