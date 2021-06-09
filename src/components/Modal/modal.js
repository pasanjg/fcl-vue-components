Vue.component('fv-modal', {
  props: ['title', 'modalId', 'buttonid', 'center'],
  data: function () {
    return {
      id: undefined,
      centerclass: '',
    }
  },
  mounted() {
    this.id = this.modalId;
    this.centerclass = this.center ? 'modal-dialog-centered' : '';
    this.openModal(this.modalId, this.buttonid);
    this.closeModal(this.modalId);
  },
  methods: {
    openModal: function (modalId, buttonid) {
      const body = document.body;
      const modal = document.getElementById(modalId);

      document.getElementById(buttonid).addEventListener("click", (e) => {
        modal.style.display = "block";
        modal.classList.add('modal', 'fade', 'show');
        body.classList.add('modal-open');
        modal.animate([
          {opacity: 0},
          {transform: 'translateY(0px)'},
          {opacity: 1},
        ], {
          duration: 200,
        });
      });
    },
    closeModal: function (modalId) {
      const body = document.body;
      const modal = document.getElementById(modalId);
      const close = document.getElementById('modalClose');

      close.addEventListener('click', (e) => {
        modal.style.display = "none";
        modal.className = "modal fade";
        body.classList.remove('modal-open');
      });
    }
  },
  template: `
  <div>
    <div class="modal fade" role="dialog" v-bind:id="modalId" tabindex="-1">
      <div v-bind:class="['modal-dialog', centerclass]">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ title }}</h5>
            <button id="modalClose" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="modal-body"></slot>
          </div>
          <div class="modal-footer">
            <slot name="modal-footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
});