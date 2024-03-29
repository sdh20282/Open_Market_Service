import { MainMB100 } from "../../components/Tags/Mains/MainMB100.js";
import { InputSection } from "../../components/Tags/Sections/InputSection.js";
import { InputSectionHeader } from "../../components/Tags/Headers/InputSectionHeader.js";
import { PurchaserTabButton } from "../../components/Tags/Buttons/PurchaserTabButton.js";
import { SellerTabButton } from "../../components/Tags/Buttons/SellerTabButton.js";
import { LoginUser } from "../../components/UserInfos/LoginUser.js";
import { LoginColorDiv } from "../../components/Tags/Divs/LoginColorDiv.js";
import { NavBarRegister } from "../../components/NavBars/NavBarLoginPage.js";

const Main = () => {
    const main = MainMB100();
    const section = InputSection();
    const sectionHeader = InputSectionHeader();
    const purchaserTab = PurchaserTabButton();
    const sellerTab = SellerTabButton();
    const form = LoginUser();
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