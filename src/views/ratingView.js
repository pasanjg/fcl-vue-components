const RatingView = {
  props: ['contentclass'],
  data() {
    return {
      message: "",
      updatedRating3: undefined,
      updatedRating4: undefined,
    };
  },
  methods: {
    updateRating3(updatedValue) {
      this.updatedRating3 = updatedValue;
    },
    updateRating4(updatedValue) {
      this.updatedRating4 = updatedValue;
    },
  },
  template: `
		<div>
			<h3>Rating</h3>
      <h5>Fixed value (3, 2)</h5>
			<fv-rating rateId="demoRating" value="3"/>
			<fv-rating rateId="demoRating2" value="2"/>
      <br />

      <h5>Editable</h5>
			<fv-rating rateId="demoRating3" contentclass="d-inline" v-on:demoRating3="updateRating3" canupdate="true" /> <span>{{ updatedRating3 }}</span> <br />
			<fv-rating rateId="demoRating4" contentclass="d-inline" v-on:demoRating4="updateRating4" canupdate="true" /> <span>{{ updatedRating4 }}</span> <br />
		</div>
  `,
};