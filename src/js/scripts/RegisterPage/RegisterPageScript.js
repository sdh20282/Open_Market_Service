import FetchTemplate from "../utils/FetchTemplate.js";

let purchaserSelected = true;
let idChecked = false;

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

const initDuplicateCheck = (state) => {
    const $form = document.querySelector('form');
    const $input = $form.querySelector('#registerIDInput');
    const $button = $form.querySelector('#checkDuplication');
    const $inputCheck = $form.querySelector('#validParagraph');

    $button.addEventListener('click', async () => {
        if (idChecked) {
            return;
        }

        if (!$input.value) {
            alert("아아디를 입력해주세요.");
            return;
        }

        try {
            const response = await FetchTemplate({
                state: state,
                path: 'accounts/signup/valid/username/',
                method: "POST",
                needToken: false,
                body: JSON.stringify({
                    "username": $input.value,
                })
            });

            const result = await response.json();

            if (result.FAIL_Message) {
                $inputCheck.style.display = 'block';
                $inputCheck.style.color = '#EB5757';
                $inputCheck.textContent = result.FAIL_Message;
                return;
            }

            if (result.Success) {
                // $input.setAttribute('readonly', true);
                // $input.style.backgroundColor = '#ccc';
                // $input.style.outline = '0';

                $inputCheck.style.display = 'block';
                $inputCheck.style.color = '#21BF48';
                $inputCheck.textContent = result.Success;

                idChecked = true;
            }
        } catch (error) {
            alert('중복 검사 실패 : ' + error);
            console.log(error);
        }
    });
}

const initPasswordInput = () => {
    const $form = document.querySelector('form');
    const $input = $form.querySelector('#registerPWInput');
    const $img = $form.querySelector('#pwCheckOffImage');

    $input.addEventListener('input', () => {
        if (!$input.value) {
            $img.setAttribute('src', '/src/images/icon-check-off.png');
        } else {
            $img.setAttribute('src', '/src/images/icon-check-on.png');
        }
    });
}

const initPasswordCheckInput = () => {
    const $form = document.querySelector('form');
    const $input = $form.querySelector('#registerPWInput');
    const $inputCheck = $form.querySelector('#registerPWCheckInput');
    const $img = $form.querySelector('#pwConfirmCheckOffImage');

    $inputCheck.addEventListener('input', () => {
        if (!$inputCheck.value) {
            $img.setAttribute('src', '/src/images/icon-check-off.png');
        } else if ($inputCheck.value != $input.value) {
            $img.setAttribute('src', '/src/images/icon-check-off.png');
        } else {
            $img.setAttribute('src', '/src/images/icon-check-on.png');
        }
    });
}

const RegisterPageScript = async (state) => {
    preventFromEvent();
    initSelectTab();
    initDuplicateCheck(state);
    initPasswordInput();
    initPasswordCheckInput();
}

export default RegisterPageScript;