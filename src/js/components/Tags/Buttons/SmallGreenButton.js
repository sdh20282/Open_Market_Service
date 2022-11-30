import { buttonStyle } from "../../../styles/components/Buttons/SmallGreenButtonStyle.js";

const SmallGreenButton = () => {
    const button = document.createElement('button');
    buttonStyle(button);

    return button;
}

export { SmallGreenButton };