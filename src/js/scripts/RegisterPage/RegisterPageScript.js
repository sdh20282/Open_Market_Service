import FetchTemplate from "../utils/FetchTemplate.js";

let purchaserSelected = true;
let idChecked = false;

const preventFromEvent = () => {
    const $form = document.querySelector('form');

    window.addEventListener('click', () => {
        document.querySelector('#PhoneSelectUl').style.display = 'none';
        document.querySelector('#phoneSelectButton > img').style.transform = 'rotate(0)';
    });

    $form.addEventListener('click', (event) => {
        event.preventDefault();
    });
}

const initSelectTab = () => {
    const $purchaserTab = document.querySelector('#selectPurchaser');
    const $sellerTab = document.querySelector('#selectSeller');
    const $form = document.querySelector('form');
    const $hiddenFields = $form.querySelectorAll('#hiddenFieldSet');

    $purchaserTab.addEventListener('click', () => {
        $purchaserTab.style.backgroundColor = 'white';
        $purchaserTab.style.zIndex = '100';
        $sellerTab.style.backgroundColor = '#F2F2F2';
        $sellerTab.style.zIndex = '0';
        $form.style.borderRadius = '0 10px 10px 10px';

        $hiddenFields.forEach(field => {
            field.style.display = 'none';
        });

        purchaserSelected = true;
    });

    $sellerTab.addEventListener('click', () => {
        $purchaserTab.style.backgroundColor = '#F2F2F2';
        $purchaserTab.style.zIndex = '0';
        $sellerTab.style.backgroundColor = 'white';
        $sellerTab.style.zIndex = '100';
        $form.style.borderRadius = '10px 0 10px 10px';

        $hiddenFields.forEach(field => {
            field.style.display = 'block';
        });

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
            $inputCheck.style.display = 'block';
            $inputCheck.style.color = '#EB5757';
            $inputCheck.textContent = '아아디를 입력해주세요.';
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
                $input.setAttribute('readonly', true);
                $input.style.backgroundColor = '#ccc';
                $input.style.outline = '0';

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
    const $p = $form.querySelector('#passwordNotValidParagraph');

    $inputCheck.addEventListener('input', () => {
        if (!$inputCheck.value || $inputCheck.value != $input.value) {
            $img.setAttribute('src', '/src/images/icon-check-off.png');
            $p.style.display = 'block';
            $inputCheck.classList.add('notValid');
        } else {
            $img.setAttribute('src', '/src/images/icon-check-on.png');
            $p.style.display = 'none';
            $inputCheck.classList.remove('notValid');
        }
    });
}

const initPhoneInput = () => {
    const $form = document.querySelector('form');
    const $phoneFirstButton = $form.querySelector('#phoneSelectButton');
    const $phoneFirstList = $form.querySelector('#PhoneSelectUl');
    const $buttonImg = $phoneFirstButton.querySelector('button > img');
    const $buttonList = $phoneFirstList.querySelectorAll('button');

    $phoneFirstButton.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (window.getComputedStyle($phoneFirstList).display == 'none') {
            $phoneFirstList.style.display = 'block';
            $buttonImg.style.transform = 'rotate(180deg)';
        } else {
            $phoneFirstList.style.display = 'none';
            $buttonImg.style.transform = 'rotate(0)';
        }
    });

    $buttonList.forEach(button => {
        button.addEventListener('click', (event) => {
           $phoneFirstButton.querySelector('span').textContent = button.textContent;
           $phoneFirstList.style.display = 'none'; 
           $buttonImg.style.transform = 'rotate(0)';
        });
    });
}

const RegisterPageScript = async (state) => {
    preventFromEvent();
    initSelectTab();
    initDuplicateCheck(state);
    initPasswordInput();
    initPasswordCheckInput();
    initPhoneInput();
}

export default RegisterPageScript;