const CollapseView = {
  data() {
    return {
      message: "",
    };
  },
  template:
    `
    <div>
      <h3>Collapse</h3>
      <br /> <br />
    
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#demoCollapse">
        Button with data-target
      </button>

      <br /> <br />
      
      <fv-collapse collapseId="demoCollapse" contentclass="show">
        <div class="card card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life 
          accusamus terry richardson ad squid. Nihil anim keffiyeh 
          helvetica, craft beer labore wes anderson cred nesciunt 
          sapiente ea proident.
        </div>
      </fv-collapse>
    </div>
  `
};