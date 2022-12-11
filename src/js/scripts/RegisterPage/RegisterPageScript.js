const preventFromEvent = () => {
    const $form = document.querySelector('form');

    $form.addEventListener('click', (event) => {
        event.preventDefault();
    });
}

const RegisterPageScript = async () => {
    preventFromEvent();
}

export default RegisterPageScript;