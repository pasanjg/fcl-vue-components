import { HomeView } from "./views/homeView.js";
import { TabsView } from "./views/tabsView.js";
import { CollapseView } from "./views/collapseView.js";
import { ModalView } from "./views/modalView.js";
import { TagsView } from "./views/tagsView.js";
import { PopoverView } from "./views/popoverView.js";
import { CarouselView } from "./views/carouselView.js";
import { ProgressView } from "./views/progressView.js";
import { RatingView } from "./views/ratingView.js";
import { Select2View } from "./views/select2View.js";
import { DatePickerView } from "./views/datePickerView.js";
import { VueChartJSView } from "./views/vueChartjsView.js";
import { DataTableView } from "./views/datatableView.js";
import { VueDatatablesView } from "./views/vueDatatables.js";
import { VuelidateView } from "./views/vuelidateView.js";

export const routes = [
  {
    path: "/",
    component: VueDatatablesView,
    // component: HomeView,
  },
  {
    path: "/tabs",
    component: TabsView,
  },
  {
    path: "/collapse",
    component: CollapseView,
  },
  {
    path: "/modal",
    component: ModalView,
  },
  {
    path: "/tags",
    component: TagsView,
  },
  {
    path: "/popover",
    component: PopoverView,
  },
  {
    path: "/carousel",
    component: CarouselView,
  },
  {
    path: "/progress",
    component: ProgressView,
  },
  {
    path: "/rating",
    component: RatingView,
  },
  {
    path: "/select2",
    component: Select2View,
  },
  {
    path: "/datepicker",
    component: DatePickerView,
  },
  {
    path: "/vue-chartjs",
    component: VueChartJSView,
  },
  {
    path: "/data-table",
    component: DataTableView,
  },
  {
    path: "/vue-data-table",
    component: VueDatatablesView,
  },
  {
    path: "/vuelidate",
    component: VuelidateView,
  },
];
