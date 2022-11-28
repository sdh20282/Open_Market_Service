import { buttonStyle } from "../../../styles/components/Buttons/GreenButtonStyle.js";

const GreenButton = () => {
    const button = document.createElement('button');
    buttonStyle(button);

    return button;
}

export { GreenButton };