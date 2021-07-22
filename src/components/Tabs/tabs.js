export const FvTabs = {
  props: ['className', 'tabid', 'pills'],
  data: function () {
    return {
      tabsPills: this.pills === 'true' ? "nav-pills" : "nav-tabs",
    }
  },
  mounted: function () {
    const vm = this;
    const tabid = vm.tabid;

    let tabItems = document.querySelectorAll('#' + tabid + '>li');
    let tabLinks = document.querySelectorAll('#' + tabid + '>li>a');

    for (let i = 0; i < tabItems.length; i++) {
      tabItems[i].addEventListener("click", function () {

        const tabs = document.querySelectorAll('#' + tabid + '.tab-content>.tab-pane');
        for (let k = 0; k < tabs.length; k++) {
          tabs[k].classList.remove("active");
        }

        for (let j = 0; j < tabItems.length; j++) {
          tabLinks[j].classList.remove("active");
        }

        const tabItem = this.getElementsByTagName("a")[0];
        tabItem.classList.add("active");

        const tabLink = tabItem.id;
        const tab = document.querySelectorAll('.tab-content>#' + tabLink)[0];
        tab.classList.add("active");
      });
    };
  },
  template:
    `
  <ul :id="tabid" :class="['nav', tabsPills, className]" role="tablist">
    <slot/>
  </ul>
  `
};
