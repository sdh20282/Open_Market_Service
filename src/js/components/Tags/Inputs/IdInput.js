import { UnderBarInput } from "./UnderBarInput.js";

const IdInput = () => {
    const input = UnderBarInput();
    input.setAttribute('id', 'idInput');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', '아이디');

    return input;
}

export { IdInput };