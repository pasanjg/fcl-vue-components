import { HomeView } from "./src/views/homeView.js";
import { TabsView } from "./src/views/tabsView.js";
import { CollapseView } from "./src/views/collapseView.js";
import { ModalView } from "./src/views/modalView.js";
import { TagsView } from "./src/views/tagsView.js";
import { PopoverView } from "./src/views/popoverView.js";
import { CarouselView } from "./src/views/carouselView.js";
import { ProgressView } from "./src/views/progressView.js";
import { RatingView } from "./src/views/ratingView.js";
import { Select2View } from "./src/views/select2View.js";

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
    path: "/rating",
    component: RatingView,
  },
  {
    path: "/select2",
    component: Select2View,
  },
];
