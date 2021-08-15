import { AutoClose } from "../vue-directives/vue-auto-close.js";

export const FvSelect2 = {
  model: {
    prop: 'value',
    event: 'onSelect'
  },
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
    value: {
      type: String,
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
    multiSelect: {
        type: Boolean,
        default: false,
    },
    allowRemove: {
      type: Boolean,
      default: false,
    }
  },
  data: function () {
    return {
      customInputValue: null,
      selectRef: `${this.id}SelectRef`,
      toggleButtonRef: `${this.id}ToggleButtonRef`,
        filterInputRef: `${this.id}FilterInputRef`,
        allSelected: false
    }
  },
  mounted: function () {
    this.initFunctions();
  },
  methods: {
    initFunctions: function () {
      const vm = this;
      const dropdownTriggers = [...document.querySelectorAll(`[data-target='${this.id}'][data-toggle='dropdown'], [data-input='${this.id}']`)];
      const menu = document.querySelector(`[data-menu=${this.id}]`);

      const filterInput = menu.querySelector(`input[data-filter='${this.id}']`);
      const customField = document.getElementById(`${this.id}CustomField`);

      customField.style.display = "none";

      this.renderList(this.dataList);
      this.filterList(filterInput);

      dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
          if (filterInput.value != null && filterInput.value != "") {
            filterInput.value = null;
          }
          vm.renderList(vm.dataList);
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

        const checkbox = document.createElement("input");
        checkbox.setAttribute("class", 'mr-2');
        checkbox.setAttribute("type", 'checkbox');


        menuItem.setAttribute("class", 'dropdown-item');
        menuItem.classList.add("d-flex", "justify-content-between", "align-items-center");
        menuItem.style.paddingTop = 0;
        menuItem.style.paddingBottom = 0;

        selectItem.setAttribute("class", 'w-100');
        selectItem.style.paddingTop = '0.25rem';
        selectItem.style.paddingBottom = '0.25rem';
        menuItem.style.cursor = 'pointer';
        selectItem.innerHTML = dataList[index][this.dataDisplay];

          if (this.multiSelect) {
              checkbox.setAttribute("value", dataList[index][this.dataValue]);
              var itemInOriginalList = vm.dataList.find(e => e.Id == dataList[index][this.dataValue]);
              if (itemInOriginalList?.isActive) {
                  checkbox.setAttribute("checked", "checked");
              }
              else
                  checkbox.removeAttribute("checked");

              menuItem.appendChild(checkbox);
              checkbox.addEventListener("click", function (e) {
                  vm.setAsSelected(vm.dataList[index],e);
                  //vm.closeMenu();
              });
          }


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
            vm.removeSelectedValue(vm.dataList[index]);
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
        vm.updateSelectedValue(selected);

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

      customField.addEventListener('click', function () {

        vm.addSelectedValue(vm.customInputValue);

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

      if (menu.classList.contains('show')) {
        menu.classList['remove']('show');
        customField.style.display = "none";
        if (filterInput.value != null && filterInput.value != "") {
          filterInput.value = null;
          vm.renderList(this.dataList);
        }
      }
    },
    getValue() {
          return this.value[this.dataDisplay];
    },
    updateSelectedValue(selectedValue) {
      let selected = {
        [this.dataDisplay]: selectedValue[this.dataDisplay],
        [this.dataValue]: selectedValue[this.dataValue],
      }
      this.$emit('onSelect', selected);
    },
    addSelectedValue(selectedValue) {
      this.$emit('onAdd', selectedValue);
    },
    setAsSelected(selectedValue, ele) {
        const vm = this;
        //var item = vm.dataList.find(e => e.Id == ele.target.value);
        //var idx = vm.dataList.findIndex(e => e.Id == ele.target.value);
        //item.isActive = ele.target.checked;
        //vm.dataList[idx] = item;
        _.set(vm.dataList.find(e => e.Id == ele.target.value), 'isActive', ele.target.checked);
    },
      selectAll(evt) {
        var vm = this;
          vm.dataList.forEach(e => e.isActive = evt.target.checked);
          this.renderList(vm.dataList);
    },
    removeSelectedValue(selectedValue) {
      let selected = {
        [this.dataDisplay]: selectedValue[this.dataDisplay],
        [this.dataValue]: selectedValue[this.dataValue],
      }

      this.$emit('onRemove', selected);
    },
  },
  watch: {
    //dataList: function () {
    //  this.value = {};
    //  this.$emit('onSelect', this.value);
    //  this.renderList(this.dataList);
    //}
  },
  directives: {
    autoClose: AutoClose,
  },
  template:
    `
    <div class="input-group">
      <input :id="id" :ref="selectRef" class="form-control shadow-none" :value="getValue()" :placeholder="placeholder" :data-input="id" readonly="readonly" />
      <div class="input-group-append">
        <button type="button" :ref="toggleButtonRef" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split shadow-none" :data-target="id" data-toggle="dropdown">
        </button>
        <div :key="id" class="w-100 dropdown-menu" :data-menu="id" v-auto-close="{ exclude: [selectRef, toggleButtonRef, filterInputRef], handler: 'closeMenu' }">
          <label v-if="multiSelect" class="ml-3"><input class="mr-2" type="checkbox" v-on:click="selectAll($event)" >Select all</label>
          <label v-if="allowRemove" class="float-right mr-3"><input class="mr-2" type="checkbox">Remove all</label>
          <input type="search" :ref="filterInputRef" class="form-control shadow-none mx-auto mb-2" :data-filter="id" placeholder="Filter" style="width: 95%" />
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
