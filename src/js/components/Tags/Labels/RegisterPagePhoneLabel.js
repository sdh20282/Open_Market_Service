import { DescLabel } from "./DescLabel.js";

const RegisterPagePhoneLabel = () => {
    const label = DescLabel();
    label.setAttribute('for', 'registerPhoneInput');
    label.textContent = '휴대폰번호';
    
    return label;
}

export { RegisterPagePhoneLabel };