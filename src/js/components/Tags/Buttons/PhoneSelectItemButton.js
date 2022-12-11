import { buttonStyle } from "../../../styles/components/Buttons/PhoneSelectItemButtonStyle.js";

const PhoneSelectItemButton = () => {
    const button = document.createElement('button');
    buttonStyle(button);

    return button;
}

export { PhoneSelectItemButton };