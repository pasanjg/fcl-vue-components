export const LoadingView = {
  data: function () {
    return {
      isLoading: true,
      dataFetched: [],
    }
  },
  inject: ['fetcher'],
  mounted: function () {
    setTimeout(() => {
      this.getData();
    }, 3000);
  },
  methods: {
    async getData() {
      const vm = this;
      const url = "https://jsonplaceholder.typicode.com/users"
      await this.fetcher(url).then(data => {
        vm.dataFetched = data;
        vm.isLoading = false;
        console.log(vm.isLoading);
      });
    },
  },
  template:
    `
		<div>
			<h3>Loading</h3>
      <br />

      <a href="https://github.com/rihanrahul/vue-tiny-loading-overlay"><h5>Docs</h5></a>

      {{isLoading}} <br />
      {{dataFetched}}

      <div class="card" style="width: 18rem;" v-loading="isLoading">
        <img src="https://ytimg.googleusercontent.com/vi/b85iLY-wQXI/hqdefault.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <br /> <br />
		</div>
  `,
};
