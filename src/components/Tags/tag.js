export const FvTag = {
  props: ['tagid', 'contentclass', 'placeholder', 'values', 'chipclass'],
  data: function () {
    return {
      placeholder: this.placeholder ?? 'Type and hit enter',
      values: this.values ?? [''],
    }
  },
  mounted() {

  },
  template:
    `
    <div :id="tagid" :class="['border rounded d-flex-inline flex-wrap align-items-center p-2', contentclass]">
      <fv-chip v-for="(value, i) in $data.values" :key="i" :chipid="value+i" :contentclass="[chipclass]" :value="value" />
      <div class="input-group">
        <div class="input-group-prepend">
          <!-- <span class="input-group-text" id="basic-addon1">+</span> -->
        </div>
        <input type="search" class="form-control shadow-none rounded px-2" :placeholder="$data.placeholder">
      </div>
    </div>
  `
};
