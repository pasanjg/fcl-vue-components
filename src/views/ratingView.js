export const RatingView = {
  data() {
    return {

    };
  },
  mounted: function () {
    EventBus.$on('get-updated-rating', this.getUpdatedRating);
  },
  methods: {
    getUpdatedRating(rating) {
      console.debug(rating);
    }
  },
  template:
    `
  <div>
    <h3>Rating</h3>
    <br />

    <h6>Fixed value <code>value="3"</code></h6>
    <fv-rating id="demoRating" class-name="d-inline" value="3" /> <br />
    <br />

    <h6>Editable <code>editable="true"</code></h6>
    <fv-rating id="demoRating3" class-name="d-inline" editable="true" update-event-name="get-updated-rating" /> <br />
    <br />

    <h6>Custom star count <code>count="3"</code></h6>
    <fv-rating id="demoRating5" count="3" class-name="d-inline"/> <br />
    <br />

    <h6>Custom star size <code>size="20px"</code></h6>
    <fv-rating id="demoRating7" class-name="d-inline"/> <span>16px (default)</span> <br />
    <fv-rating id="demoRating8" size="20px" class-name="d-inline"/> <span>20px</span> <br />
  </div>
  `,
};
