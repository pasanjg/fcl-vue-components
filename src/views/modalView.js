export const ModalView = {
  props: ['contentclass'],
  template:
    `
    <div>
      <h3>Modal</h3>
      <br />

      <button id="modalTrigger" type="button" class="btn btn-primary" data-toggle="modal" data-target="#demoModal">
        Launch default demo modal
      </button>

      <fv-modal modalId="demoModal" buttonid="modalTrigger" title="Default Demo Modal">
        <template v-slot:modalBody>
          <p>Modal content goes here</p>
        </template>
        <template v-slot:modalFooter>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </template>
      </fv-modal>

      <br />
      <br />

      <code>center="true"</code> <br /> <br />
      <button id="modalTrigger2" type="button" class="btn btn-primary" data-toggle="modal" data-target="#demoModal2">
        Launch demo modal center
      </button>

      <fv-modal modalId="demoModal2" buttonid="modalTrigger2" title="Demo Modal Center" center="true">
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
