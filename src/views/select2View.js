export const Select2View = {
  data: function () {
    return {
      countriesOld: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"],
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
    }
  },
  mounted: function () {
    EventBus.$on('get-new-item', this.getNewItem);
    EventBus.$on('get-removed-item', this.getRemovedItem);
  },
  methods: {
    getNewItem(item) {
     console.log('Added',item);
    },
    getRemovedItem(item) {
      console.log('Removed',item);
    },
  },
  template:
    `
		<div>
			<h3>Select2</h3>
      <br />

      <h6><code>id="demoSelect" :data-list=['val1', 'val2', ...] placeholder="Select country"</code></h6>
			<fv-select2 id="demoSelect" :data-list="colors" display="displayName" value="value" placeholder="Select country"/>
      <br /> <br />

      <h6><code>id="demoSelect2" data-selected="Red" placeholder="Select color"</code></h6>
			<fv-select2 id="demoSelect2" :data-list="colors" display="displayName" value="value" data-selected="colors[0]" placeholder="Select color"/>
      <br /> <br />

      <h6><code>allow-new="true"</code> User can add a new value which is not included in the list</h6>
			<fv-select2 id="demoSelect3" :data-list="colors" display="displayName" value="value" allow-new="true" add-event-name="get-new-item" placeholder="Select color"/>
      <br /> <br />

      <h6><code>allow-remove="true"</code> User can remove a value from the list</h6>
			<fv-select2 id="demoSelect4" :data-list="colors" display="displayName" value="value" allow-remove="true" remove-event-name="get-removed-item" placeholder="Select color"/>
      <br /> <br />
		</div>
  `,
};
