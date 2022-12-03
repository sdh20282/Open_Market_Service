import { BoxInput } from "./BoxInput.js";
import { inputStyle } from "../../../styles/components/Inputs/RegisterPageNameInputStyle.js";

const RegisterPageNameInput = () => {
    const input = BoxInput();
    input.setAttribute('id', 'registerNameInput');
    inputStyle(input);

    return input;
}

export { RegisterPageNameInput };