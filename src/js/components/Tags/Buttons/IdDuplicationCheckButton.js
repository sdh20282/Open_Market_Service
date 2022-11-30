import { SmallGreenButton } from "./SmallGreenButton.js";
import { buttonStyle } from "../../../styles/components/Buttons/IdDuplicationCheckButtonStyle.js";

const IdDuplicationCheckButton = () => {
    const button = SmallGreenButton();
    buttonStyle(button);
    button.setAttribute('id', 'checkDuplication');
    button.textContent = '중복확인';

    return button;
}

export { IdDuplicationCheckButton };