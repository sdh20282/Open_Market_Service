import { GreenButton } from "./GreenButton.js";
import { buttonStyle } from "../../../styles/components/Buttons/RegisterButtonStyle.js";

const RegisterButton = () => {
    const button = GreenButton();
    buttonStyle(button);
    button.setAttribute('id', 'registerButton');
    button.textContent = '가입하기';

    return button;
}

export { RegisterButton };