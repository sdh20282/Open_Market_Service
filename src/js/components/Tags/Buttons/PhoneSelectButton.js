import { buttonStyle } from "../../../styles/components/Buttons/PhoneSelectButtonStyle.js";

const PhoneSelectButton = () => {
    const button = document.createElement('button');
    const span = document.createElement('span');
    buttonStyle(button);
    span.textContent = '010';
    button.setAttribute('id', 'phoneSelectButton');
    button.appendChild(span);

    return button;
}

export { PhoneSelectButton };