import { Select2View } from "./select2View.js";
import { ListboxView } from "./listboxView.js";
import { ProgressView } from "./progressView.js";

export const VueStepperView = {
  components: {
    Select2View,
    ListboxView,
    ProgressView,
  },
  data() {
    return {
      steps: 3,
      step: undefined,
    }
  },
  methods: {

  },
  template:
    `
		<div>
      <h3>VueStepper</h3> <br />
      <ul>
        <li>
          <a href="https://adi518.github.io/vue-stepper" target="_blank">Docs</a>
        </li>
      </ul>
      <br />

      <v-stepper ref="stepper" :steps="steps" v-model="step"></v-stepper>
      <br /> <br />

      <!-- Stepper Controls -->
      <button type="button" class="btn btn-secondary" @click="$refs.stepper.previous()">Previous</button>
      <button type="button" class="btn btn-secondary" @click="$refs.stepper.next()">Next</button>
      <button type="button" class="btn btn-secondary" @click="$refs.stepper.reset()">Reset</button>

      <template v-if="step === 1">
        <div class="pt-5">
          <select2-view />
        </div>
      </template>
      <template v-if="step === 2">
        <div class="pt-5">
          <listbox-view />
        </div>
      </template>
      <template v-if="step === 3">
        <div class="pt-5">
          <progress-view />
        </div>
      </template>

      <!-- Stepper Controls -->
      <button type="button" class="btn btn-secondary" @click="$refs.stepper.previous()">Previous</button>
      <button type="button" class="btn btn-secondary" @click="$refs.stepper.next()">Next</button>
      <button type="button" class="btn btn-secondary" @click="$refs.stepper.reset()">Reset</button>
    </div>
  `,
};
