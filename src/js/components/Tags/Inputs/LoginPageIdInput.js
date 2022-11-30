import { UnderBarInput } from "./UnderBarInput.js";
import { inputStyle } from "../../../styles/components/Inputs/IdInputStyle.js";

const LoginPageIdInput = () => {
    const input = UnderBarInput();
    input.setAttribute('id', 'loginIDInput');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', '아이디');
    inputStyle(input);

    return input;
}

export { LoginPageIdInput };