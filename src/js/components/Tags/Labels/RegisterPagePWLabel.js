import { DescLabel } from "./DescLabel.js";

const RegisterPagePWLabel = () => {
    const label = DescLabel();
    label.setAttribute('for', 'registerPWInput');
    label.textContent = '비밀번호';
    
    return label;
}

export { RegisterPagePWLabel };