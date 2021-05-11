import

	new Vue({
		data: () => ({ message: 'Row' }),
		template: `
	<div>
		<h1>{{message}} your boat</h1>
		<button v-on:click="message += ' row'">Add</button>
	</div>
	`
	}).$mount('#root');