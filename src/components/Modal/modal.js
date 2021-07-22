export const FvModal = {
  props: ['id', 'title', 'trigger', 'center'],
  data: function () {
    return {
      centerclass: this.center ? 'modal-dialog-centered' : '',
    }
  },
  mounted() {
    this.openModal(this.id, this.trigger);
    this.closeModal(this.id);
  },
  methods: {
    hasSlot(name = 'default') {
      return !!this.$slots[name] || !!this.$scopedSlots[name];
    },
    openModal: function (id, trigger) {
      const body = document.body;
      const modal = document.getElementById(id);
      const modalContent = modal.getElementsByClassName("modal-content")[0];
      modal.style.backgroundColor = "rgba(0,0,0,0.5)"

      document.getElementById(trigger).addEventListener("click", (e) => {
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
    closeModal: function (id) {
      const body = document.body;
      const modal = document.getElementById(id);
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
  template:
    `
  <div>
    <div class="modal fade" role="dialog" :id="id" tabindex="-1">
      <div :class="['modal-dialog', centerclass]">
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
};
