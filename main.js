import { routes } from './src/routes.js';
import { Sidebar } from './src/views/sidebar.js';
import { DataTableDraft } from "./src/components/DataTable/datatable.js";
import { FvCustomWrapper } from "./src/components/CustomWrapper/customWrapper.js";

import { providers } from './src/providers/providers.js';

import enUs from './src/lang/enUS.json' assert { type: "json" };
import si from './src/lang/si.json' assert { type: "json" };

// Register global components
Vue.component("Sidebar", Sidebar);

// Vue.use(window.vuelidate.default);
Vue.component('v-runtime-template', window.VRuntimeTemplate);
Vue.component('v-stepper', window.VStepper);

// Draft components
Vue.component('datatable', DataTableDraft);
Vue.component(window.vuedraggable.name, window.vuedraggable);
Vue.component('add-to-calendar', window.AddToCalendar);
Vue.component('fv-custom-wrapper', FvCustomWrapper);

Vue.use(window.VueDndrop);
Vue.component(window.VueDndrop.Container.name, window.VueDndrop.Container);
Vue.component(window.VueDndrop.Draggable.name, window.VueDndrop.Draggable);

const messages = {
  'en-US': enUs,
  'si': si,
};

const i18n = new window.VueI18n({
  locale: 'en-US',
  messages,
});

const router = new VueRouter({
  routes: routes,
  mode: "history",
  base: "/",
});

new Vue({
  el: '#root',
  router,
  i18n,
  provide() {
    return providers;
  },
});
