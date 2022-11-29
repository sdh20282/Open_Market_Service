import { LoginSection } from "../../components/Tags/Sections/LoginSection.js";
import { LoginSectionHeader } from "../../components/Tags/Headers/LoginSectionHeader.js";
import { PurchaserTabButton } from "../../components/Tags/Buttons/PurchaserTabButton.js";
import { SellerTabButton } from "../../components/Tags/Buttons/SellerTabButton.js";
import { LoginUser } from "../../components/UserInfos/LoginUser.js";
import { LoginColorDiv } from "../../components/Tags/Divs/LoginColorDiv.js";

const Main = () => {
    const main = document.createElement('main');
    const section = LoginSection();
    const sectionHeader = LoginSectionHeader();
    const purchaserTab = PurchaserTabButton();
    const sellerTab = SellerTabButton();
    const form = LoginUser();
    const div = LoginColorDiv();

    main.appendChild(section);
    section.appendChild(sectionHeader);
    section.appendChild(purchaserTab);
    section.appendChild(sellerTab);
    section.appendChild(form);
    section.appendChild(div);

    return main;
}

export default Main;