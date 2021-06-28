export const TagsView = {
  template:
    `
		<div>
			<h3>Tag Input</h3>
      <br />

      <h6>Input with existing values <code>values="['BMW', 'Audi', ...]"</code></h6>
			<fv-tag tagid="demoTag1" :values="['BMW', 'Audi', 'Tesla', 'Volvo', 'Lexus']" />
      <br /> <br />

      <h6>Allow spaces <code>allowspaces="true"</code></h6>
      <fv-tag tagid="demoTag2" allowspaces="true" />
      <br /> <br />

      <h6>Limit inputs <code>limit="5"</code></h6>
      <fv-tag tagid="demoTag3" limit="5" />
      <br /> <br />

      <h6>Change theme color <code>themeclass="bg-info" btnclass="btn-info"</code></h6>
      <fv-tag tagid="demoTag4" themeclass="bg-info" btnclass="btn-info" />
		</div>
  `,
};
