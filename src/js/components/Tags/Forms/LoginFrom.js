import { formStyle } from "../../../styles/components/Froms/LoginFormStyle.js";

const LoginFrom = () => {
    const form = document.createElement('form');
    formStyle(form);

    return form;
}

export { LoginFrom };