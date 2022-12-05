import { buttonStyle } from "../../../styles/components/Buttons/PhoneSelectButtonStyle.js";

const PhoneSelectButton = () => {
    const button = document.createElement('button');
    buttonStyle(button);
    button.textContent = '010';
    button.setAttribute('id', 'phoneSelectButton');

    return button;
}

export { PhoneSelectButton };