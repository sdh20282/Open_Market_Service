import { BoxInput } from "./BoxInput.js";
import { inputStyle } from "../../../styles/components/Inputs/RegisterPageStoreNameInputStyle.js";

const RegisterPageStoreNameInput = () => {
    const input = BoxInput();
    input.setAttribute('id', 'registerStoreNameInput');
    inputStyle(input);

    return input;
}

export { RegisterPageStoreNameInput };