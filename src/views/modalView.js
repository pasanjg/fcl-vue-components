const ModalView = {
	props: ['contentclass'],
	data() {
		return {
			message: "",
		};
	},
	template: `
		<div>
			<h3>Modal</h3>

			<button id="demoTrigger" type="button" class="btn btn-primary" data-toggle="modal" data-target="#demoModal">
      	Launch demo modal
    	</button>

			<fv-modal modalid="demoModal" buttonid="demoTrigger" title="Demo Modal" center="true">
			<template v-slot:body>
				<p>Modal content goes here</p>
			</template>
			<template v-slot:footer>
				<button id="modalClose" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary">Save changes</button>
			</template>
			</fv-modal>
		</div>
  `,
};