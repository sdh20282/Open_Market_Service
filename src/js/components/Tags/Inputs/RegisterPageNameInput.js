import { BoxInput } from "./BoxInput.js";
import { inputStyle } from "../../../styles/components/Inputs/RegisterPagePWInputStyle.js";

const RegisterPageNameInput = () => {
    const input = BoxInput();
    input.setAttribute('id', 'registerNameInput');
    inputStyle(input);

    return input;
}

export { RegisterPageNameInput };