export const vueTourWrapper = {
  props: {
    steps: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Object
    },
  },
  data() {
    return {
      callbacks: {
        onStart: this.tourStart,
        onPreviousStep: this.tourPrev,
        onNextStep: this.tourNext,
        onSkip: this.tourSkip,
        onFinish: this.tourFinish,
      }
    };
  },
  mounted() {
    console.log(this.name, "vueTourWrapper mounted");
    this.initTour();
  },
  methods: {
    initTour() {
      let tourData = localStorage.getItem("tours");
      if (tourData) {
        console.log(tourData);
        if (tourData.split(",").findIndex((e) => e == this.name) > -1)
          //this tour name saved in cookie == it's done, quit
          console.log('Tour is done');
        return;
      }

      this.$tours[this.name].start();
    },
    tourStart() {
      console.log(this.name, "tourStart");
    },
    tourPrev(currentStep) {
      console.log(currentStep);
    },
    tourNext(currentStep) {
      console.log(currentStep);
    },
    tourSkip() {
      console.log(this.name, "tourSkip");
    },
    tourFinish() {
      console.log(this.name, "tourFinish");
      let tourData = localStorage.getItem("tours");
      if (this.name !== null) {
        localStorage.setItem("tours", tourData + "," + this.name);
      }
    },
  },
  template:
    `<div>
      <h3>VueTour Wrapper</h3>
      <v-tour :name="name" :steps=steps :callbacks="callbacks"></v-tour>
    </div>` ,
};
