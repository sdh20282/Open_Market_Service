import { paragraphStyle } from "../../../styles/components/Paragraphs/RegisterPageValidParagraphStyle.js";

const RegisterPageSellerNoNotValidParagraph = () => {
    const paragraph = document.createElement('p');
    paragraphStyle(paragraph);
    paragraph.setAttribute('id', 'sellerNoNotValidParagraph');
    
    return paragraph;
}

export { RegisterPageSellerNoNotValidParagraph };