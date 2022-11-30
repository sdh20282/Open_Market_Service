import { GreenButton } from "./GreenButton.js";
import { buttonStyle } from "../../../styles/components/Buttons/PurchaserLoginButtonStyle.js";

const PurchaserLoginButton = () => {
    const button = GreenButton();
    buttonStyle(button);
    button.setAttribute('id', 'loginButton');
    button.textContent = '로그인';

    return button;
}

export { PurchaserLoginButton };