import { paragraphStyle } from "../../../styles/components/Paragraphs/RegisterPageInValidParagraphStyle.js";

const RegisterPageIDInValidParagraph = () => {
    const p = document.createElement('p');
    paragraphStyle(p);
    p.setAttribute('id', 'inValidParagraph');

    return p;
}

export { RegisterPageIDInValidParagraph };