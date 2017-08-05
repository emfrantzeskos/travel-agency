import $ from 'jquery';

class Modal {
  constructor() {
    this.modal = $('.modal');
    this.body = $('#home');
    this.openModalButton = $('.open-modal');
    this.closeModalButton = $('.modal__close');
    this.events();
  }

  events() {
    // clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this));
    // clicking the x close modal button
    this.closeModalButton.click(this.closeModal.bind(this));
    // pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  openModal() {
    this.modal.addClass('modal--is-visible');
    this.body.addClass('no-scroll');
    return false;
  }

  closeModal() {
    this.modal.removeClass('modal--is-visible');
    this.body.removeClass('no-scroll');
  }

  keyPressHandler(event) {
    if (event.keyCode === 27) { // when the ESC key is pressed, close the modal
      this.closeModal();
    }
  }
}

export default Modal;
