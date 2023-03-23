import { BoxInput } from "./BoxInput.js";
import { inputStyle } from "../../../styles/components/Inputs/RegisterPageSellerNoInputStyle.js";

const RegisterPageSellerNoInput = () => {
    const input = BoxInput();
    input.setAttribute('id', 'registerSellerNoInput');
    inputStyle(input);

    return input;
}

export { RegisterPageSellerNoInput };