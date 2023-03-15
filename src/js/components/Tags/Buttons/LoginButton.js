import { GreenButton } from "./GreenButton.js";
import { buttonStyle } from "../../../styles/components/Buttons/LoginButtonStyle.js";

const LoginButton = () => {
    const button = GreenButton();
    buttonStyle(button);
    button.setAttribute('id', 'loginButton');
    button.textContent = '로그인';

    return button;
}

export { LoginButton };