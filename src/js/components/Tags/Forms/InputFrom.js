import { formStyle } from "../../../styles/components/Froms/InputFormStyle.js";

const InputFrom = () => {
    const form = document.createElement('form');
    formStyle(form);

    return form;
}

export { InputFrom };