export const ProgressView = {
  props: ['contentclass'],
  template:
    `
		<div>
			<h3>Progress</h3>
      <br />

      <h6>Primary <code>contentclass="bg-primary" value="47"</code></h6>
			<fv-progress contentclass="bg-primary" value="47" height="20px"/>
      <br />

      <h6>Secondary: Show value <code>showvalue="true" value="67"</code></h6>
			<fv-progress contentclass="bg-secondary" value="67" showvalue="true" height="20px"/>
      <br />

      <h6>Success <code></code></h6>
			<fv-progress contentclass="bg-success" value="90" height="20px"/>
      <br />

      <h6>Danger: Custom height <code>height="10px"</code></h6>
			<fv-progress contentclass="bg-danger" value="12" height="10px"/>
      <br />

      <h6>Warning <code>contentclass="bg-warning text-dark"</code></h6>
			<fv-progress contentclass="bg-warning text-dark" value="35" showvalue="true" height="20px"/>
      <br />

      <h6>Info <code></code></h6>
			<fv-progress contentclass="bg-info" value="73" height="20px"/>
		</div>
  `,
};
