import { LoginFrom } from "../Tags/Forms/LoginFrom.js";
import { IdLabel } from "../Tags/Labels/IdLabel.js";
import { IdInput } from "../Tags/Inputs/IdInput.js";
import { PasswordLabel } from "../Tags/Labels/PasswordLabel.js";
import { PasswordInput } from "../Tags/Inputs/PasswordInput.js";
import { PurchaserLoginButton } from "../Tags/Buttons/PurchaserLoginButton.js";
import { SellerLoginButton } from "../Tags/Buttons/SellerLoginButton.js";

const LoginUser = () => {
    const form = LoginFrom();
    const id_label = IdLabel();
    const id_input = IdInput();
    const pw_label = PasswordLabel();
    const pw_input = PasswordInput();
    const purchaser_login_button = PurchaserLoginButton();
    const seller_login_button = SellerLoginButton();

    form.appendChild(id_label);
    form.appendChild(id_input);
    form.appendChild(pw_label);
    form.appendChild(pw_input);
    form.appendChild(purchaser_login_button);
    form.appendChild(seller_login_button);

    return form;
}

export { LoginUser };