import { paragraphStyle } from "../../../styles/components/Paragraphs/DestParagraphStyle.js";

const DescParagraph = () => {
    const paragraph = document.createElement('p');
    paragraphStyle(paragraph);
    
    return paragraph;
}

export { DescParagraph };