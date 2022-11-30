import { InputFrom } from "../Tags/Forms/InputFrom.js";
import { RegisterPageIdLabel } from "../Tags/Labels/RegisterPageIdLabel.js";
import { RdgisterPageIdInput } from "../Tags/Inputs/RdgisterPageIdInput.js";
import { IdDuplicationCheckButton } from "../Tags/Buttons/IdDuplicationCheckButton.js";
import { RegisterPagePWLabel } from "../Tags/Labels/RegisterPagePWLabel.js";
import { RdgisterPagePWInput } from "../Tags/Inputs/RdgisterPagePWInput.js";

const RegisterUser = () => {
    const form = InputFrom();
    const id_label = RegisterPageIdLabel();
    const id_input = RdgisterPageIdInput();
    const id_button = IdDuplicationCheckButton();
    const pw_label = RegisterPagePWLabel();
    const pw_input = RdgisterPagePWInput();
    
    form.appendChild(id_label);
    form.appendChild(id_input);
    form.appendChild(id_button);
    form.appendChild(pw_label);
    form.appendChild(pw_input);


    return form;
}

export { RegisterUser };