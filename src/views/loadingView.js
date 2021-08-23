export const LoadingView = {
  data: function () {
    return {
      isLoading: true,
      dataFetched: [],
    }
  },
  inject: ['fetcher'],
  mounted: function () {
    this.getData();
  },
  methods: {
    async getData() {
      const vm = this;
      this.isLoading = true;
      const urls = ["https://jsonplaceholder.typicode.com/users", "https://jsonplaceholder.typicode.com/posts"];
      const rand = Math.floor(Math.random() * (1 - 0 + 1)) + 0;

      setTimeout(async () => await this.fetcher(urls[rand]).then(data => {
        vm.dataFetched = data;
        vm.isLoading = false;
        console.log(vm.isLoading);
      }), 3000);

    },
  },
  template:
    `
		<div>
			<h3>Loading</h3>
      <br />

      <a href="https://github.com/rihanrahul/vue-tiny-loading-overlay"><h5>Docs</h5></a>

      Loading: {{isLoading}}
      <br /> <br />

      <div class="card" style="width: 18rem;" v-loading="isLoading">
        <img src="https://ytimg.googleusercontent.com/vi/b85iLY-wQXI/hqdefault.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary" @click="getData">Load data</a>
        </div>
      </div>
      <br />

      Loaded data: {{dataFetched}}
      <br /> <br />
		</div>
  `,
};
