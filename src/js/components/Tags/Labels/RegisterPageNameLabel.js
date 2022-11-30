import { DescLabel } from "./DescLabel.js";

const RegisterPageNameLabel = () => {
    const label = DescLabel();
    label.setAttribute('for', 'registerNameInput');
    label.textContent = '이름';
    
    return label;
}

export { RegisterPageNameLabel };