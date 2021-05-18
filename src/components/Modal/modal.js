Vue.component('fv-modal', {
  props: ['contentclass', 'title', 'modalid', 'buttonid', 'center'],
  data: function () {
    return {
      id: undefined,
      centerclass: '',
    }
  },
  mounted() {
    this.id = this.modalid;
    this.centerclass = this.center ? 'modal-dialog-centered' : '';
    this.openModal(this.modalid, this.buttonid);
    this.closeModal(this.modalid);
  },
  methods: {
    openModal: function (modalid, buttonid) {
      var modal = document.getElementById(modalid);

      document.getElementById(buttonid).addEventListener("click", function (e) {
        modal.style.display = "block";
        modal.className = "modal fade show";
      });
    },
    closeModal: function (modalid) {
      var modal = document.getElementById(modalid);
      var close = document.getElementById('modalClose');

      close.addEventListener('click', (e) => {
        modal.style.display = "none";
        modal.className = "modal fade";
      });
    }
  },
  template: `
  <div>
    <div class="modal fade" v-bind:id="modalid" tabindex="-1">
      <div v-bind:class="['modal-dialog', centerclass]">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ title }}</h5>
            <button id="modalClose" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
});