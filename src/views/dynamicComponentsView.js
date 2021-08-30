export const DynamicComponentsView = {
  data: function () {
    return {
      options: [''],
      htmlContent: `
        <font color="red" size="20">
          <marquee>Please enter your name to continue.</marquee>
          <fv-popover />
        </font>
        `,
    }
  },
  computed: {
    compiledTemplate() {
    	return Vue.compile(this.htmlContent)
    },
  },
  methods: {
    genRenderOutput() {

  		const { render, staticRenderFns } = this.compiledTemplate
      const _staticRenderFns = this.$options.staticRenderFns
      this.$options.staticRenderFns
      const output = render.call(this, this.$createElement)
      this.$options.staticRenderFns = _staticRenderFns

      return output
    }
  },
  template:
    `
		<div>
			<h3>Dynamic Components</h3>
      <br />

      <span>Yo</span>
      <span v-html="compiledTemplate._staticRenderFns"></span>

		</div>
  `,
};
