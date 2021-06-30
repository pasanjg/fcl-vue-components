import { routes } from './src/routes.js';
import { Sidebar } from './src/views/sidebar.js';
import { DataTable } from "./src/components/DataTable/datatable.js";

Vue.component("Sidebar", Sidebar);

// Draft components
Vue.component('datatable', DataTable);

const router = new VueRouter({
  routes: routes,
  mode: "history",
  base: "/",
});

new Vue({
  router: router,
}).$mount('#root');
