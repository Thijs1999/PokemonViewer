class ReloadView {
    #parentEL = document.querySelector('.nav__btn--reload');
  
    addHandlerRenderer(handler) {
    this.#parentEL.addEventListener('click', function (e) {
        e.preventDefault();
        handler();
    });
    }
  }
  
  export default new ReloadView();
  