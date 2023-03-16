import { paragraphStyle } from "../../../styles/components/Paragraphs/LoginPageNotValidParagraphStyle.js";

const LoginPageNotValidParagraph = () => {
    const p = document.createElement('p');
    p.setAttribute('id', 'notValidParagraph');
    p.innerText = '아이디 또는 비밀번호가 일치하지 않습니다.';
    paragraphStyle(p);

    return p;
}

export { LoginPageNotValidParagraph };