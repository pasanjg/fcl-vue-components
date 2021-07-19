import { AutoClose } from "../../directives/autoClose.js";

export const FvSelect2 = {
  name: 'fv-select',
  props: ['className', 'id', 'dataList', 'dataSelected', 'placeholder', 'allowNew', 'allowRemove'],
  data: function () {
    return {
      dDataSelected: this.dataList.includes(this.dataSelected) ? this.dataSelected : null,
      dPlaceholder: this.placeholder ?? 'Select',
    }
  },
  mounted: function () {
    this.initFunctions();
  },
  methods: {
    initFunctions: function () {
      if (this.dataSelected != null && !this.dataList.includes(this.dataSelected)) {
        // throw new Error(`Data list does not include value '${this.dataSelected}'`);
      }

      const dropdownTriggers = [...document.querySelectorAll(`[data-target='${this.id}'][data-toggle='dropdown'], [data-input='${this.id}']`)];
      const menu = document.querySelector(`[data-menu=${this.id}]`);
      const menuList = menu.querySelector(`#${this.id}MenuList`);
      const filterInput = menu.querySelector(`input[data-filter='${this.id}']`);
      const customField = document.getElementById(`${this.id}CustomField`);

      customField.style.display = "none";

      this.renderList(menuList, this.dataList);
      this.filterList(filterInput, menuList);

      dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
          menu.classList['toggle']('show');
        });
      });
    },
    renderList: function (menuList, dataList) {
      const vm = this;
      menuList.innerHTML = "";

      for (let index in dataList) {
        const menuItem = document.createElement("div");
        menuItem.setAttribute("class", 'dropdown-item');
        menuItem.classList.add("d-flex", "justify-content-between", "align-items-center");
        menuItem.innerHTML = `<span>${dataList[index].displayName}</span>`;
        menuList.appendChild(menuItem);
        menuList.style.maxHeight = "12rem";
        menuList.style.overflowY = "scroll";

        if (vm.allowRemove || vm.allowRemove == "true") {
          const removeBtn = document.createElement("i");
          removeBtn.classList.add("float-right", "fa", "fa-times", "text-muted");
          removeBtn.style.cursor = "pointer";
          removeBtn.addEventListener("click", function (e) {
            console.log(index, 'removed');
          });
          menuItem.appendChild(removeBtn);
        }

        this.handleSelect(menuItem, dataList[index].displayName);
      }
    },
    handleSelect: function (menuItem, value) {
      const vm = this;
      const selectInput = document.getElementById(vm.id);

      menuItem.addEventListener(('click'), function () {
        selectInput.value = value;
        setTimeout(() => {
          vm.closeMenu();
        }, 100);
      });
    },
    filterList: function (filterInput, menuList) {
      const vm = this;
      const customField = document.getElementById(`${vm.id}CustomField`);

      filterInput.addEventListener('input', function () {

        let filteredOptions = vm.dataList.filter(function (option) {
          option = option.displayName.toLowerCase();
          return option.indexOf(filterInput.value.toLowerCase()) > -1;
        });

        vm.renderList(menuList, filteredOptions)

        if (vm.allowNew || vm.allowNew == "true") {
          if (filterInput.value != null && filterInput.value != "") {
            customField.style.display = "block";
          } else {
            customField.style.display = "none";
          }

          if (filteredOptions.length >= 1) {
            if (filteredOptions[0].displayName.toLowerCase() == filterInput.value.toLowerCase()) {
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
      <input :id="id" ref="selectRef" class="form-control" :value="$data.dDataSelected" :placeholder="dPlaceholder" :data-input="id" readonly="readonly" />
      <div class="input-group-append">
        <button type="button" ref="toggleButtonRef" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" :data-target="id" data-toggle="dropdown">
        </button>
        <div v-auto-close="{ exclude: ['selectRef', 'toggleButtonRef'], handler: 'closeMenu' }" class="w-100 dropdown-menu" :data-menu="id">
          <input type="search" class="form-control shadow-none mx-auto mb-2" :data-filter="id" placeholder="Filter" style="width: 95%" />
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
