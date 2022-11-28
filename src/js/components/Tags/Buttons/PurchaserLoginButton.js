import { GreenButton } from "./GreenButton.js";

const PurchaserLoginButton = () => {
    const button = GreenButton();
    button.setAttribute('id', 'loginButton');
    button.textContent = '로그인';

    return button;
}

export { PurchaserLoginButton };