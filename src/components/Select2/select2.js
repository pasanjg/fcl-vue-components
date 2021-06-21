Vue.component('fv-select2', {
  props: ['contentclass', 'selectId', 'options', 'selectedValue', 'optionLabel'],
  data: function () {
    return {
      optionLabel: this.optionLabel ?? 'Select',
      selectedValue: this.options.includes(this.selectedValue) ? this.selectedValue : null,
    }
  },
  mounted: function () {
    this.initFunctions();
  },
  methods: {
    initFunctions: function () {

      if (this.selectedValue != null && !this.options.includes(this.selectedValue)) {
        console.error(`Options list doesnot include value '${this.selectedValue}'`);
        return;
      }

      const dropdownTriggers = [...document.querySelectorAll(`[data-target='${this.selectId}'][data-toggle='dropdown'], [data-input='${this.selectId}']`)];
      const menu = document.querySelector(`[data-menu=${this.selectId}]`);
      const menuList = menu.querySelector(`#${this.selectId}MenuList`);
      const filterInput = menu.querySelector(`input[data-filter='${this.selectId}']`);

      for (let i = 0; i < this.options.length; i++) {
        const menuItem = document.createElement("span");
        menuItem.setAttribute("class", 'dropdown-item');
        menuItem.innerHTML = this.options[i];
        menuList.appendChild(menuItem);
        menuList.style.maxHeight = "12rem";
        menuList.style.overflowY = "scroll";

        this.handleSelect(menu, menuItem);
      }

      this.filterValues(filterInput, menuList);

      // document.body.addEventListener('focusout', function (ev) {
      //   if ((ev.target == filterInput)) {
      //     setTimeout(() => {
      //       menu.classList['remove']('show');
      //     }, 100);
      //   }
      // });

      dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
          menu.classList['toggle']('show');
        });

        // trigger.addEventListener(('focusout'), function (ev) {
        //   setTimeout(() => {
        //     menu.classList['remove']('show');
        //   }, 100);
        // });
      });
    },
    handleSelect: function (menu, menuItem) {
      let vm = this;
      const selectInput = document.getElementById(vm.selectId);

      menuItem.addEventListener(('click'), function () {
        selectInput.value = menuItem.innerHTML;
        setTimeout(() => {
          menu.classList['remove']('show');
        }, 100);
      });
    },
    filterValues: function (filterInput, menuList) {
      const menuItems = menuList.querySelectorAll('span');

      filterInput.addEventListener('input', function () {
        for (let i = 0; i < menuItems.length; i++) {
          let menuItem = menuItems[i];
          let menuItemValue = menuItem.innerHTML || menuItem.textContent;

          if (menuItemValue.toUpperCase().indexOf(filterInput.value.toUpperCase()) > -1) {
            menuItem.style.display = "block";
          } else {
            menuItem.style.display = "none";
          }
        }
      });
    }
  },
  template:
    `
    <div class="input-group">
      <input :id="selectId" class="form-control" :value="$data.selectedValue" :placeholder="optionLabel" :data-input="selectId" readonly="readonly" />
      <div class="input-group-append">
        <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" :data-target="selectId" data-toggle="dropdown">
        </button>
        <div class="w-100 dropdown-menu" :data-menu="selectId">
          <input type="text" class="form-control mx-auto mb-2" :data-filter="selectId" placeholder="Filter" style="width: 95%" />
          <div :id="selectId+'MenuList'" class="w-100"></div>
        </div>
      </div>
    </div> 
  `,
});