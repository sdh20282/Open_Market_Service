import { UnderBarInput } from "./UnderBarInput.js";
import { inputStyle } from "../../../styles/components/Inputs/IdInputStyle.js";

const IdInput = () => {
    const input = UnderBarInput();
    input.setAttribute('id', 'idInput');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', '아이디');
    inputStyle(input);

    return input;
}

export { IdInput };