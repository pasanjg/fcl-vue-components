import { routes } from './routes.js';
import { Sidebar } from './src/views/sidebar.js';

import { FvTabs } from "./src/components/Tabs/tabs.js";
import { FvTab } from "./src/components/Tabs/tab.js";
import { FvTabContent } from "./src/components/Tabs/tabContent.js";
import { FvCollapse } from "./src/components/Collapse/collapse.js";
import { FvModal } from "./src/components/Modal/modal.js";
import { FvTags } from "./src/components/Tags/tags.js";
import { FvPopover } from "./src/components/Popover/popover.js";
import { FvCarousel } from "./src/components/Carousel/carousel.js";
import { FvProgress } from "./src/components/Progress/progress.js";
import { FvRating } from "./src/components/Rating/rating.js";
import { FvSelect2 } from './src/components/Select2/select2.js';

Vue.component("Sidebar", Sidebar);

Vue.component('fv-tabs', FvTabs);
Vue.component('fv-tab', FvTab);
Vue.component('fv-tab-content', FvTabContent);
Vue.component('fv-collapse', FvCollapse);
Vue.component('fv-modal', FvModal);
Vue.component('fv-tags', FvTags);
Vue.component('fv-popover', FvPopover);
Vue.component('fv-carousel', FvCarousel);
Vue.component('fv-progress', FvProgress);
Vue.component('fv-rating', FvRating);
Vue.component('fv-select2', FvSelect2);

const router = new VueRouter({
  routes: routes,
  mode: "history",
  base: "/",
});

new Vue({
  el: "#root",
  router: router,
});
