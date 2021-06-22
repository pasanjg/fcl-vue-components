export const FvProgress =  {
  props: ['contentclass', 'value', 'showvalue', 'height'],
  data: function () {
    return {
      count: 0,
    }
  },
  template:
    `
  <div class="progress" v-bind:style="{ height: height}">
    <div v-bind:class="['progress-bar', contentclass]" role="progressbar" v-bind:style="{ width: value + '%', height: height}">
      <span v-if="showvalue === 'true'">{{ value }}%</span>
    </div>
  </div>
  `
};
