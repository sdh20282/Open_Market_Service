import { BoxInput } from "./BoxInput.js";
import { inputStyle } from "../../../styles/components/Inputs/RegisterPagePhoneInputStyle.js";

const RegisterPagePhoneTailInput = () => {
    const input = BoxInput();
    input.setAttribute('id', 'registerPhoneTail');
    inputStyle(input);

    return input;
}

export { RegisterPagePhoneTailInput };