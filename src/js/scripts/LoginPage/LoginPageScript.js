import { moveLink } from "../../router.js";

let purchaserSelected = true;

const preventFromEvent = () => {
    const $form = document.querySelector('form');

    $form.addEventListener('click', (event) => {
        event.preventDefault();
    });
}

const initSelectTab = () => {
    const $purchaserTab = document.querySelector('#selectPurchaser');
    const $sellerTab = document.querySelector('#selectSeller');
    const $form = document.querySelector('form');

    $purchaserTab.addEventListener('click', () => {
        $purchaserTab.style.backgroundColor = 'white';
        $purchaserTab.style.zIndex = '100';
        $sellerTab.style.backgroundColor = '#F2F2F2';
        $sellerTab.style.zIndex = '0';
        $form.style.borderRadius = '0 10px 10px 10px';
        purchaserSelected = true;
    });

    $sellerTab.addEventListener('click', () => {
        $purchaserTab.style.backgroundColor = '#F2F2F2';
        $purchaserTab.style.zIndex = '0';
        $sellerTab.style.backgroundColor = 'white';
        $sellerTab.style.zIndex = '100';
        $form.style.borderRadius = '10px 0 10px 10px';
        purchaserSelected = false;
    });
}

const initCheckInput = () => {
    const $form = document.querySelector('form');
    const $loginIDInput = $form.querySelector('#loginIDInput');
    const $loginPWInput = $form.querySelector('#loginPWInput');
    const $empty = $form.querySelector('#emptyParagraph');

    $loginIDInput.addEventListener('input', () => {
        if (!$loginIDInput.value) {
            $empty.style.display = 'block';
        } else {
            $empty.style.display = 'none';
        }
    });

    $loginPWInput.addEventListener('input', () => {
        if (!$loginPWInput.value) {
            $empty.style.display = 'block';
        } else {
            $empty.style.display = 'none';
        }
    });
}

const tryLogin = (state) => {
    const url = 'https://openmarket.weniv.co.kr/';

    const $form = document.querySelector('form');
    const $loginIDInput = $form.querySelector('#loginIDInput');
    const $loginPWInput = $form.querySelector('#loginPWInput');
    const $notValid = $form.querySelector('#notValidParagraph');
    const $loginButton = $form.querySelector('#loginButton');

    $loginButton.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!$loginIDInput.value || !$loginPWInput.value) {
            return;
        }

        try {
            const response = await fetch(url + 'accounts/login/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "username": $loginIDInput.value,
                    "password": $loginPWInput.value,
                    "login_type": purchaserSelected ? "BUYER" : "SELLER",
                }),
            });
            const result = await response.json();

            if (result.FAIL_Message) {
                $notValid.style.display = 'block';
                return;
            }

            $notValid.style.display = 'none';
            state.setToken(result.token);
            moveLink("/", state);
        } catch (error) {
            alert('로그인 실패 : ' + error);
            console.log(error);
        }
    });
}

const loginPageScript = async (state) => {
    if (state.getToken()) {
        moveLink("/", state);

        return;
    }

    preventFromEvent();
    initSelectTab();
    initCheckInput();
    tryLogin(state);
}

export default loginPageScript;