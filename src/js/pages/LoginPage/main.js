import { InputSection } from "../../components/Tags/Sections/InputSection.js";
import { InputSectionHeader } from "../../components/Tags/Headers/InputSectionHeader.js";
import { PurchaserTabButton } from "../../components/Tags/Buttons/PurchaserTabButton.js";
import { SellerTabButton } from "../../components/Tags/Buttons/SellerTabButton.js";
import { LoginPurchaser } from "../../components/UserInfos/LoginPurchaser.js";
import { LoginColorDiv } from "../../components/Tags/Divs/LoginColorDiv.js";
import { NavBarRegister } from "../../components/NavBars/NavBarLoginPage.js";

const Main = () => {
    const main = document.createElement('main');
    const section = InputSection();
    const sectionHeader = InputSectionHeader();
    const purchaserTab = PurchaserTabButton();
    const sellerTab = SellerTabButton();
    const form = LoginPurchaser();
    const div = LoginColorDiv();
    const nav = NavBarRegister();

    main.appendChild(section);
    section.appendChild(sectionHeader);
    section.appendChild(purchaserTab);
    section.appendChild(sellerTab);
    section.appendChild(form);
    section.appendChild(div);
    section.appendChild(nav);

    return main;
}

export default Main;