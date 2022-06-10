export const TabsView = {
  template:
    `
		<div>
			<h3>Tabs</h3>
      <br />

      <h6>Basic usage</h6> <br />

      <textarea class="code-snippet" rows="27" readonly>
      &lt;!-- Tabs --&gt;
      &lt;fv-tabs tabid="demoTab" &gt;
        &lt;fv-tab id="home" class-name="active"&gt;
          Home
        &lt;/fv-tab&gt;

        &lt;fv-tab id="profile"&gt;
          Profile
        &lt;/fv-tab&gt;

        &lt;fv-tab id="contact"&gt;
          Contact
        &lt;/fv-tab&gt;
      &lt;/fv-tabs&gt;

      &lt;!-- Tab content --&gt;
      &lt;fv-tab-content tabid="demoTab" id="home" class-name="active"&gt;
        This is Home content
      &lt;/fv-tab-content&gt;

      &lt;fv-tab-content tabid="demoTab" id="profile"&gt;
        This is Profile content
      &lt;/fv-tab-content&gt;

      &lt;fv-tab-content tabid="demoTab" id="contact"&gt;
        This is Contact content
      &lt;/fv-tab-content&gt;</textarea> <br /> <br />

      <!-- Tab 1 -->
			<fv-tabs tabid="demoTab">
				<fv-tab id="home" class-name="active">
          Home
        </fv-tab>
				<fv-tab id="profile">
          Profile
        </fv-tab>
				<fv-tab id="contact">
          Contact
        </fv-tab>
			</fv-tabs>

      <!-- Content for Tab 1 -->
      <fv-tab-content tabid="demoTab" id="home" class-name="active">
        This is Home content
      </fv-tab-content>

      <fv-tab-content tabid="demoTab" id="profile">
        This is Profile content
      </fv-tab-content>

      <fv-tab-content tabid="demoTab" id="contact">
        This is Contact content
      </fv-tab-content>

      <br />
      <hr />
      <br />

      <h6>To use pills, add <code>pills="true"</code> for <code>fv-tabs</code> tags</h6><br />

      <textarea class="code-snippet" rows="3" readonly>
      &lt;fv-tabs tabid="demoTabPills" pills="true" &gt;
        ...
      &lt;/fv-tabs&gt;</textarea> <br /> <br />

      <!-- Tab 2 -->
			<fv-tabs tabid="demoTabPills" pills="true">
				<fv-tab id="homePill" class-name="active">
          Home
        </fv-tab>
				<fv-tab id="profilePill">
          Profile
        </fv-tab>
				<fv-tab id="contactPill">
          Contact
        </fv-tab>
			</fv-tabs>

      <!-- Content for Tab 2 -->
      <fv-tab-content tabid="demoTabPills" id="homePill" class-name="active">
        This is Home content
      </fv-tab-content>

      <fv-tab-content tabid="demoTabPills" id="profilePill">
        This is Profile content
      </fv-tab-content>

      <fv-tab-content tabid="demoTabPills" id="contactPill">
        This is Contact content
      </fv-tab-content>

      <br />
      <hr />
      <br />

      <h6>To set default active, add <code>class-name="active"</code> for both <code>fv-tab</code> and <code>fv-tab-content</code> tags</h6><br />

      <textarea class="code-snippet" rows="12" readonly>
      &lt;fv-tabs tabid="techTab" &gt;
        ...
        &lt;fv-tab id="home" class-name="active"&gt;
          Apple
        &lt;/fv-tab&gt;
        ...
      &lt;/fv-tabs&gt;

      &lt;fv-tab-content tabid="techTab" id="apple" class-name="active"&gt;
        ...
      &lt;/fv-tab-content&gt;
      ...</textarea> <br /> <br />

      <!-- Tab 3 -->
      <fv-tabs tabid="techTab">
				<fv-tab id="facebook">
          Facebook
        </fv-tab>
				<fv-tab id="apple" class-name="active">
          Apple
        </fv-tab>
				<fv-tab id="amazon">
          Amazon
        </fv-tab>
        <fv-tab id="netflix">
          Netflix
        </fv-tab>

        <fv-tab id="google">
          Google
        </fv-tab>
			</fv-tabs>

      <!-- Content for Tab 2 -->
      <fv-tab-content tabid="techTab" id="facebook">
        <img height="180" src="https://www.datocms-assets.com/14946/1620837800-facebook-logo.jpg?auto=format&dpr=0.2&w=3840" alt="" /> <br />
        <a href="https://facebook.com" target="blank">Facebook</a>
      </fv-tab-content>

      <fv-tab-content tabid="techTab" id="apple" class-name="active">
        <img height="180" src="https://coseacasotech.files.wordpress.com/2019/05/apple-logo-1.png" alt="" /> <br />
        <a href="https://apple.com" target="blank">Apple</a>
      </fv-tab-content>

      <fv-tab-content tabid="techTab" id="amazon">
        <img height="180" src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg" alt="" /> <br />
        <a href="https://amazon.com" target="blank">Amazon</a>
      </fv-tab-content>

      <fv-tab-content tabid="techTab" id="netflix">
        <img height="180" src="https://www.abacustechnologies.com/wp-content/uploads/2020/05/580b57fcd9996e24bc43c529.png" alt="" /> <br />
        <a href="https://netflix.com" target="blank">Netflix</a>
      </fv-tab-content>

      <fv-tab-content tabid="techTab" id="google">
        <img height="180" src="https://www.semic.es/sites/default/files/google-logo.png" alt="" /> <br />
        <a href="https://google.com" target="blank">Google</a>
      </fv-tab-content>

		</div>
  `,
};
