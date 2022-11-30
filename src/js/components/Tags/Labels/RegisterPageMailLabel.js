import { DescLabel } from "./DescLabel.js";

const RegisterPageMailLabel = () => {
    const label = DescLabel();
    label.setAttribute('for', 'registerMailInput');
    label.textContent = '이메일';
    
    return label;
}

export { RegisterPageMailLabel };