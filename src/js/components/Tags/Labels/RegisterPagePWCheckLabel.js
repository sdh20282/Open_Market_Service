import { DescLabel } from "./DescLabel.js";

const RegisterPagePWCheckLabel = () => {
    const label = DescLabel();
    label.setAttribute('for', 'registerPWCheckInput');
    label.textContent = '비밀번호 재확인';
    
    return label;
}

export { RegisterPagePWCheckLabel };