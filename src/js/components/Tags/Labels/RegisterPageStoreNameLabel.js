import { DescLabel } from "./DescLabel.js";

const RegisterPageStoreNameLabel = () => {
    const label = DescLabel();
    label.setAttribute('for', 'registerStoreNameInput');
    label.textContent = '스토어 이름';
    
    return label;
}

export { RegisterPageStoreNameLabel };