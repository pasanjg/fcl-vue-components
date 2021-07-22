export const TagsView = {
  template:
    `
		<div>
			<h3>Tag Input</h3>
      <br />

      <h6>Input with existing values <code>values="['BMW', 'Audi', ...]"</code></h6>
			<fv-tag id="demoTag1" :values="['BMW', 'Audi', 'Tesla', 'Volvo', 'Lexus']" />
      <br /> <br />

      <h6>Allow spaces <code>allow-spaces="true"</code></h6>
      <fv-tag id="demoTag2" allow-spaces="true" />
      <br /> <br />

      <h6>Limit inputs <code>limit="5"</code></h6>
      <fv-tag id="demoTag3" limit="5" />
      <br /> <br />

      <h6>Change theme color <code>theme-class="bg-info" btn-class="btn-info"</code></h6>
      <fv-tag id="demoTag4" theme-class="bg-info" btn-class="btn-info" />
		</div>
  `,
};
