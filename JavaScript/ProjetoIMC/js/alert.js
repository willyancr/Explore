export const popupAlert = {
    //váriavel
    msgAlertContainer: document.querySelector('.msgAlert-container'),

    open() {
        popupAlert.msgAlertContainer.classList.add('open')
    },
    close() {
        popupAlert.msgAlertContainer.classList.remove('open')
    }

}