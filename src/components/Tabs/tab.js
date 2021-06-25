export const FvTab = {
  props: ['contentclass', 'contentid'],
  data: function () {
    return {
      count: 0,
    }
  },
  methods: {

  },
  template:
    `
    <li class="nav-item" role="presentation">
      <a v-bind:id="contentid" v-bind:class="['nav-link', contentclass]" data-toggle="tab" role="tab">
        <slot/>
      </a>
    </li>
  `
};
