import { IROnlyLabel } from './IROnlyLabel.js'

const RegisterPageEmailIdLabel = () => {
    const label = IROnlyLabel();
    label.setAttribute('for', 'registerEmailID');
    label.textContent = '이메일 아이디 입력';
    
    return label;
}

export { RegisterPageEmailIdLabel };