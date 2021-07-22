export const FvRating = {
  props: ['className', 'count', 'id', 'value', 'editable', 'size', 'updateEventName'],
  data: function () {
    return {
      count: this.count ?? 5,
      value: this.value ?? 0,
      starActive: 'rate-star fas fa-star',
      starInactive: 'rate-star far fa-star',
      editable: this.editable ?? false,
      size: this.size ?? '16px',
    }
  },
  mounted: function () {
    this.createStars();
    const stars = [...document.querySelectorAll(`#${this.id}>.rate-star`)];

    if (stars.length !== parseInt(this.$data.count)) { alert('Count out of bound'); return; }
    if (this.value > 0) this.initialRating(stars);
    if (this.editable === "true") this.updateRating(stars);
  },
  methods: {
    createStars: function () {
      let vm = this;
      let parent = document.getElementById(this.id);
      for (let i = 0; i < vm.$data.count; i++) {
        var star = document.createElement("I");
        star.setAttribute("class", vm.$data.starInactive);
        star.style.fontSize = vm.$data.size;
        parent.appendChild(star);
      }
    },
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

          EventBus.$emit(vm.updateEventName, rating + 1);
        });
      }
    }
  },
  template:
    `
  <div :id="id" :class="[className]">
  </div>
  `
};
