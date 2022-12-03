import { BoxInput } from "./BoxInput.js";
import { inputStyle } from "../../../styles/components/Inputs/RegisterPagePhoneInputStyle.js";

const RegisterPagePhoneMiddleInput = () => {
    const input = BoxInput();
    input.setAttribute('id', 'registerPhoneMiddle');
    inputStyle(input);

    return input;
}

export { RegisterPagePhoneMiddleInput };