import { paragraphStyle } from "../../../styles/components/Paragraphs/RegisterPageNotValidParagraphStyle.js";

const RegisterPagePasswordNotValidParagraph = () => {
    const paragraph = document.createElement('p');
    paragraphStyle(paragraph);
    paragraph.setAttribute('id', 'passwordNotValidParagraph');
    paragraph.textContent = '비밀번호가 일치하지 않습니다.';
    
    return paragraph;
}

export { RegisterPagePasswordNotValidParagraph };