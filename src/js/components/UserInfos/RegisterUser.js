import { InputFrom } from "../Tags/Forms/InputFrom.js";

import { EmptyFieldSet } from "../Tags/FieldSet/EmptyFieldSet.js";
import { HiddenFieldSet } from "../Tags/FieldSet/HiddenFieldSet.js";
import { IROnlyLegend } from "../Tags/Legend/irOnlyLegend.js";

// id
import { RegisterPageIdLabel } from "../Tags/Labels/RegisterPageIdLabel.js";
import { RegisterPageIdInput } from "../Tags/Inputs/RegisterPageIdInput.js";
import { IdDuplicationCheckButton } from "../Tags/Buttons/IdDuplicationCheckButton.js";
import { RegisterPageIDValidParagraph } from "../Tags/Paragraphs/RegisterPageIDValidParagraph.js";;

// pw
import { RegisterPagePWLabel } from "../Tags/Labels/RegisterPagePWLabel.js";
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
import { RegisterPagePhoneParagraph } from "../Tags/Paragraphs/RegisterPagePhoneParagraph.js";
import { PhoneSelectBox } from "../SelectBox/PhoneSelectBox.js";
import { RegisterPagePhoneMiddleLabel } from "../Tags/Labels/RegisterPagePhoneMiddleLabel.js";
import { RegisterPagePhoneMiddleInput } from "../Tags/Inputs/RegisterPagePhoneMiddleInput.js";
import { RegisterPagePhoneTailLabel } from "../Tags/Labels/RegisterPagePhoneTailLabel.js";
import { RegisterPagePhoneTailInput } from "../Tags/Inputs/RegisterPagePhoneTailInput.js";

// mail
import { RegisterPageEmailParagraph } from "../Tags/Paragraphs/RegisterPageEmailParagraph.js";
import { RegisterPageEmailIdLabel } from "../Tags/Labels/RegisterPageEmailIDLabel.js";
import { RegisterPageEmailIDInput } from "../Tags/Inputs/RegisterPageEmailIDInput.js";
import { AtSignSpan } from "../Tags/Spans/AtSignSpan.js";
import { RegisterPageEmailDomainLabel } from "../Tags/Labels/RegisterPageEmailDomainLabel.js";
import { RegisterPageEmailDomainInput } from "../Tags/Inputs/RegisterPageEmailDomainInput.js";

// seller
import { RegisterPageSellerNoLabel } from "../Tags/Labels/RegisterPageSellerNoLabel.js";
import { RegisterPageSellerNoInput } from "../Tags/Inputs/RegisterPageSellerNoInput.js";
import { SellerNoCertifyButton } from "../Tags/Buttons/SellerNoCertifyButton.js";

// store
import { RegisterPageStoreNameLabel } from "../Tags/Labels/RegisterPageStoreNameLabel.js";
import { RegisterPageStoreNameInput } from "../Tags/Inputs/RegisterPageStoreNameInput.js";

const RegisterUser = () => {
    const form = InputFrom();

    // id
    const id_field = EmptyFieldSet();
    const id_legend = IROnlyLegend();
    const id_label = RegisterPageIdLabel();
    const id_input = RegisterPageIdInput();
    const id_button = IdDuplicationCheckButton();
    const id_valid = RegisterPageIDValidParagraph();

    // pw
    const pw_field = EmptyFieldSet();
    const pw_legend = IROnlyLegend();
    const pw_label = RegisterPagePWLabel();
    const pw_input = RegisterPagePWInput();
    const pw_image = PWCheckOffImage();

    // pw confirm
    const pw_check_field = EmptyFieldSet();
    const pw_check_legend = IROnlyLegend();
    const pw_check_label = RegisterPagePWCheckLabel();
    const pw_check_input = RegisterPagePWCheckInput();
    const pw_check_image = PWConfirmCheckOffImage();

    // name
    const name_field = EmptyFieldSet();
    const name_legend = IROnlyLegend();
    const name_label = RegisterPageNameLabel();
    const name_input = RegisterPageNameInput();

    // phone
    const phone_field = EmptyFieldSet();
    const phone_legend = IROnlyLegend();
    const phone_paragraph = RegisterPagePhoneParagraph();
    const phone_first = PhoneSelectBox();
    const phone_middle_label = RegisterPagePhoneMiddleLabel();
    const phone_middle = RegisterPagePhoneMiddleInput();
    const phone_tail_label = RegisterPagePhoneTailLabel();
    const phone_tail = RegisterPagePhoneTailInput();

    // mail
    const mail_field = EmptyFieldSet();
    const mail_legend = IROnlyLegend();
    const mail_paragraph = RegisterPageEmailParagraph();
    const mail_id_label = RegisterPageEmailIdLabel();
    const mail_id = RegisterPageEmailIDInput();
    const mail_at = AtSignSpan();
    const mail_domain_label = RegisterPageEmailDomainLabel();
    const mail_domain = RegisterPageEmailDomainInput();

    // seller
    const seller_field = HiddenFieldSet();
    const seller_legend = IROnlyLegend();
    const seller_no_label = RegisterPageSellerNoLabel();
    const seller_no_input = RegisterPageSellerNoInput();
    const seller_no_button = SellerNoCertifyButton();

    // store
    const store_field = HiddenFieldSet();
    const store_legend = IROnlyLegend();
    const store_no_label = RegisterPageStoreNameLabel();
    const store_no_input = RegisterPageStoreNameInput();

    // set legends
    id_legend.textContent = '아이디 입력 영역';
    pw_legend.textContent = '비밀번호 입력 영역';
    pw_check_legend.textContent = '비밀번호 확인 영역';
    name_legend.textContent = '이름 입력 영역';
    phone_legend.textContent = '전화번호 입력 영역';
    mail_legend.textContent = '이메일 입력 영역';
    seller_legend.textContent = '판매자 번호 입력 영역';
    store_legend.textContent = '스토어 이름 입력 영역';

    // form
    form.appendChild(id_field);
    form.appendChild(pw_field);
    form.appendChild(pw_check_field);
    form.appendChild(name_field);
    form.appendChild(phone_field);
    form.appendChild(mail_field);
    form.appendChild(seller_field);
    form.appendChild(store_field);

    // id_field
    id_field.appendChild(id_legend);
    id_field.appendChild(id_label);
    id_field.appendChild(id_input);
    id_field.appendChild(id_button);
    id_field.appendChild(id_valid);

    // pw_field
    pw_field.appendChild(pw_legend);
    pw_field.appendChild(pw_label);
    pw_field.appendChild(pw_input);
    pw_field.appendChild(pw_image);

    // pw confirm field
    pw_check_field.appendChild(pw_check_legend);
    pw_check_field.appendChild(pw_check_label);
    pw_check_field.appendChild(pw_check_input);
    pw_check_field.appendChild(pw_check_image);

    // name field
    name_field.appendChild(name_legend);
    name_field.appendChild(name_label);
    name_field.appendChild(name_input);

    // phone field
    phone_field.appendChild(phone_legend);
    phone_field.appendChild(phone_paragraph);
    phone_field.appendChild(phone_first);
    phone_field.appendChild(phone_middle_label);
    phone_field.appendChild(phone_middle);
    phone_field.appendChild(phone_tail_label);
    phone_field.appendChild(phone_tail);

    // email field
    mail_field.appendChild(mail_legend);
    mail_field.appendChild(mail_paragraph);
    mail_field.appendChild(mail_id_label);
    mail_field.appendChild(mail_id);
    mail_field.appendChild(mail_at);
    mail_field.appendChild(mail_domain_label);
    mail_field.appendChild(mail_domain);

    // seller field
    seller_field.appendChild(seller_legend);
    seller_field.appendChild(seller_no_label);
    seller_field.appendChild(seller_no_input);
    seller_field.appendChild(seller_no_button);

    // store field
    store_field.appendChild(store_legend);
    store_field.appendChild(store_no_label);
    store_field.appendChild(store_no_input);

    return form;
}

export { RegisterUser };