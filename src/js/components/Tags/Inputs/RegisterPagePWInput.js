import { BoxInput } from "./BoxInput.js";
import { inputStyle } from "../../../styles/components/Inputs/RegisterPagePWInputStyle.js";

const RegisterPagePWInput = () => {
    const input = BoxInput();
    input.setAttribute('id', 'registerPWInput');
    input.setAttribute('type', 'password');
    inputStyle(input);

    return input;
}

export { RegisterPagePWInput };