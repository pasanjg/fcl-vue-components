export const TagsView = {
  template:
    `
		<div>
			<h3>Tag Input</h3>
      <br />

      <h6>Input with values <code>values="['BMW', 'Audi', ...]"</code></h6>
			<fv-tag tagid="demoTag1" :values="['BMW', 'Audi', 'Tesla', 'Volvo', 'Lexus']" />
      <br /> <br />

      <h6>Change theme color <code>themeclass="bg-info" btnclass="btn-info"</code></h6>
      <fv-tag tagid="demoTag2" themeclass="bg-info" btnclass="btn-info" />
		</div>
  `,
};
