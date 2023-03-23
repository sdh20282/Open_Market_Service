import { labelStyle } from "../../../styles/components/Labels/UpperDescLabelStyle.js";

const RegisterPageSellerNoLabel = () => {
    const label = document.createElement('label');
    labelStyle(label);
    label.setAttribute('for', 'registerSellerNoInput');
    label.textContent = '판매자 번호';
    
    return label;
}

export { RegisterPageSellerNoLabel };