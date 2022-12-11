const preventFromEvent = () => {
    const $form = document.querySelector('form');

    $form.addEventListener('click', (event) => {
        event.preventDefault();
    });

    $form.querySelectorAll('button').forEach((item) => {
        item.addEventListener('click', (event) => {
            console.log(event.currentTarget);
        });
    });
}

const loginPageScript = async () => {
    preventFromEvent();
}

export default loginPageScript;