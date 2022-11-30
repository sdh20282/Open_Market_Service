import { BoxInput } from "./BoxInput.js";
import { inputStyle } from "../../../styles/components/Inputs/RdgisterPagePWInputStyle.js";

const RdgisterPagePWInput = () => {
    const input = BoxInput();
    input.setAttribute('id', 'registerPWInput');
    inputStyle(input);

    return input;
}

export { RdgisterPagePWInput };