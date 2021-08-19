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
import { AutoCloseView } from "./views/autoCloseView.js";
import { LoadingView } from "./views/loadingView.js";
import { DataCardsView } from "./views/dataCardsView.js";
import { VueChartJSView } from "./views/vueChartjsView.js";
import { DataTableView } from "./views/datatableView.js";
import { DatePickerView } from "./views/datePickerView.js";
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
    path: "/vue-chartjs",
    component: VueChartJSView,
  },
  // Custom Directives
  {
    path: "/auto-close",
    component: AutoCloseView,
  },
  {
    path: "/loading",
    component: LoadingView,
  },
  // External/Draft
  {
    path: "/data-cards",
    component: DataCardsView,
  },
  {
    path: "/data-table",
    component: DataTableView,
  },
  {
    path: "/datepicker",
    component: DatePickerView,
  },
  {
    path: "/vuelidate",
    component: VuelidateView,
  },
];
