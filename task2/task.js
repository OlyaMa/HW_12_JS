const popup = document.getElementById('subscribe-modal');
const popupClose = document.querySelector('#subscribe-modal .modal__close');

popup.classList.add('modal_active')


if (document.cookie.includes('status=close')) {
    popup.className = 'modal'
}

popupClose.addEventListener('click', () => {
    if (popup.classList.contains('modal_active')) {
        popup.classList.remove('modal_active')
        setCookie('status', 'close')
    }
})

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value)
}