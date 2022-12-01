import { InputFrom } from "../Tags/Forms/InputFrom.js";
import { RegisterPageIdLabel } from "../Tags/Labels/RegisterPageIdLabel.js";
import { RegisterPageIdInput } from "../Tags/Inputs/RegisterPageIdInput.js";
import { IdDuplicationCheckButton } from "../Tags/Buttons/IdDuplicationCheckButton.js";
import { RegisterPagePWLabel } from "../Tags/Labels/RegisterPagePWLabel.js";
import { RegisterPagePWInput } from "../Tags/Inputs/RegisterPagePWInput.js";
import { RegisterPagePWCheckLabel } from "../Tags/Labels/RegisterPagePWCheckLabel.js";
import { RegisterPagePWCheckInput } from "../Tags/Inputs/RegisterPagePWCheckInput.js";
import { RegisterPageNameLabel } from "../Tags/Labels/RegisterPageNameLabel.js";
import { RegisterPageNameInput } from "../Tags/Inputs/RegisterPageNameInput.js";
import { RegisterPagePhoneLabel } from "../Tags/Labels/RegisterPagePhoneLabel.js";
import { RegisterPageMailLabel } from "../Tags/Labels/RegisterPageMailLabel.js";

const RegisterUser = () => {
    const form = InputFrom();
    const id_label = RegisterPageIdLabel();
    const id_input = RegisterPageIdInput();
    const id_button = IdDuplicationCheckButton();
    const pw_label = RegisterPagePWLabel();
    const pw_input = RegisterPagePWInput();
    const pw_check_label = RegisterPagePWCheckLabel();
    const pw_check_input = RegisterPagePWCheckInput();
    const name_label = RegisterPageNameLabel();
    const name_input = RegisterPageNameInput();
    const phone_label = RegisterPagePhoneLabel();
    const mail_label = RegisterPageMailLabel();
    
    form.appendChild(id_label);
    form.appendChild(id_input);
    form.appendChild(id_button);
    form.appendChild(pw_label);
    form.appendChild(pw_input);
    form.appendChild(pw_check_label);
    form.appendChild(pw_check_input);
    form.appendChild(name_label);
    form.appendChild(name_input);
    form.appendChild(phone_label);
    form.appendChild(mail_label);


    

    return form;
}

export { RegisterUser };