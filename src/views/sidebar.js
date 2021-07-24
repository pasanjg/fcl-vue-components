export const Sidebar = {
  template:
    `
	<div class="list-group sidebar bg-light">
		<router-link to="/" class="list-group-item list-group-item-action rounded-0 bg-danger text-white">FV Components</router-link>
		<router-link to="/tabs" class="list-group-item list-group-item-action rounded-0">Tabs</router-link>
		<router-link to="/collapse" class="list-group-item list-group-item-action rounded-0">Collapse</router-link>
		<router-link to="/modal" class="list-group-item list-group-item-action rounded-0">Modal</router-link>
		<router-link to="/tags" class="list-group-item list-group-item-action rounded-0">Tags</router-link>
		<router-link to="/popover" class="list-group-item list-group-item-action rounded-0">Popover</router-link>
		<router-link to="/carousel" class="list-group-item list-group-item-action rounded-0">Carousel</router-link>
		<router-link to="/progress" class="list-group-item list-group-item-action rounded-0">Progress</router-link>
		<router-link to="/feedback" class="list-group-item list-group-item-action rounded-0">Rating</router-link>
		<router-link to="/select2" class="list-group-item list-group-item-action rounded-0">Select2</router-link>
		<router-link to="/vue-chartjs" class="list-group-item list-group-item-action rounded-0">Vue-ChartJS</router-link>
    <div class="list-group-item list-group-item-action rounded-0 bg-secondary text-white">External / Draft</div>  <!-- External / Draft -->
		<router-link to="/data-table" class="list-group-item list-group-item-action rounded-0">DataTable</router-link>
		<router-link to="/datepicker" class="list-group-item list-group-item-action rounded-0">DatePicker</router-link>
		<router-link to="/vuelidate" class="list-group-item list-group-item-action rounded-0">Vuelidate </router-link>
	</div>
	`,
};
