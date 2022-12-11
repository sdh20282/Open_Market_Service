import { PhoneSelectItemButton } from "./PhoneSelectItemButton.js";

const PhoneSelectItemButton_010 = () => {
    const button = PhoneSelectItemButton();
    button.textContent = '010';
    button.setAttribute('id', 'phoneSelectItemButton_010');

    return button;
}

export { PhoneSelectItemButton_010 };