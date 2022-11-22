const preventFromEvent = () => {
    const $form = document.querySelector('form');

    $form.addEventListener('click', (event) => {
        event.preventDefault();
    });
}

const initMainPageController = () => {
    preventFromEvent();
}

export default initMainPageController;