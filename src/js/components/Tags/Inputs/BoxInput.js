import { inputStyle } from "../../../styles/components/Inputs/BoxInputStyle.js";

const BoxInput = () => {
    const input = document.createElement('input');
    inputStyle(input);

    return input;
}

export { BoxInput };