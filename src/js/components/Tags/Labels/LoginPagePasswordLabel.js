import { IROnlyLabel } from './IROnlyLabel.js'

const LoginPagePasswordLabel = () => {
    const label = IROnlyLabel();
    label.setAttribute('for', 'loginPWInput');
    label.textContent = '비밀번호 입력';
    
    return label;
}

export { LoginPagePasswordLabel };