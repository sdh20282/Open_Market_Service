import { DescParagraph } from "./DescParagraph.js";

const RegisterPagePhoneParagraph = () => {
    const paragraph = DescParagraph();
    paragraph.textContent = '휴대폰번호';
    
    return paragraph;
}

export { RegisterPagePhoneParagraph };