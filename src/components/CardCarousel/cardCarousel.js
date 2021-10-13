export const FvCardCarousel = {
  props: {
    length: {
      type: Number,
      default: 0,
    },
    currentOffset: {
      type: Number,
      default: 0,
    },
    windowSize: {
      type: Number,
      default: 3,
    },
    paginationFactor: {
      type: Number,
      default: 320,
    },
  },
  computed: {
    atEndOfList() {
      return this.currentOffset <= (this.paginationFactor * -1) * (this.length - this.windowSize);
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
    containerWidth() {
      const fvContainer = document.getElementById('fv-card-carousel');
      return fvContainer.offsetWidth;
    },
  },
  methods: {
    moveCarousel(direction) {
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
    dragCarousel(direction) {
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
  },
  template:
    `
  <div id="fv-card-carousel" class="fv-card-carousel">
    <div class="nav-left" @click="moveCarousel(-1)" :disabled="atHeadOfList">
      <i class="fas fa-chevron-left"></i>
    </div>
    <div class="card-carousel">
      <div class="overflow-container">
        <div class="carousel-container" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
          <slot></slot>
        </div>
      </div>
    </div>
    <div class="nav-right" @click="moveCarousel(1)" :disabled="atEndOfList">
      <i class="fas fa-chevron-right"></i>
    </div>
  </div>
  `
};
