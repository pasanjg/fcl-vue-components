export const FvTabs = {
  props: ['contentclass', 'tabid'],
  data: function () {
    return {
      tabid: "this.tabid,",
      currentTab: 0,
      registeredTabs: this.$slot,
    }
  },
  mounted: function () {
    const vm = this;
    const tabid = vm.tabid;

    var tabItems = document.querySelectorAll('#' + tabid + '>li');
    var tabLinks = document.querySelectorAll('#' + tabid + '>li>a');

    for (var i = 0; i < tabItems.length; i++) {
      tabItems[i].addEventListener("click", function () {

        var tabs = document.querySelectorAll('#' + tabid + '+.tab-content>.tab-pane');
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
  <ul class="nav nav-tabs" v-bind:id="tabid" role="tablist">
    <slot/>
  </ul>
  `
};
