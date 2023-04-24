const preventFromEvent = () => {
    const $form = document.querySelector('form');

    $form.addEventListener('click', (event) => {
        event.preventDefault();
    });
}

const initNavBar = (state) => {
    const anchors = document.querySelectorAll('#topBarNav a');

    if (state.getToken()) {
        anchors[1].style.display = 'none';
    } else {
        anchors[2].style.display = 'none';
    }
}

const MainPageScript = async (state) => {
    preventFromEvent();
    initNavBar(state);
}

export default MainPageScript;