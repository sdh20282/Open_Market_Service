import { TabButton } from "./TabButton.js";
import { buttonStyle } from "../../../styles/components/Buttons/PurchaserTabButtonStyle.js";

const PurchaserTabButton = () => {
    const button = TabButton();
    buttonStyle(button);
    button.setAttribute('id', 'selectPurchaser');
    button.textContent = '구매회원 로그인';

    return button;
}

export { PurchaserTabButton };