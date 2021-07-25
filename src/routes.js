import { HomeView } from "./views/homeView.js";
import { TabsView } from "./views/tabsView.js";
import { CollapseView } from "./views/collapseView.js";
import { ModalView } from "./views/modalView.js";
import { TagsView } from "./views/tagsView.js";
import { PopoverView } from "./views/popoverView.js";
import { CarouselView } from "./views/carouselView.js";
import { ProgressView } from "./views/progressView.js";
import { FeedbackView } from "./views/feedbackView.js";
import { Select2View } from "./views/select2View.js";
import { BusyView } from "./views/busyView.js";
import { VueChartJSView } from "./views/vueChartjsView.js";
import { DatePickerView } from "./views/datePickerView.js";
import { DataTableView } from "./views/datatableView.js";
import { VuelidateView } from "./views/vuelidateView.js";

export const routes = [
  {
    path: "/",
    component: HomeView,
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
    path: "/feedback",
    component: FeedbackView,
  },
  {
    path: "/select2",
    component: Select2View,
  },
  {
    path: "/busy",
    component: BusyView,
  },
  {
    path: "/vue-chartjs",
    component: VueChartJSView,
  },
  {
    path: "/datepicker",
    component: DatePickerView,
  },
  {
    path: "/data-table",
    component: DataTableView,
  },
  {
    path: "/vuelidate",
    component: VuelidateView,
  },
];
