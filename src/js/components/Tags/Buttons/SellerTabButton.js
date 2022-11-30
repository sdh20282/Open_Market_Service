import { TabButton } from "./TabButton.js";
import { buttonStyle } from "../../../styles/components/Buttons/SellerTabButtonStyle.js";

const SellerTabButton = () => {
    const button = TabButton();
    buttonStyle(button);
    button.setAttribute('id', 'selectSeller');
    button.textContent = '판매회원 로그인';

    return button;
}

export { SellerTabButton };