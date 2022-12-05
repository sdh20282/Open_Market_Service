import { DescParagraph } from "./DescParagraph.js";

const RegisterPageEmailParagraph = () => {
    const paragraph = DescParagraph();
    paragraph.textContent = '이메일';
    
    return paragraph;
}

export { RegisterPageEmailParagraph };