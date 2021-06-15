Vue.component('fv-rating', {
  props: ['contentclass', 'rateId', 'value', 'canupdate'],
  data: function () {
    return {
      starActive: 'rate-star fas fa-star',
      starInactive: 'rate-star far fa-star',
      canUpdate: this.canupdate ?? false,
    }
  },
  mounted: function () {
    console.log(this.value, this.canUpdate);
    const stars = [...document.querySelectorAll(`#${this.rateId}>.rate-star`)];
    if (this.value > 0) this.initialRating(stars);
    if (this.canUpdate === "true") this.updateRating(stars);
  },
  methods: {
    initialRating: function (stars) {
      let vm = this;
      let i = vm.value - 1;
      for (i; i >= 0; --i) stars[i].className = vm.$data.starActive;
    },
    updateRating: function (stars) {
      let vm = this;
      const starsLength = stars.length;

      for (let index = 0; index < stars.length; index++) {
        let star = stars[index];

        star.addEventListener("click", function () {
          let i = stars.indexOf(star);
          let rating = i;

          if (star.className === vm.$data.starInactive) {
            for (i; i >= 0; --i) stars[i].className = vm.$data.starActive;
          } else {
            for (i; i < starsLength; ++i) stars[i].className = vm.$data.starInactive;
            rating--;
          }

          vm.$emit(vm.rateId, rating + 1);
        });
      }
    }
  },
  template: `
  <div v-bind:id="rateId" v-bind:class="[contentclass]">
    <i class="rate-star far fa-star"></i>
    <i class="rate-star far fa-star"></i>
    <i class="rate-star far fa-star"></i>
    <i class="rate-star far fa-star"></i>
    <i class="rate-star far fa-star"></i>
  </div>
  `
});