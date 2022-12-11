import { ulStyle } from "../../../styles/components/UnorderedLists/PhoneSelectUlStyle.js";

const PhoneSelectUl = () => {
    const ul = document.createElement('ul');
    ulStyle(ul);
    ul.setAttribute('id', 'PhoneSelectUl');

    const cssTemplateString = `
    #PhoneSelectUl::-webkit-scrollbar { 
        width: 18px;
        background-color: #F2F2F2;
        border-radius: 0 5px 5px 0;
    }
    
    #PhoneSelectUl::-webkit-scrollbar-track {
        background-color: transparent;
    }
    
    #PhoneSelectUl::-webkit-scrollbar-thumb {
        background: #C4C4C4;
        border-radius: 10px;
        background-clip: padding-box;
        border: 6px solid transparent;
    }
    
    #PhoneSelectUl::-webkit-scrollbar-button {
        width: 0;
        height: 0;
    }`;
    
    const styleTag = document.createElement("style");
    styleTag.innerHTML = cssTemplateString;
    document.head.insertAdjacentElement('beforeend', styleTag);

    return ul;
}

export { PhoneSelectUl };