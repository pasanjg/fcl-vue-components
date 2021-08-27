export const ModalView = {
  template:
    `
    <div>
      <h3>Modal</h3>
      <br />

      <h6>Basic usage</h6>
      <br />

      <textarea class="code-snippet" rows="13" readonly>
      &lt;button id="modalTrigger" type="button" class="btn btn-primary" data-toggle="modal" data-target="#demoModal"&gt;
        Launch default demo modal
      &lt;/button&gt;

      &lt;fv-modal id="demoModal" trigger="modalTrigger" title="Default Demo Modal"&gt;
        &lt;template v-slot:modalBody&gt;
          &lt;p&gt;Modal content goes here&lt;/p&gt;
        &lt;/template&gt;
        &lt;template v-slot:modalFooter&gt;
          &lt;button type="button" class="btn btn-secondary" data-dismiss="modal"&gt;Close&lt;/button&gt;
          &lt;button type="button" class="btn btn-primary"&gt;Save changes&lt;/button&gt;
        &lt;/template&gt;
      &lt;/fv-modal&gt;</textarea> <br /> <br />

      <button id="modalTrigger" type="button" class="btn btn-primary" data-toggle="modal" data-target="#demoModal">
        Launch default demo modal
      </button>

      <fv-modal id="demoModal" trigger="modalTrigger" title="Default Demo Modal">
        <template v-slot:modalBody>
          <p>Modal content goes here</p>
        </template>
        <template v-slot:modalFooter>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </template>
      </fv-modal>

      <br /> <hr /> <br />

      <h6>Center position</h6>
      <code>center="true"</code> <br /> <br />

      <textarea class="code-snippet" rows="3" readonly>
      &lt;fv-modal id="demoModal2" trigger="modalTrigger2" title="Demo Modal Center" center="true"&gt;
        ...
      &lt;/fv-modal&gt;</textarea> <br /> <br />

      <button id="modalTrigger2" type="button" class="btn btn-primary" data-toggle="modal" data-target="#demoModal2">
        Launch center modal
      </button>

      <fv-modal id="demoModal2" trigger="modalTrigger2" title="Demo Modal Center" center="true">
        <template v-slot:modalBody>
          <div className="text-center">
            <img align="center" src="https://enlivenhq.com/wp-content/uploads/2014/08/github-banner-770x425.png" width="100%" alt="" />
          </div>
        </template>
        <template v-slot:modalFooter>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </template>
      </fv-modal>
    </div>
  `,
};
