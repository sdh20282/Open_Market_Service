const preventFromEvent = () => {
    const $form = document.querySelector('form');

    $form.addEventListener('click', (event) => {
        event.preventDefault();
    });
}

const MainPageScript = async (state) => {
    preventFromEvent();

    console.log(state.getToken());
}

export default MainPageScript;