import { InputFrom } from "../Tags/Forms/InputFrom.js";

// id
import { RegisterPageIdLabel } from "../Tags/Labels/RegisterPageIdLabel.js";
import { RegisterPageIdInput } from "../Tags/Inputs/RegisterPageIdInput.js";
import { IdDuplicationCheckButton } from "../Tags/Buttons/IdDuplicationCheckButton.js";

// pw
import { RegisterPagePWLabel } from "../Tags/Labels/RegisterPagePWLabel.js";
import { CheckImageDiv } from "../Tags/Divs/checkImageDiv.js";
import { RegisterPagePWInput } from "../Tags/Inputs/RegisterPagePWInput.js";
import { PWCheckOffImage } from "../Tags/Images/PWCheckOffImage.js";

// pw check
import { RegisterPagePWCheckLabel } from "../Tags/Labels/RegisterPagePWCheckLabel.js";
import { RegisterPagePWCheckInput } from "../Tags/Inputs/RegisterPagePWCheckInput.js";
import { PWConfirmCheckOffImage } from "../Tags/Images/PWConfirmCheckOffImage.js";

// name
import { RegisterPageNameLabel } from "../Tags/Labels/RegisterPageNameLabel.js";
import { RegisterPageNameInput } from "../Tags/Inputs/RegisterPageNameInput.js";

// phone
import { RegisterPagePhoneLabel } from "../Tags/Labels/RegisterPagePhoneLabel.js";
import { PhoneSelect } from "../Tags/Selects/PhoneSelect.js";
import { RegisterPagePhoneMiddleInput } from "../Tags/Inputs/RegisterPagePhoneMiddleInput.js";
import { RegisterPagePhoneTailInput } from "../Tags/Inputs/RegisterPagePhoneTailInput.js";

// mail
import { RegisterPageMailLabel } from "../Tags/Labels/RegisterPageMailLabel.js";
import { RegisterPageEmailIDInput } from "../Tags/Inputs/RegisterPageEmailIDInput.js";
import { AtSignSpan } from "../Tags/Spans/AtSignSpan.js";
import { RegisterPageEmailDomainInput } from "../Tags/Inputs/RegisterPageEmailDomainInput.js";

const RegisterPurchaser = () => {
    const form = InputFrom();

    // id
    const id_label = RegisterPageIdLabel();
    const id_input = RegisterPageIdInput();
    const id_button = IdDuplicationCheckButton();

    // pw
    const pw_label = RegisterPagePWLabel();
    const pw_div = CheckImageDiv();
    const pw_input = RegisterPagePWInput();
    const pw_image = PWCheckOffImage();

    // pw confirm
    const pw_check_label = RegisterPagePWCheckLabel();
    const pw_check_div = CheckImageDiv();
    const pw_check_input = RegisterPagePWCheckInput();
    const pw_check_image = PWConfirmCheckOffImage();

    // name
    const name_label = RegisterPageNameLabel();
    const name_input = RegisterPageNameInput();

    // phone
    const phone_label = RegisterPagePhoneLabel();
    const phone_first = PhoneSelect();
    const phone_middle = RegisterPagePhoneMiddleInput();
    const phone_tail = RegisterPagePhoneTailInput();

    // mail
    const mail_label = RegisterPageMailLabel();
    const mail_id = RegisterPageEmailIDInput();
    const mail_at = AtSignSpan();
    const mail_domain = RegisterPageEmailDomainInput();

    
    form.appendChild(id_label);
    form.appendChild(id_input);
    form.appendChild(id_button);
    form.appendChild(pw_label);
    form.appendChild(pw_div);
    form.appendChild(pw_check_label);
    form.appendChild(pw_check_div);
    form.appendChild(name_label);
    form.appendChild(name_input);
    form.appendChild(phone_label);
    form.appendChild(phone_first);
    form.appendChild(phone_middle);
    form.appendChild(phone_tail);
    form.appendChild(mail_label);
    form.appendChild(mail_id);
    form.appendChild(mail_at);
    form.appendChild(mail_domain);

    pw_div.appendChild(pw_input);
    pw_div.appendChild(pw_image);
    pw_check_div.appendChild(pw_check_input);
    pw_check_div.appendChild(pw_check_image);

    return form;
}

export { RegisterPurchaser };