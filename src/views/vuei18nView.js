export const Vuei18nView = {
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
  template:
    `
		<div>
			<h3>Vue i18n</h3>
      <br />
      <div class="mb-4">
        <select name="lang" v-model="$i18n.locale" @change="changeLanguage($i18n.locale)">
          <option value="en-US">en-US</option>
          <option value="si">si</option>
        </select>
      </div>
      <p>{{ $t("helloWorld") }}</p>
		</div>
  `,
};
