Vue.component('fv-tabs', {
  props: ['content-class'],
  data: function () {
    return {
      currentTab: 0,
      tabs: [],
      registeredTabs: this.$slot,
    }
  },
  template: `
  <div>
    <!--
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
        <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
        <a class="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
      </div>
    </nav>
    -->

    <div class="tab-content" id="myTabContent">
      <slot></slot>
    </div>
  </div>
  `
});