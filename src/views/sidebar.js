import { routes } from "../routes.js";

export const Sidebar = {
  data: function () {
    return {
      components: routes.filter(route => route.type === "component"),
      directives: routes.filter(route => route.type === "directive"),
      externals: routes.filter(route => route.type === "external"),
      drafts: routes.filter(route => route.type === "draft"),
    };
  },
  template:
    `
  <div class="list-group sidebar bg-light">
    <router-link v-for="component in components" :to="component.path" :class="['list-group-item list-group-item-action rounded-0', component.name === 'FV Components' ? 'bg-danger text-white' : '']">{{ component.name }}</router-link>

    <!-- Custom Directives -->
    <div class="list-group-item list-group-item-action rounded-0 bg-success text-white">Custom Directives</div>
    <router-link v-for="directive in directives" :to="directive.path" class="list-group-item list-group-item-action rounded-0">{{ directive.name }}</router-link>

    <!-- External -->
    <div class="list-group-item list-group-item-action rounded-0 bg-dark text-white">External</div>
    <router-link v-for="external in externals" :to="external.path" class="list-group-item list-group-item-action rounded-0">{{ external.name }}</router-link>

    <!-- Draft -->
    <div class="list-group-item list-group-item-action rounded-0 bg-secondary text-white">Draft</div>
    <router-link v-for="draft in drafts" :to="draft.path" class="list-group-item list-group-item-action rounded-0">{{ draft.name }}</router-link>
  </div>
	`,
};
