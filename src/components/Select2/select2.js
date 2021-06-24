import { AutoClose } from "../../directives/autoClose.js";

export const FvSelect2 = {
  name: 'fv-select',
  props: ['contentclass', 'id', 'options', 'selectedValue', 'placeholder', 'inputcustom'],
  data: function () {
    return {
      selectedValue: this.options.includes(this.selectedValue) ? this.selectedValue : null,
      placeholder: this.placeholder ?? 'Select',
      inputcustom: this.inputcustom ?? false,
    }
  },
  mounted: function () {
    this.initFunctions();
  },
  methods: {
    initFunctions: function () {

      if (this.selectedValue != null && !this.options.includes(this.selectedValue)) {
        console.error(`Options list does not include value '${this.selectedValue}'`);
        return;
      }

      const dropdownTriggers = [...document.querySelectorAll(`[data-target='${this.id}'][data-toggle='dropdown'], [data-input='${this.id}']`)];
      const menu = document.querySelector(`[data-menu=${this.id}]`);
      const menuList = menu.querySelector(`#${this.id}MenuList`);
      const filterInput = menu.querySelector(`input[data-filter='${this.id}']`);
      const customField = document.getElementById(`${this.id}CustomField`);

      customField.style.display = "none";

      this.renderList(menuList, this.options);
      this.filterList(filterInput, menuList);

      dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
          menu.classList['toggle']('show');
        });
      });
    },
    renderList: function (menuList, optionsList) {
      menuList.innerHTML = "";
      for (let index in optionsList) {
        const menuItem = document.createElement("span");
        menuItem.setAttribute("class", 'dropdown-item');
        menuItem.innerHTML = optionsList[index];
        menuList.appendChild(menuItem);
        menuList.style.maxHeight = "12rem";
        menuList.style.overflowY = "scroll";

        this.handleSelect(menuItem);
      }
    },
    handleSelect: function (menuItem) {
      let vm = this;
      const selectInput = document.getElementById(vm.id);

      menuItem.addEventListener(('click'), function () {
        selectInput.value = menuItem.innerHTML;
        setTimeout(() => {
          vm.closeMenu();
        }, 100);
      });
    },
    filterList: function (filterInput, menuList) {
      const vm = this;
      const customField = document.getElementById(`${vm.id}CustomField`);

      filterInput.addEventListener('input', function () {

        let filteredOptions = vm.options.filter(function (option) {
          option = option.toLowerCase();
          return option.indexOf(filterInput.value.toLowerCase()) > -1;
        });

        vm.renderList(menuList, filteredOptions)

        if (vm.inputcustom || vm.inputcustom == "true") {
          if (filterInput.value != null && filterInput.value != "") {
            customField.style.display = "block";
          } else {
            customField.style.display = "none";
          }

          if (filteredOptions.length >= 1) {
            if (filteredOptions[0].toLowerCase() == filterInput.value.toLowerCase()) {
              customField.style.display = "none";
            }
          }

          vm.addCustomInput(filterInput);

        } else {
          customField.style.display = "none";
        }
      });
    },
    addCustomInput: function (filterInput) {
      const vm = this;
      const customField = document.getElementById(`${vm.id}CustomField`);
      const customItem = customField.querySelector('span');
      const selectInput = document.getElementById(vm.id);

      customItem.innerHTML = `Select <strong>${filterInput.value}</strong> as option`;
      customField.appendChild(customItem);

      customField.addEventListener('click', function () {
        selectInput.value = filterInput.value;
        setTimeout(() => {
          customField.style.display = "none";
          customField.querySelector('span').innerHTML = "";
          vm.closeMenu();
        }, 100);
      });
    },
    closeMenu: function () {
      const vm = this;
      const menu = document.querySelector(`[data-menu=${vm.id}]`);
      menu.classList['remove']('show');
    }
  },
  directives: {
    autoClose: AutoClose,
  },
  template:
    `
    <div class="input-group">
      <input :id="id" ref="selectRef" class="form-control" :value="$data.selectedValue" :placeholder="placeholder" :data-input="id" readonly="readonly" />
      <div class="input-group-append">
        <button type="button" ref="toggleButtonRef" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" :data-target="id" data-toggle="dropdown">
        </button>
        <div v-auto-close="{ exclude: ['selectRef', 'toggleButtonRef'], handler: 'closeMenu' }" class="w-100 dropdown-menu" :data-menu="id">
          <input type="search" class="form-control mx-auto mb-2" :data-filter="id" placeholder="Filter" style="width: 95%" />
          <span :id="id+'CustomField'" class="dropdown-item">
            <i class="fa fa-plus text-muted"></i>
            <span></span>
          </span>
          <div :id="id+'MenuList'" class="w-100"></div>
        </div>
      </div>
    </div>
  `,
};
