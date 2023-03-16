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
                alert(result.FAIL_Message);
                return;
            }

            alert(result.Success);
            $input.setAttribute('readonly', true);
            $input.style.backgroundColor = '#ccc';
            $input.style.outline = '0';
            idChecked = true;
        } catch (error) {
            alert('중복 검사 실패 : ' + error);
            console.log(error);
        }
    });
}

const RegisterPageScript = async (state) => {
    preventFromEvent();
    initSelectTab();
    initDuplicateCheck(state);
}

export default RegisterPageScript;