import { IROnlyLabel } from './IROnlyLabel.js'

const RegisterPageEmailDomainLabel = () => {
    const label = IROnlyLabel();
    label.setAttribute('for', 'registerEmailDomain');
    label.textContent = '이메일 도메인 입력';
    
    return label;
}

export { RegisterPageEmailDomainLabel };