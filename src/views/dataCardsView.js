export const DataCardsView = {
  inject: ['fetcher'],
  data: function () {
    return {
      dataTemplate: `
      <div class="card">
        <div class="card-header">
          <i class="fab fa-vuejs"></i>
          <span></span>
        </div>
        <div class="card-body">
          {{data}}
        </div>
      </div>
      `,
    }
  },
  methods: {

  },
  template:
    `
		<div>
			<h3>DataCards</h3>
      <br />
			<fv-datacards :data-template="dataTemplate">
        <p>dsdsds</p>
      <fv-datacards/>
		</div>
  `,
};
