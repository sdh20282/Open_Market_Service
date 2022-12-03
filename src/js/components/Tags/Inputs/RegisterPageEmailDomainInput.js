import { BoxInput } from "./BoxInput.js";
import { inputStyle } from "../../../styles/components/Inputs/RegisterPageEmailInputStyle.js";

const RegisterPageEmailDomainInput = () => {
    const input = BoxInput();
    input.setAttribute('id', 'registerEmailDomain');
    inputStyle(input);

    return input;
}

export { RegisterPageEmailDomainInput };