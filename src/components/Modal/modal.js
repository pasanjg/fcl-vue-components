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
    hasSlot(name = 'default') {
      return !!this.$slots[name] || !!this.$scopedSlots[name];
    },
    openModal: function (modalId, buttonid) {
      const body = document.body;
      const modal = document.getElementById(modalId);
      const modalContent = modal.getElementsByClassName("modal-content")[0];
      modal.style.backgroundColor = "rgba(0,0,0,0.5)"

      document.getElementById(buttonid).addEventListener("click", (e) => {
        modal.style.display = "block";
        modal.classList.add('modal', 'fade', 'show');
        body.classList.add('modal-open');
        modalContent.animate([
          { opacity: 0 },
          { transform: 'translateY(5px)' },
          { opacity: 1 },
        ], {
          duration: 300,
        });
      });
    },
    closeModal: function (modalId) {
      const body = document.body;
      const modal = document.getElementById(modalId);
      const close = document.querySelectorAll('[data-dismiss="modal"]');
      close.forEach((element) => {
        element.addEventListener('click', (e) => {
          modal.style.display = "none";
          modal.className = "modal fade";
          body.classList.remove('modal-open');
        });
      });

    },
  },
  template: `
  <div>
    <div class="modal fade" role="dialog" v-bind:id="modalId" tabindex="-1">
      <div v-bind:class="['modal-dialog', centerclass]">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="modalBody"></slot>
          </div>
          <div v-if="hasSlot('modalFooter')" class="modal-footer">
            <slot name="modalFooter"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
});