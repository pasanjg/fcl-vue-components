export const RatingView = {
  data() {
    return {
      updatedRating: 3,
      updatedRating2: 2,
      updatedRating3: 0,
      updatedRating4: 0,
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
  template:
    `
  <div>
    <h3>Rating</h3>
    <br />

    <h6>Fixed value <code>value="3"</code></h6>
    <fv-rating rateid="demoRating" contentclass="d-inline" :value="updatedRating"/> <span>{{ updatedRating }}</span> <br />
    <fv-rating rateid="demoRating2" contentclass="d-inline" :value="updatedRating2"/> <span>{{ updatedRating2 }}</span> <br />
    <br />

    <h6>Editable <code>canupdate="true"</code></h6>
    <fv-rating rateid="demoRating3"  contentclass="d-inline" v-on:demoRating3="updateRating3" canupdate="true" /> <span>{{ updatedRating3 }}</span> <br />
    <fv-rating rateid="demoRating4" contentclass="d-inline" v-on:demoRating4="updateRating4" canupdate="true" /> <span>{{ updatedRating4 }}</span> <br />
    <br />

    <h6>Custom star count <code>count="3"</code></h6>
    <fv-rating rateid="demoRating5" count="3" contentclass="d-inline" :value="updatedRating"/> <span>{{ updatedRating }}</span> <br />
    <fv-rating rateid="demoRating6" count="6" contentclass="d-inline" :value="updatedRating2"/> <span>{{ updatedRating2 }}</span> <br />
    <br />

    <h6>Custom star size <code>size="20px"</code></h6>
    <fv-rating rateid="demoRating7" contentclass="d-inline" :value="updatedRating"/> <span>16px (default)</span> <br />
    <fv-rating rateid="demoRating8" size="20px" contentclass="d-inline" :value="updatedRating2"/> <span>20px</span> <br />
  </div>
  `,
};
