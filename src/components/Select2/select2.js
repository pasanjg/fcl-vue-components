import { AutoClose } from "../../directives/autoClose.js";

export const FvSelect2 = {
  props: {
    className: String,
    id: {
      type: String,
      required: true,
    },
    dataList: {
      type: Array,
      required: true,
    },
    dataSelected: {
      type: Object,
    },
    dataDisplay: {
      type: String,
      required: true,
    },
    dataValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Select',
    },
    allowNew: {
      type: Boolean,
      default: false,
    },
    allowRemove: {
      type: Boolean,
      default: false,
    },
    selectedEventName: {
      type: String,
    },
    addEventName: {
      type: String,
    },
    removeEventName: {
      type: String,
    },
  },
  data: function () {
    return {
      customInputValue: null,
    }
  },
  mounted: function () {
    this.initFunctions();
  },
  methods: {
    initFunctions: function () {
      const dropdownTriggers = [...document.querySelectorAll(`[data-target='${this.id}'][data-toggle='dropdown'], [data-input='${this.id}']`)];
      const menu = document.querySelector(`[data-menu=${this.id}]`);

      const filterInput = menu.querySelector(`input[data-filter='${this.id}']`);
      const customField = document.getElementById(`${this.id}CustomField`);

      customField.style.display = "none";

      this.renderList(this.dataList);
      this.filterList(filterInput);

      dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
          menu.classList['toggle']('show');
        });
      });
    },
    renderList: function (dataList) {
      const vm = this;
      const menuList = document.querySelector(`#${this.id}MenuList`);
      menuList.innerHTML = "";

      for (let index in dataList) {
        const menuItem = document.createElement("div");
        const selectItem = document.createElement("div");

        menuItem.setAttribute("class", 'dropdown-item');
        menuItem.classList.add("d-flex", "justify-content-between", "align-items-center");
        selectItem.setAttribute("class", 'w-100');
        selectItem.innerHTML = dataList[index][this.dataDisplay];

        menuItem.appendChild(selectItem);
        menuList.appendChild(menuItem);

        menuList.style.maxHeight = "12rem";
        menuList.style.overflowY = "scroll";

        if (vm.allowRemove || vm.allowRemove == "true") {
          const removeBtn = document.createElement("i");
          removeBtn.classList.add("float-right", "fa", "fa-times", "text-muted", "btn", "btn-light", "px-2");
          removeBtn.style.cursor = "pointer";
          menuItem.appendChild(removeBtn);

          removeBtn.addEventListener("click", function (e) {
            EventBus.$emit(vm.removeEventName, vm.dataList[index]);
            vm.closeMenu();
          });
        }

        this.handleSelect(selectItem, dataList[index]);
      }
    },
    handleSelect: function (selectItem, selected) {
      const vm = this;
      const selectInput = document.getElementById(vm.id);

      selectItem.addEventListener(('click'), function () {
        selectInput.value = selected[vm.dataDisplay];
        EventBus.$emit(vm.selectedEventName, selected);
        setTimeout(() => {
          vm.renderList(vm.dataList);
          vm.closeMenu();
        }, 100);
      });
    },
    filterList: function (filterInput) {
      const vm = this;
      const customField = document.getElementById(`${vm.id}CustomField`);

      filterInput.addEventListener('input', function () {
        let filteredOptions = vm.dataList.filter(function (option) {
          option = option[vm.dataDisplay].toLowerCase();
          return option.indexOf(filterInput.value.toLowerCase()) > -1;
        });

        vm.renderList(filteredOptions);

        if (vm.allowNew || vm.allowNew == "true") {
          if (filterInput.value != null && filterInput.value != "") {
            vm.customInputValue = filterInput.value;
            customField.style.display = "block";
          } else {
            customField.style.display = "none";
          }

          if (filteredOptions.length >= 1) {
            if (filteredOptions[0][vm.dataDisplay].toLowerCase() == filterInput.value.toLowerCase()) {
              customField.style.display = "none";
            }
          }
        } else {
          customField.style.display = "none";
        }
      });

      vm.handleCustomInput();
    },
    handleCustomInput: function () {
      const vm = this;
      const customField = document.getElementById(`${vm.id}CustomField`);
      // const selectInput = document.getElementById(vm.id);

      customField.addEventListener('click', function () {
        // Todo: Handle custom input
        // selectInput.value = vm.customInputValue;

        EventBus.$emit(vm.addEventName, vm.customInputValue);

        setTimeout(() => {
          customField.style.display = "none";
          vm.renderList(vm.dataList);
          vm.closeMenu();
        }, 100);
      });
    },
    closeMenu: function () {
      const vm = this;
      const menu = document.querySelector(`[data-menu=${vm.id}]`);
      const filterInput = document.querySelector(`input[data-filter='${vm.id}']`);
      const customField = document.getElementById(`${vm.id}CustomField`);

      filterInput.value = null;
      menu.classList['remove']('show');
      customField.style.display = "none";
      vm.renderList(this.dataList);
    },
  },
  directives: {
    autoClose: AutoClose,
  },
  template:
    `
    <div class="input-group">
      <input :id="id" ref="selectRef" class="form-control shadow-none" :value="dataSelected ? dataSelected[dataDisplay] : null" :placeholder="placeholder" :data-input="id" readonly="readonly" />
      <div class="input-group-append">
        <button type="button" ref="toggleButtonRef" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split shadow-none" :data-target="id" data-toggle="dropdown">
        </button>
        <div v-auto-close="{ exclude: ['selectRef', 'toggleButtonRef'], handler: 'closeMenu' }" class="w-100 dropdown-menu" :data-menu="id">
          <input type="search" class="form-control shadow-none mx-auto mb-2" :data-filter="id" placeholder="Filter" style="width: 95%" />
          <span :id="id+'CustomField'" class="dropdown-item">
            <i class="fa fa-plus text-muted"></i>
            <span>Add <strong>{{ customInputValue }}</strong> to list</span>
          </span>
          <div :id="id+'MenuList'" class="w-100"></div>
        </div>
      </div>
    </div>
  `,
};
