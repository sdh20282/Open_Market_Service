import { UnderBarInput } from "./UnderBarInput.js";
import { inputStyle } from "../../../styles/components/Inputs/PasswordInputStyle.js";

const LoginPagePasswordInput = () => {
    const input = UnderBarInput();
    input.setAttribute('id', 'loginPWInput');
    input.setAttribute('type', 'password');
    input.setAttribute('placeholder', '비밀번호');
    inputStyle(input);

    return input;
}

export { LoginPagePasswordInput };