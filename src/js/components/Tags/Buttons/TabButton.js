import { buttonStyle } from "../../../styles/components/Buttons/TabButtonStyle.js";

const TabButton = () => {
    const button = document.createElement('button');
    buttonStyle(button);

    return button;
}

export { TabButton };