export const FvTab = {
  props: ['contentclass', 'id'],
  template:
    `
    <li class="nav-item">
      <a :id="id" :class="['nav-link', contentclass]" data-toggle="tab" role="tab">
        <slot/>
      </a>
    </li>
  `
};
