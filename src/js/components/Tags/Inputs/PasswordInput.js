import { UnderBarInput } from "./UnderBarInput.js";
import { inputStyle } from "../../../styles/components/Inputs/PasswordInputStyle.js";

const PasswordInput = () => {
    const input = UnderBarInput();
    input.setAttribute('id', 'passwordInput');
    input.setAttribute('type', 'password');
    input.setAttribute('placeholder', '비밀번호');
    inputStyle(input);

    return input;
}

export { PasswordInput };