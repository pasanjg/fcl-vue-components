import { routes } from './src/routes.js';
import { Sidebar } from './src/views/sidebar.js';

Vue.component("Sidebar", Sidebar);

const router = new VueRouter({
  routes: routes,
  mode: "history",
  base: "/",
});

new Vue({
  router: router,
}).$mount('#root');
