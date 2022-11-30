import { BoxInput } from "./BoxInput.js";
import { inputStyle } from "../../../styles/components/Inputs/RegisterPageIdInputStyle.js";

const RegisterPageIdInput = () => {
    const input = BoxInput();
    input.setAttribute('id', 'registerIDInput');
    inputStyle(input);

    return input;
}

export { RegisterPageIdInput };