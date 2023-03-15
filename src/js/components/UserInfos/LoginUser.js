import { InputFrom } from "../Tags/Forms/InputFrom.js";

// id
import { LoginPageIdLabel } from "../Tags/Labels/LoginPageIdLabel.js";
import { LoginPageIdInput } from "../Tags/Inputs/LoginPageIdInput.js";

// password
import { LoginPagePasswordLabel } from "../Tags/Labels/LoginPagePasswordLabel.js";
import { LoginPagePasswordInput } from "../Tags/Inputs/LoginPagePasswordInput.js";

// valid paragraph
import { LoginPageNotValidParagraph } from "../Tags/Paragraphs/LoginPageNotValidParagraph.js";
import { LoginPageEmptyParagraph } from "../Tags/Paragraphs/LoginPageEmptyParagraph.js";

// button
import { PurchaserLoginButton } from "../Tags/Buttons/PurchaserLoginButton.js";

const LoginUser = () => {
    const form = InputFrom();
    const id_label = LoginPageIdLabel();
    const id_input = LoginPageIdInput();
    const pw_label = LoginPagePasswordLabel();
    const pw_input = LoginPagePasswordInput();
    const notValid_paragraph = LoginPageNotValidParagraph();
    const empty_paragraph = LoginPageEmptyParagraph();
    const purchaser_login_button = PurchaserLoginButton();

    form.appendChild(id_label);
    form.appendChild(id_input);
    form.appendChild(pw_label);
    form.appendChild(pw_input);
    form.appendChild(notValid_paragraph);
    form.appendChild(empty_paragraph);
    form.appendChild(purchaser_login_button);

    return form;
}

export { LoginUser };