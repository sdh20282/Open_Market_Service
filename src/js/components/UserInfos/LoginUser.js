import { InputFrom } from "../Tags/Forms/InputFrom.js";
import { LoginPageIdLabel } from "../Tags/Labels/LoginPageIdLabel.js";
import { LoginPageIdInput } from "../Tags/Inputs/LoginPageIdInput.js";
import { LoginPagePasswordLabel } from "../Tags/Labels/LoginPagePasswordLabel.js";
import { LoginPagePasswordInput } from "../Tags/Inputs/LoginPagePasswordInput.js";
import { PurchaserLoginButton } from "../Tags/Buttons/PurchaserLoginButton.js";
import { SellerLoginButton } from "../Tags/Buttons/SellerLoginButton.js";

const LoginUser = () => {
    const form = InputFrom();
    const id_label = LoginPageIdLabel();
    const id_input = LoginPageIdInput();
    const pw_label = LoginPagePasswordLabel();
    const pw_input = LoginPagePasswordInput();
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