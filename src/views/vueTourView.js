export const VueTourView = {
  data() {
    return {
      steps: [
        {
          target: '#v-step-0',  // We're using document.querySelector() under the hood
          header: {
            title: 'Get Started: Default',
          },
          content: `Discover <strong>Vue Tour</strong>!`
        },
        {
          target: '.v-step-1',
          content: 'An awesome plugin made with Vue.js!'
        },
        {
          target: '[data-v-step="2"]',
          content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
          params: {
            placement: 'top' // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
          }
        }
      ],
      // callbacks: {
      //   onStart: this.tourStart,
      //   onPreviousStep: this.tourPrev,
      //   onNextStep: this.tourNext,
      //   onSkip: this.tourEnd,
      //   onFinish: this.tourFinish
      // }
    };
  },
  mounted() {

  },
  methods: {
    tourStart() {
      console.log(this.name, "tourStart: OUTSIDE");
    },
    tourPrev(currentStep) {
      console.log(currentStep);
    },
    tourNext(currentStep) {
      console.log(currentStep);
    },
    tourFinish() {
      console.log(this.name, "tourFinish");
      // let tourData = localStorage.getItem("tours");
      // if (this.name !== null) {
      //   localStorage.setItem("tours", tourData + "," + this.name);
      // }
    },
  },
  template:
    `
		<div>
			<h3>VueTour</h3>
      <br />
      <div id="v-step-0">A DOM element on your page. The first step will pop on this element because its ID is 'v-step-0'.</div>
      <div class="v-step-1">A DOM element on your page. The second step will pop on this element because its ID is 'v-step-1'.</div>
      <div data-v-step="2">A DOM element on your page. The third and final step will pop on this element because its ID is 'v-step-2'.</div>
      <br />
      <br />
      <br />

      <fv-tour name="fv-container" :steps="steps" />
  `,
};
