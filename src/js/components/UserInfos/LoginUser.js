import { InputFrom } from "../Tags/Forms/InputFrom.js";

import { EmptyFieldSet } from "../Tags/FieldSet/EmptyFieldSet.js";
import { IROnlyLegend } from "../Tags/Legend/irOnlyLegend.js";

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
import { LoginButton } from "../Tags/Buttons/LoginButton.js";

const LoginUser = () => {
    const form = InputFrom();

    // id
    const id_field = EmptyFieldSet();
    const id_legend = IROnlyLegend();
    const id_label = LoginPageIdLabel();
    const id_input = LoginPageIdInput();

    // pw
    const pw_field = EmptyFieldSet();
    const pw_legend = IROnlyLegend();
    const pw_label = LoginPagePasswordLabel();
    const pw_input = LoginPagePasswordInput();

    // valid check paragraph
    const notValid_paragraph = LoginPageNotValidParagraph();
    const empty_paragraph = LoginPageEmptyParagraph();

    // button
    const login_button = LoginButton();

    // set legends
    id_legend.textContent = '아이디 입력 영역';
    pw_legend.textContent = '비밀번호 입력 영역';

    form.appendChild(id_field);
    form.appendChild(pw_field);
    form.appendChild(notValid_paragraph);
    form.appendChild(empty_paragraph);
    form.appendChild(login_button);

    id_field.appendChild(id_label);
    id_field.appendChild(id_input);

    pw_field.appendChild(pw_label);
    pw_field.appendChild(pw_input);

    return form;
}

export { LoginUser };