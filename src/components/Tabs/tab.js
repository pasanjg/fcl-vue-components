export const FvTab = {
  props: ['className', 'id'],
  template:
    `
    <li class="nav-item">
      <a :id="id" :class="['nav-link', className]" data-toggle="tab" role="tab">
        <slot/>
      </a>
    </li>
  `
};
