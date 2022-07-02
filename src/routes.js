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
import { ListboxView } from "./views/listboxView.js";
import { AutoCloseView } from "./views/autoCloseView.js";
import { LoadingView } from "./views/loadingView.js";
import { SortableVueDraggableView } from "./views/sortableVueDraggableView.js";
import { vueDNDropView } from "./views/vueDNDropView.js";
import { FullCalendarView } from "./views/fullcalendarView.js";
import { DataCardsView } from "./views/dataCardsView.js";
import { VueChartJSView } from "./views/vueChartjsView.js";
import { CardCarouselView } from "./views/cardCarouselView.js";
import { DataTableView } from "./views/datatableView.js";
import { DatePickerView } from "./views/datePickerView.js";
import { VuelidateView } from "./views/vuelidateView.js";
import { DynamicComponentsView } from "./views/dynamicComponentsView.js";
import { AddToCalendarView } from "./views/addToCalendarView.js";
import { VueStepperView } from "./views/vueStepperView.js";
import { CustomWrapperView } from "./views/customWrapperView.js";
import { FieldWrapperView } from "./views/fieldWrapperView.js";
import { VueTourView } from "./views/vueTourView.js";
import { Vuei18nView } from "./views/vuei18nView.js";

export const routes = [
  {
    name: "FV Components",
    path: "/",
    type: "component",
    component: HomeView,
  },
  {
    name: "Tabs",
    path: "/tabs",
    type: "component",
    component: TabsView,
  },
  {
    name: "Collapse",
    path: "/collapse",
    type: "component",
    component: CollapseView,
  },
  {
    name: "Modal",
    path: "/modal",
    type: "component",
    component: ModalView,
  },
  {
    name: "Tags",
    path: "/tags",
    type: "component",
    component: TagsView,
  },
  {
    name: "Progress",
    path: "/progress",
    type: "component",
    component: ProgressView,
  },
  {
    name: "Feedback",
    path: "/feedback",
    type: "component",
    component: FeedbackView,
  },
  {
    name: "Select2",
    path: "/select2",
    type: "component",
    component: Select2View,
  },
  {
    name: "Listbox",
    path: "/listbox",
    type: "component",
    component: ListboxView,
  },
  {
    name: "Vue-ChartJS",
    path: "/vue-chartjs",
    type: "component",
    component: VueChartJSView,
  },
  {
    name: "Card Carousel",
    path: "/card-carousel",
    type: "component",
    component: CardCarouselView,
  },
  // Custom Directives
  {
    name: "AutoClose",
    path: "/auto-close",
    type: "directive",
    component: AutoCloseView,
  },
  {
    name: "Loading",
    path: "/loading",
    type: "directive",
    component: LoadingView,
  },
  // External
  {
    name: "FullCalendar",
    path: "/fullcalendar",
    type: "external",
    component: FullCalendarView,
  },
  {
    name: "SortableVueDraggable",
    path: "/sortable-vuedraggable",
    type: "external",
    component: SortableVueDraggableView,
  },
  {
    name: "VueDNDrop",
    path: "/vuedndrop",
    type: "external",
    component: vueDNDropView,
  },
  {
    name: "DataTable",
    path: "/data-table",
    type: "external",
    component: DataTableView,
  },
  {
    name: "DatePicker",
    path: "/datepicker",
    type: "external",
    component: DatePickerView,
  },
  {
    name: "Vuelidate",
    path: "/vuelidate",
    type: "external",
    component: VuelidateView,
  },
  {
    name: "Add To Calendar",
    path: "/add-to-calendar",
    type: "external",
    component: AddToCalendarView,
  },
  {
    name: "Vue Stepper",
    path: "/vue-stepper",
    type: "external",
    component: VueStepperView,
  },
  {
    name: "Vue Tour",
    path: "/vue-tour",
    type: "external",
    component: VueTourView,
  },
  {
    name: "Vue i18n",
    path: "/vue-i18n",
    type: "external",
    component: Vuei18nView,
  },
  // Draft
  {
    name: "Popover",
    path: "/popover",
    type: "draft",
    component: PopoverView,
  },
  {
    name: "Carousel",
    path: "/carousel",
    type: "draft",
    component: CarouselView,
  },
  {
    name: "DataCards",
    path: "/data-cards",
    type: "draft",
    component: DataCardsView,
  },
  {
    name: "Dynamic Components",
    path: "/dynamic-components",
    type: "draft",
    component: DynamicComponentsView,
  },
  {
    name: "Custom Wrapper",
    path: "/custom-wrapper",
    type: "draft",
    component: CustomWrapperView,
  },
  {
    name: "Field Wrapper",
    path: "/field-wrapper",
    type: "draft",
    component: FieldWrapperView,
  },
];
