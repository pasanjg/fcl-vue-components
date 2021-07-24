export const FvFeedback = {
  props: {
    className: String,
    id: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#FFB703',
    },
    value: {
      type: Number,
      default: 0,
    },
    editable: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '30px',
    },
    onChange: {
      type: String,
      default: 'onChange',
    },
  },
  data: function () {
    return {
      count: 5,
      value: this.value ?? 0,
      active: 'fas',
      feedbackStatuses: [
        {
          title: 'Very Poor',
          emoji: 'fa-angry',
        },
        {
          title: 'Poor',
          emoji: 'fa-frown-open',
        },
        {
          title: 'Average',
          emoji: 'fa-meh',
        },
        {
          title: 'Good',
          emoji: 'fa-smile-beam',
        },
        {
          title: 'Excellent',
          emoji: 'fa-laugh-beam',
        },
      ],
    }
  },
  mounted: function () {
    const stars = [...document.querySelectorAll(`#${this.id}>.feedback-container>.fv-feedback-item`)];
    this.initializeStars(stars);

    if (this.value > 0 && this.value <= stars.length) this.initialFeedback(stars);
    if (this.editable === "true") this.updateFeedback(stars);
  },
  methods: {
    initializeStars: function (stars) {
      let vm = this;

      for (let star of stars) {
        star.style.fontSize = vm.size;
        star.style.color = vm.color;
      }
    },
    initialFeedback: function (stars) {
      let vm = this;
      let i = vm.value - 1;

      stars[i].classList.add('fas');
    },
    updateFeedback: function (stars) {
      let vm = this;
      const starsLength = stars.length;

      for (let index = 0; index < starsLength; index++) {
        let star = stars[index];

        if (star.classList.contains(vm.active)) star.classList.remove(vm.active);

        star.addEventListener("click", function () {
          let i = stars.indexOf(star);
          let feedbackVal = i;

          for (let index = 0; index < starsLength; index++) {
            let star = stars[index];

            if (star.classList.contains(vm.active)) star.classList.remove(vm.active);
          }

          star.classList.toggle(vm.active);
          EventBus.$emit(vm.onChange, feedbackVal + 1);
        });
      }
    }
  },
  template:
    `
  <div :id="id" :class="['d-flex', className]">
    <div v-for="feedback in feedbackStatuses" :key="feedback.title" class="feedback-container d-flex flex-column align-items-center">
      <i :class="'mb-2 fv-feedback-item far ' + feedback.emoji"></i>
      <span class="feedback-title small">{{ feedback.title }}</span>
    </div>
  </div>
  `
};
