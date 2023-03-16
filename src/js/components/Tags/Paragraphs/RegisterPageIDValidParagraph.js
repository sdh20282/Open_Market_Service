import { paragraphStyle } from "../../../styles/components/Paragraphs/RegisterPageValidParagraphStyle.js"

const RegisterPageIDValidParagraph = () => {
    const p = document.createElement('p');
    paragraphStyle(p);
    p.setAttribute('id', 'validParagraph');

    return p;
}  

export { RegisterPageIDValidParagraph };