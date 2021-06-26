export const FvProgress =  {
  props: ['contentclass', 'value', 'showvalue', 'height'],
  template:
    `
  <div class="progress" :style="{ height: height}">
    <div :class="['progress-bar', contentclass]" role="progressbar" :style="{ width: value + '%', height: height}">
      <span v-if="showvalue === 'true'">{{ value }}%</span>
    </div>
  </div>
  `
};
