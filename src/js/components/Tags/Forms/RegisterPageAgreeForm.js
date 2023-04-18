import { formStyle } from "../../../styles/components/Froms/RegisterPageAgreeFormStyle.js";

const RegisterPageAgreeForm = () => {
    const form = document.createElement('form');
    formStyle(form);

    return form;
}

export { RegisterPageAgreeForm };