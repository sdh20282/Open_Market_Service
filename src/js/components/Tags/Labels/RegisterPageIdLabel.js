import { DescLabel } from "./DescLabel.js";

const RegisterPageIdLabel = () => {
    const label = DescLabel();
    label.setAttribute('for', 'registerIDInput');
    label.textContent = '아아디';
    
    return label;
}

export { RegisterPageIdLabel };