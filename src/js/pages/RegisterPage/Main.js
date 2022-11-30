import { InputSection } from "../../components/Tags/Sections/InputSection.js";
import { InputSectionHeader } from "../../components/Tags/Headers/InputSectionHeader.js";
import { PurchaserTabButton } from "../../components/Tags/Buttons/PurchaserTabButton.js";
import { SellerTabButton } from "../../components/Tags/Buttons/SellerTabButton.js";
import { RegisterUser } from "../../components/UserInfos/RegisterUser.js";
import { LoginColorDiv } from "../../components/Tags/Divs/LoginColorDiv.js";

const Main = () => {
    const main = document.createElement('main');
    const section = InputSection();
    const sectionHeader = InputSectionHeader();
    const purchaserTab = PurchaserTabButton();
    const sellerTab = SellerTabButton();
    const form = RegisterUser();
    const div = LoginColorDiv();

    main.appendChild(section);
    section.appendChild(sectionHeader);
    section.appendChild(purchaserTab);
    section.appendChild(sellerTab);
    section.appendChild(form);
    // section.appendChild(div);


    return main;
}

export default Main;