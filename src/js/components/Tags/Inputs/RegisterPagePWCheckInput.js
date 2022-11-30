import { RegisterPagePWInput } from "./RegisterPagePWInput.js";
import { inputStyle } from "../../../styles/components/Inputs/RegisterPagePWCheckInputStyle.js";

const RegisterPagePWCheckInput = () => {
    const input = RegisterPagePWInput();
    input.setAttribute('id', 'registerPWCheckInput');
    input.setAttribute('type', 'password');
    inputStyle(input);

    return input;
}

export { RegisterPagePWCheckInput };