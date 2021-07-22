export const CollapseView = {
  template:
    `
    <div>
      <h3>Collapse</h3>
      <br />

      <div>
        <span>Add <code>id</code> to <code>data-target</code> attribute </span><code>data-target="#demoCollapse"</code>
      </div> <br />

      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#demoCollapse">
        Toggle Collapse 1
      </button>

      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#demoCollapse2">
        Toggle Collapse 2
      </button>

      <br /> <br />

      <span>Default active: </span>
      <code>class-name="show"</code> <br /> <br />

      <fv-collapse id="demoCollapse" class-name="show">
        <div class="card card-body">
          1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa non assumenda totam cupiditate fuga unde
          dicta quia quod porro culpa quidem nulla, explicabo voluptatem eum labore dolorum impedit voluptas obcaecati!
        </div>
        <br />
      </fv-collapse>

      <fv-collapse id="demoCollapse2">
        <div class="card card-body">
          2. Anim pariatur cliche reprehenderit, enim eiusmod high life
          accusamus terry richardson ad squid. Nihil anim keffiyeh
          helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident.
        </div>
      </fv-collapse>
    </div>
  `
};
