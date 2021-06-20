Vue.component('fv-tabs', {
  props: ['contentclass', 'tabId'],
  data: function () {
    return {
      tabId: "this.tabId,",
      currentTab: 0,
      registeredTabs: this.$slot,
    }
  },
  mounted: function () {
    const vm = this;
    const tabId = vm.tabId;

    var tabItems = document.querySelectorAll('#' + tabId + '>li');
    var tabLinks = document.querySelectorAll('#' + tabId + '>li>a');

    for (var i = 0; i < tabItems.length; i++) {
      tabItems[i].addEventListener("click", function () {

        var tabs = document.querySelectorAll('#' + tabId + '+.tab-content>.tab-pane');
        for (var k = 0; k < tabs.length; k++) {
          tabs[k].classList.remove("active");
        }

        for (var j = 0; j < tabItems.length; j++) {
          tabItems[j].className = "";
          tabLinks[j].classList.remove("active");
        }

        var tabItem = this.getElementsByTagName("a")[0];
        tabItem.classList.add("active");

        var tabLink = tabItem.id;
        var tab = document.querySelectorAll('.tab-content>#' + tabLink)[0];
        tab.classList.add("active");
      });
    };
  },
  template:
    `
  <ul class="nav nav-tabs" v-bind:id="tabId" role="tablist">
    <slot/>
  </ul>   
  `
});