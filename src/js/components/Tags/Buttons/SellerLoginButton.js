import { GreenButton } from "./GreenButton.js";
import { buttonStyle } from "../../../styles/components/Buttons/SellerLoginButtonStyle.js";

const SellerLoginButton = () => {
    const button = GreenButton();
    buttonStyle(button);
    button.setAttribute('id', 'loginButton');
    button.textContent = '로그인';

    return button;
}

export { SellerLoginButton };