import { DefaultLabel } from './DefaultLabel.js'

const PasswordLabel = () => {
    const label = DefaultLabel();
    label.setAttribute('for', 'passwordInput');
    label.textContent = '비밀번호 입력';
    
    return label;
}

export { PasswordLabel };