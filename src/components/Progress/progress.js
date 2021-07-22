export const FvProgress =  {
  props: ['className', 'value', 'showvalue', 'height'],
  template:
    `
  <div class="progress" :style="{ height: height}">
    <div :class="['progress-bar', className]" role="progressbar" :style="{ width: value + '%', height: height}">
      <span v-if="showvalue === 'true'">{{ value }}%</span>
    </div>
  </div>
  `
};
