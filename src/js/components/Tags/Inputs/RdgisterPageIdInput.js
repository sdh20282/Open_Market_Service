import { BoxInput } from "./BoxInput.js";
import { inputStyle } from "../../../styles/components/Inputs/RdgisterPageIdInputStyle.js";

const RdgisterPageIdInput = () => {
    const input = BoxInput();
    input.setAttribute('id', 'registerIDInput');
    inputStyle(input);

    return input;
}

export { RdgisterPageIdInput };