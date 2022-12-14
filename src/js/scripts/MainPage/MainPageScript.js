const preventFromEvent = () => {
    const $form = document.querySelector('form');

    $form.addEventListener('click', (event) => {
        event.preventDefault();
    });
}

const MainPageScript = async () => {
    preventFromEvent();
}

export default MainPageScript;