import { routes } from './src/routes.js';
import { Sidebar } from './src/views/sidebar.js';
import { DataTableDraft } from "./src/components/DataTable/datatable.js";

import { providers } from './src/providers/providers.js';

// Register global components
Vue.component("Sidebar", Sidebar);

// Vue.use(window.vuelidate.default);
Vue.component('v-runtime-template', window.VRuntimeTemplate);

// Draft components
Vue.component('datatable', DataTableDraft);
Vue.component(window.vuedraggable.name, window.vuedraggable);


const router = new VueRouter({
  routes: routes,
  mode: "history",
  base: "/",
});

new Vue({
  el: '#root',
  router: router,
  provide() {
    return providers
  },
});
