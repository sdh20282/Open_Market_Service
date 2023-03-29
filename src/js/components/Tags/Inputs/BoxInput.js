import { inputStyle } from "../../../styles/components/Inputs/BoxInputStyle.js";

const BoxInput = () => {
    const input = document.createElement('input');
    inputStyle(input);
    input.classList.add('boxInput');

    const cssTemplateString = `
    .boxInput:focus { 
        outline: 1px solid #21BF48;
    }
    
    .boxInput.notValid:focus { 
        outline: 1px solid #EB5757;
    }`;
    
    const styleTag = document.createElement("style");
    styleTag.innerHTML = cssTemplateString;
    document.head.insertAdjacentElement('beforeend', styleTag);

    return input;
}

export { BoxInput };