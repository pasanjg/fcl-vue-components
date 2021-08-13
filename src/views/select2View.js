export const Select2View = {
  data: function () {
    return {
      types: [
        { "value": "todos", "displayName": "Todos" },
        { "value": "users", "displayName": "Users" },
      ],
      choices: [],
      choiceDataDisplay: null,
      colors: [
        { "value": "red", "displayName": "Red" },
        { "value": "green", "displayName": "Green" },
        { "value": "purple", "displayName": "Purple" },
        { "value": "orange", "displayName": "Orange" },
        { "value": "black", "displayName": "Black" },
        { "value": "violet", "displayName": "Violet" },
        { "value": "blue", "displayName": "Blue" },
      ],
      pets: [
        { "value": "cat", "displayName": "Cat" },
        { "value": "dog", "displayName": "Dog" },
        { "value": "fish", "displayName": "Fish" },
        { "value": "bird", "displayName": "Bird" },
      ],

      selected: {},
      selected2: { "value": "cat", "displayName": "Cat" },
      selected3: { "value": "red", "displayName": "Red" },

      type: {},
      choice: {},
      color: {},
    }
  },
  inject: ['fetcher'],
  methods: {
    getNewItem(item) {
      // Handle the new item
      console.debug('Added', item);
    },
    getRemovedItem(item) {
      // Hande removed item
      console.debug('Removed', item);
    },
    async setChoiceList(type) {
      if (type['value'] === 'todos') {
        const url = "https://jsonplaceholder.typicode.com/todos"
        this.choiceDataDisplay = 'title'
        return await this.fetcher(url);

      } else if (type['value'] === 'users') {
        const url = "https://jsonplaceholder.typicode.com/users"
        this.choiceDataDisplay = 'name'
        return await this.fetcher(url);
      }
    }
  },
  watch: {
    async type(newValue, oldValue) {
      this.choices = await this.setChoiceList(newValue);
    },
  },
  template:
    `
		<div>
			<h3>Select2</h3>
      <br />

      <h6>Select a type and choice</h6>
      <div class="row">
        <div class="col">
          {{type}}
          <fv-select2 id="demoTypes" :data-list="types" data-display="displayName" data-value="value" v-model="type" placeholder="Select type"/>
        </div>
        <div class="col">
          {{choice}}
          <fv-select2 id="demoChoice" :data-list="choices" :data-display="choiceDataDisplay" data-value="id" v-model="choice" placeholder="Select Choice"/>
        </div>
        <div class="col">
          {{color}}
          <fv-select2 id="demoName" :data-list="colors" data-display="displayName" data-value="value" v-model="color" placeholder="Select Color"/>
        </div>
      </div>
      <br /> <br />

      <h6><code>id="demoSelect" :data-list="[{value: 'red', displayName: 'Red'}, {value: 'blue', displayName: 'Blue'}]" data-display="displayName" data-value="value" v-model="selected"</code></h6>
      <small>selected: {{selected}}</small>
			<fv-select2 id="demoSelect" :data-list="colors" data-display="displayName" data-value="value" v-model="selected" placeholder="Select color"/>
      <br /> <br />

      <h6>Add a new value which is not included in the list</h6>
      <h6><code>allow-new="true" @onAdd="getNewItem"</code></h6>
      <small>selected: {{selected2}}</small>
			<fv-select2 id="demoSelect2" :data-list="pets" data-display="displayName" data-value="value" v-model="selected2" allow-new="true" @onAdd="getNewItem" placeholder="Select"/>
      <br /> <br />

      <h6>Remove a value from the list</h6>
      <h6><code>allow-remove="true" @onRemove="getRemovedItem"</code></h6>
      <small>selected: {{selected3}}</small>
			<fv-select2 id="demoSelect3" :data-list="colors" data-display="displayName" data-value="value" v-model="selected3" allow-remove="true" @onRemove="getRemovedItem" placeholder="Select color"/>
      <br /> <br />
		</div>
  `,
};
