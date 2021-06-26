export const DatePickerView = {
  data: function () {
    return {
      date1: Date(2016, 9, 16),
      date2: Date(2016, 9, 16),
      date3: Date(2016, 9, 16),
    }
  },
  template:
    `
		<div>
			<h3>vue2-datepicker</h3>
      <br />

      <a href="https://www.npmjs.com/package/vue2-datepicker">NPM Package</a>
      <br /> <br />

      <table class="table w-100">
        <tr>
          <th>Formatted Date</th>
          <th>Date Time</th>
          <th>Range selection</th>
        </tr>
        <tr>
          <td>
            <date-picker v-model="date1" valueType="format"></date-picker>
          </td>
          <td>
            <date-picker v-model="date2" type="datetime"></date-picker>
          </td>
          <td>
            <date-picker v-model="date3" range></date-picker>
          </td>
        </tr>
      </table>
		</div>
  `,
};
