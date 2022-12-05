import { IROnly } from "../../utils/utils.js";

const RegisterPageAgreeLabel = () => {
    const label = document.createElement('label');
    label.textContent = '호두샵의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다.';
    
    return label;
}

export { RegisterPageAgreeLabel };