import { UnderBarInput } from "./UnderBarInput.js";

const PasswordInput = () => {
    const input = UnderBarInput();
    input.setAttribute('id', 'passwordInput');
    input.setAttribute('type', 'password');
    input.setAttribute('placeholder', '비밀번호');

    return input;
}

export { PasswordInput };