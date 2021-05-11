const Index = {
  template: `
      <div>
        <h1>Hello World!</h1>
        <router-link class="nav-link" to="/test">
          Test
        </router-link>
      </div>
  `,
  data() {
    return {
      indexMessage: "Index page loaded",
    };
  },
};
