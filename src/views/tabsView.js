const TabsView = {
  props: ['content-class'],
  data() {
    return {
      message: "",
    };
  },
  template: `
		<div>
			<h3>Tabs</h3>
      <br />
      
      <!-- Tab 1 -->
			<fv-tabs tabId="demoTab">
				<fv-tab contentId="home" contentclass="active">
          Home
        </fv-tab>
				<fv-tab contentId="profile">
          Profile
        </fv-tab>
				<fv-tab contentId="contact">
          Contact
        </fv-tab>
			</fv-tabs>

      <!-- Content for Tab 1 -->
      <fv-tab-content tabId="demoTab" contentId="home" contentclass="active">
        This is Home content
      </fv-tab-content>

      <fv-tab-content tabId="demoTab" contentId="profile">
        This is Profile content
      </fv-tab-content>

      <fv-tab-content tabId="demoTab" contentId="contact">
        This is Contact content
      </fv-tab-content>

      <br />
      <br />
      <br />

      <h6>To set default active, add <code>contentclass="active"</code> for both <code>fv-tab</code> and <code>fv-tab-content</code> tags</h6>
      <br />

      <!-- Tab 2 -->
      <fv-tabs tabId="techTab">
				<fv-tab contentId="facebook">
          Facebook
        </fv-tab>
				<fv-tab contentId="apple" contentclass="active">
          Apple
        </fv-tab>
				<fv-tab contentId="amazon">
          Amazon
        </fv-tab>
        <fv-tab contentId="netflix">
          Netflix
        </fv-tab>

        <fv-tab contentId="google">
          Google
        </fv-tab>
			</fv-tabs>

      <!-- Content for Tab 2 -->
      <fv-tab-content tabId="techTab" contentId="facebook">
        <img height="180" src="https://www.datocms-assets.com/14946/1620837800-facebook-logo.jpg?auto=format&dpr=0.2&w=3840" alt="" /> <br />
        <a href="https://facebook.com" target="blank">Facebook</a>
      </fv-tab-content>

      <fv-tab-content tabId="techTab" contentId="apple" contentclass="active">
        <img height="180" src="https://coseacasotech.files.wordpress.com/2019/05/apple-logo-1.png" alt="" /> <br />
        <a href="https://apple.com" target="blank">Apple</a>
      </fv-tab-content>

      <fv-tab-content tabId="techTab" contentId="amazon">
        <img height="180" src="https://beechholdings.co.uk/wp-content/uploads/2020/01/amazon-logo-png-transparent-5.png" alt="" /> <br />
        <a href="https://amazon.com" target="blank">Amazon</a>
      </fv-tab-content>

      <fv-tab-content tabId="techTab" contentId="netflix">
        <img height="180" src="https://www.abacustechnologies.com/wp-content/uploads/2020/05/580b57fcd9996e24bc43c529.png" alt="" /> <br />
        <a href="https://netflix.com" target="blank">Netflix</a>
      </fv-tab-content>

      <fv-tab-content tabId="techTab" contentId="google">
        <img height="180" src="https://www.semic.es/sites/default/files/google-logo.png" alt="" /> <br />
        <a href="https://google.com" target="blank">Google</a>
      </fv-tab-content>

		</div>
  `,
};