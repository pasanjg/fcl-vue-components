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

    <button id="modalTrigger" type="button" class="btn btn-primary" data-toggle="modal" data-target="#demoModal">
      Launch demo modal
    </button>

    <fv-modal modalId="demoModal" buttonid="modalTrigger" title="Demo Modal" center="true">
      <template v-slot:modalBody>
        <p>Modal content goes here</p>
      </template>
      <template v-slot:modalFooter>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </template>
    </fv-modal>

    <br />

    <button id="modalTrigger2" type="button" class="btn btn-primary" data-toggle="modal" data-target="#demoModal2">
      Launch demo modal 2
    </button>


    <fv-modal modalId="demoModal2" buttonid="modalTrigger2" title="Demo Modal 2" center="true">
      <template v-slot:modalBody>
        <p>Modal content goes here</p>
      </template>
      <template v-slot:modalFooter>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </template>
    </fv-modal>
  </div>
  `,
};