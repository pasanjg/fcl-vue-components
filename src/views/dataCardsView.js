export const DataCardsView = {
  inject: ['fetcher'],
  data: function () {
    return {
      dataTemplate: `
      <div class="row">
        <div class="col-md-3 mb-3" v-for="(data, index) in dataList" v-bind:key="data.name">
          <div class="card">
            <div class="card-header">
              <i :class="data.icon"></i> {{index}} &nbsp;
              <span>{{data.name}}</span>
            </div>
            <div class="card-body">
              {{data.body}}
            </div>
            <div class="card-footer">
              {{data.email}}
            </div>
          </div>
        </div>
      </div>
      `,
      dataList:[],
      dataList2: [
        {
          name: 'Vue.js',
          description: 'Vue.js is a progressive framework for building user interfaces.',
          icon: 'fab fa-vuejs'
        },
        {
          name: 'Vuex',
          description: 'Vuex is a state management pattern and library for Vue.js applications.',
          icon: 'fas fa-cubes'
        },
        {
          name: 'Vue Router',
          description: 'Vue Router is a routing library for Vue.js applications.',
          icon: 'fas fa-route'
        },
        {
          name: 'Vuex Router Sync',
          description: 'Vuex Router Sync is a Vuex plugin that syncs the router with the store.',
          icon: 'fas fa-route'
        },
        {
          name: 'Vuex Persist',
          description: 'Vuex Persist is a Vuex plugin that makes it easy to persist the store.',
          icon: 'fas fa-route'
        },
        {
          name: 'Vuex-ORM',
          description: 'Vuex-ORM is a Vuex plugin that makes it easy to use Vuex with Vuex-ORM.',
          icon: 'fas fa-route'
        },
        {
          name: 'Vue-i18n',
          description: 'Vue-i18n is a Vue plugin that makes it easy to use internationalization.',
          icon: 'fas fa-language'
        },
        {
          name: 'Vue-Quill-Editor',
          description: 'Vue-Quill-Editor is a Vue plugin that makes it easy to use Quill Editor.',
          icon: 'fas fa-edit'
        },
      ],
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const url = "https://jsonplaceholder.typicode.com/comments";
        this.dataList = await this.fetcher(url);
        console.log(this.dataList);
    },
  },
  template:
    `
		<div>
			<h3>DataCards</h3>
      <br />
			<fv-datacards :col="3" :data-list="dataList" :data-template="dataTemplate" />
		</div>
  `,
};
