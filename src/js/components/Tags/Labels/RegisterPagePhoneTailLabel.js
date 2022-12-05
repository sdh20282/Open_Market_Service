import { IROnlyLabel } from './IROnlyLabel.js'

const RegisterPagePhoneTailLabel = () => {
    const label = IROnlyLabel();
    label.setAttribute('for', 'registerPhoneTail');
    label.textContent = '전화번호 마지막 4자리 입력';
    
    return label;
}

export { RegisterPagePhoneTailLabel };