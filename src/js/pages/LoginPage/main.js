export default () => {
    const main = document.createElement('main');
    main.style.width = '550px';
    main.style.margin = '0 auto';
    
    const purchaseLogin = document.createElement('button');
    purchaseLogin.style.width = '275px';
    purchaseLogin.style.height = '80px';
    purchaseLogin.textContent = '구매회원 로그인';
    purchaseLogin.style.border = 'border: 1px solid #C4C4C4';
    purchaseLogin.style.borderRadius = '10px';

    const registerLogin = document.createElement('button');
    registerLogin.style.width = '275px';
    registerLogin.style.height = '80px';
    registerLogin.textContent = '판매회원 로그인';
    registerLogin.style.border = 'border: 1px solid #C4C4C4';
    registerLogin.style.borderRadius = '10px';

    main.appendChild(purchaseLogin);
    main.appendChild(registerLogin);

    return main;
};