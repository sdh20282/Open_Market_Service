import { SmallGreenButton } from "./SmallGreenButton.js";
import { buttonStyle } from "../../../styles/components/Buttons/RegisterPageCheckButtonStyle.js";

const SellerNoCertifyButton = () => {
    const button = SmallGreenButton();
    buttonStyle(button);
    button.setAttribute('id', 'certifySellerNo');
    button.textContent = '인증';

    return button;
}

export { SellerNoCertifyButton };