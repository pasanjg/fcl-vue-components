export const Select2View = {
  data: function () {
    return {
      colors: [
        {
          "value": "red",
          "displayName": "Red",
        },
        {
          "value": "green",
          "displayName": "Green",
        },
        {
          "value": "purple",
          "displayName": "Purple",
        },
        {
          "value": "orange",
          "displayName": "Orange",
        },
        {
          "value": "black",
          "displayName": "Black",
        },
        {
          "value": "violet",
          "displayName": "Violet",
        },
        {
          "value": "blue",
          "displayName": "Blue",
        },
      ],
      selected: {},
      selected2: {
        "value": "red",
        "displayName": "Red",
      },
      selected3: {
        "value": "green",
        "displayName": "Green",
      },
    }
  },
  methods: {
    getNewItem(item) {
      console.debug('Added', item);
    },
    getRemovedItem(item) {
      console.debug('Removed', item);
    },
  },
  template:
    `
		<div>
			<h3>Select2</h3>
      <br />

      <h6><code>id="demoSelect" :data-list="[{value: 'red', displayName: 'Red'}, {value: 'blue', displayName: 'Blue'}]" data-display="displayName" data-value="value" v-model="selected"</code></h6>
      <small>selected: {{selected}}</small>
			<fv-select2 id="demoSelect" :data-list="colors" data-display="displayName" data-value="value" v-model="selected" placeholder="Select color"/>
      <br /> <br />

      <h6>Add a new value which is not included in the list</h6>
      <h6><code>allow-new="true" @add-value="getNewItem"</code></h6>
      <small>selected: {{selected2}}</small>
			<fv-select2 id="demoSelect3" :data-list="colors" data-display="displayName" data-value="value" v-model="selected2" allow-new="true" @add-value="getNewItem" placeholder="Select color"/>
      <br /> <br />

      <h6>Remove a value from the list</h6>
      <h6><code>allow-remove="true" @remove-value="getRemovedItem"</code></h6>
      <small>selected: {{selected3}}</small>
			<fv-select2 id="demoSelect4" :data-list="colors" data-display="displayName" data-value="value" v-model="selected3" allow-remove="true" @remove-value="getRemovedItem" placeholder="Select color"/>
      <br /> <br />
		</div>
  `,
};
