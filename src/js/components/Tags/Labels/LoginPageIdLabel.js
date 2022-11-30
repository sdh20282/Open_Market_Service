import { IROnlyLabel } from './IROnlyLabel.js'

const LoginPageIdLabel = () => {
    const label = IROnlyLabel();
    label.setAttribute('for', 'loginIDInput');
    label.textContent = '아아디 입력';
    
    return label;
}

export { LoginPageIdLabel };