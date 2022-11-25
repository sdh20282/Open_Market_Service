import { selectorDefaultStyle, formDefaultStyle, inputDefaultStyle, buttonDefaultStyle } from '../../components/Layouts/LoginPageLayouts.js'

const Main = () => {
    const main = document.createElement('main');
    main.style.width = '550px';
    main.style.margin = '0 auto';

    const temp = document.createElement('div');
    temp.style.content = 'asdf';
    temp.style.width = '10px';
    temp.style.height = '10px';
    temp.style.backgroundColor = 'red';
    
    const purchaserLoginSelect = document.createElement('button');
    selectorDefaultStyle(purchaserLoginSelect);
    purchaserLoginSelect.style.backgroundColor = 'white';
    purchaserLoginSelect.textContent = '구매회원 로그인';
    purchaserLoginSelect.after(temp);

    const sellerLoginSelect = document.createElement('button');
    selectorDefaultStyle(sellerLoginSelect);
    sellerLoginSelect.style.backgroundColor = '#F2F2F2';
    sellerLoginSelect.textContent = '판매회원 로그인';

    const loginForm = document.createElement('form');
    formDefaultStyle(loginForm);

    const iDInput = document.createElement('input');
    inputDefaultStyle(iDInput);
    iDInput.style.marginBottom = '6px';
    iDInput.setAttribute('placeholder', '아이디');
    
    const pWInput = document.createElement('input');
    inputDefaultStyle(pWInput);
    pWInput.style.marginBottom = '36px';
    pWInput.setAttribute('placeholder', '비밀번호');

    const purchaserLoginButton = document.createElement('button');
    buttonDefaultStyle(purchaserLoginButton);
    purchaserLoginButton.textContent = '로그인';

    const sellerLoginButton = document.createElement('button');
    buttonDefaultStyle(sellerLoginButton);
    sellerLoginButton.style.display = 'none';
    sellerLoginButton.textContent = '로그인';

    main.appendChild(purchaserLoginSelect);
    main.appendChild(sellerLoginSelect);
    main.appendChild(loginForm);
    loginForm.appendChild(iDInput);
    loginForm.appendChild(pWInput);
    loginForm.appendChild(purchaserLoginButton);
    loginForm.appendChild(sellerLoginButton);

    return main;
}

export default Main;