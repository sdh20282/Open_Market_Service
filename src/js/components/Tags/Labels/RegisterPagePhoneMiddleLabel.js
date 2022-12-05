import { IROnlyLabel } from './IROnlyLabel.js'

const RegisterPagePhoneMiddleLabel = () => {
    const label = IROnlyLabel();
    label.setAttribute('for', 'registerPhoneMiddle');
    label.textContent = '전화번호 가운데 4자리 입력';
    
    return label;
}

export { RegisterPagePhoneMiddleLabel };