import { BoxInput } from "./BoxInput.js";
import { inputStyle } from "../../../styles/components/Inputs/RegisterPageEmailInputStyle.js";

const RegisterPageEmailIDInput = () => {
    const input = BoxInput();
    input.setAttribute('id', 'registerEmailID');
    inputStyle(input);

    return input;
}

export { RegisterPageEmailIDInput };