import { formStyle } from "../../../styles/components/Froms/SearchBarFormStyle.js";

const SearchBarForm = () => {
    const form = document.createElement('form');
    formStyle(form);

    return form;
}

export { SearchBarForm };