import { FieldSetStyle } from "../../../styles/components/FieldSet/EmptyFieldSetStyle.js";

const EmptyFieldSet = () => {
    const fieldset = document.createElement('fieldset');
    FieldSetStyle(fieldset);

    return fieldset;
}

export { EmptyFieldSet };