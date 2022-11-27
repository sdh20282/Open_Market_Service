import { LoginFrom } from "../Tags/Forms/LoginFrom.js";
import { IdLabel } from "../Tags/Labels/IdLabel.js";
import { IdInput } from "../Tags/Inputs/IdInput.js";
import { PasswordLabel } from "../Tags/Labels/PasswordLabel.js";
import { PasswordInput } from "../Tags/Inputs/PasswordInput.js";

const LoginUser = () => {
    const form = LoginFrom();
    const id_label = IdLabel();
    const id_input = IdInput();
    const pw_label = PasswordLabel();
    const pw_input = PasswordInput();

    form.appendChild(id_label);
    form.appendChild(id_input);
    form.appendChild(pw_label);
    form.appendChild(pw_input);

    return form;
}

export { LoginUser };