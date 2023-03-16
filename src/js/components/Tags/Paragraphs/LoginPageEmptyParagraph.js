import { paragraphStyle } from "../../../styles/components/Paragraphs/LoginPageNotValidParagraphStyle.js";

const LoginPageEmptyParagraph = () => {
    const p = document.createElement('p');
    p.setAttribute('id', 'emptyParagraph');
    p.innerText = '아이디 또는 비밀번호를 입력해주세요.';
    paragraphStyle(p);

    return p;
}

export { LoginPageEmptyParagraph };