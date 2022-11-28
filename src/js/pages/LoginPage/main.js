import { LoginMain } from "../../components/Tags/Mains/LoginMain.js";
import { PurchaserTabButton } from "../../components/Tags/Buttons/PurchaserTabButton.js";
import { SellerTabButton } from "../../components/Tags/Buttons/SellerTabButton.js";
import { LoginUser } from "../../components/UserInfos/LoginUser.js";
import { LoginColorDiv } from "../../components/Tags/Divs/LoginColorDiv.js";

const Main = () => {
    const main = LoginMain();
    const purchaserTab = PurchaserTabButton();
    const sellerTab = SellerTabButton();
    const form = LoginUser();
    const div = LoginColorDiv();

    main.appendChild(purchaserTab);
    main.appendChild(sellerTab);
    main.appendChild(form);
    main.appendChild(div);

    return main;
}

export default Main;