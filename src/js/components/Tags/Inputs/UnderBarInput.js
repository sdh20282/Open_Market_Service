import { inputStyle } from "../../../styles/components/Inputs/UnderBarInputStyle.js";

const UnderBarInput = () => {
    const input = document.createElement('input');
    inputStyle(input);
    
    return input;
}

export { UnderBarInput };