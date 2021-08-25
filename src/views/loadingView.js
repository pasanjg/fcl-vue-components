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
      const urls = ["https://jsonplaceholder.typicode.com/users", "https://jsonplaceholder.typicode.com/posts", "https://jsonplaceholder.typicode.com/todos"];

      const rand = Math.floor(Math.random() * 3);

      setTimeout(async () => await this.fetcher(urls[rand]).then(data => {
        vm.dataFetched = data;
        vm.isLoading = false;
      }), 2000);

    },
  },
  template:
    `
		<div>
			<h3>Loading</h3>
      <br />

      <a href="https://github.com/rihanrahul/vue-tiny-loading-overlay"><span class="h5">Docs</span></a> <br /> <br />

      Loading: <code>{{isLoading}}</code>
      <br /> <br />

      <div class="row">
        <div class="col-md-3">
          <div class="card" style="width: 18rem;" v-loading="isLoading">
            <img src="https://ytimg.googleusercontent.com/vi/b85iLY-wQXI/hqdefault.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary" @click="getData">Load data</a>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <textarea rows="19" class="code-snippet" readonly><pre>data: <br />{{dataFetched}}</pre></textarea>
        </div>
      </div>
		</div>
  `,
};
