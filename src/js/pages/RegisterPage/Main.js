import { MainMB100 } from "../../components/Tags/Mains/MainMB100.js";
import { InputSection } from "../../components/Tags/Sections/InputSection.js";
import { InputSectionHeader } from "../../components/Tags/Headers/InputSectionHeader.js";
import { PurchaserTabButton } from "../../components/Tags/Buttons/PurchaserTabButton.js";
import { SellerTabButton } from "../../components/Tags/Buttons/SellerTabButton.js";
import { RegisterUser } from "../../components/UserInfos/RegisterUser.js";
import { LoginColorDiv } from "../../components/Tags/Divs/LoginColorDiv.js";
import { RegisterButton } from "../../components/Tags/Buttons/RegisterButton.js";
import { RegisterPageAgreeForm } from "../../components/Tags/Forms/RegisterPageAgreeForm.js";
import { RegisterPageAgreeInput } from "../../components/Tags/Inputs/RegisterPageAgreeInput.js";
import { RegisterPageAgreeLabel } from "../../components/Tags/Labels/RegisterPageAgreeLabel.js";

const Main = () => {
    const main = MainMB100();
    const section = InputSection();
    const sectionHeader = InputSectionHeader();
    const purchaserTab = PurchaserTabButton();
    const sellerTab = SellerTabButton();
    const form = RegisterUser();
    const div = LoginColorDiv();
    const agree_from = RegisterPageAgreeForm();
    const agree_input = RegisterPageAgreeInput();
    const agree_label = RegisterPageAgreeLabel();
    const button = RegisterButton();

    main.appendChild(section);
    section.appendChild(sectionHeader);
    section.appendChild(purchaserTab);
    section.appendChild(sellerTab);
    section.appendChild(form);
    section.appendChild(div);
    section.appendChild(agree_from);
    section.appendChild(button);

    agree_from.appendChild(agree_input);
    agree_from.appendChild(agree_label);

    return main;
}

export default Main;