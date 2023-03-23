import { FieldSetStyle } from "../../../styles/components/FieldSet/HiddenFieldSetStyle.js";

const HiddenFieldSet = () => {
    const fieldset = document.createElement('fieldset');
    FieldSetStyle(fieldset);
    fieldset.setAttribute('id', 'hiddenFieldSet');

    return fieldset;
}

export { HiddenFieldSet };