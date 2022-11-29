import { LoginPageNav } from "../Tags/Navs/LoginPageNav.js";
import { RegisterAnchor } from "../Tags/Anchors/RegisterAnchor.js";
import { DivideSpan } from "../Tags/Spans/DivideSpan.js";
import { FindPasswordAnchor } from "../Tags/Anchors/FindPasswordAnchor.js";

const NavBarRegister = () => {
    const nav = LoginPageNav();
    const registerAnchor = RegisterAnchor();
    const span = DivideSpan();
    const findPWAnchor = FindPasswordAnchor();

    nav.appendChild(registerAnchor);
    nav.appendChild(span);
    nav.appendChild(findPWAnchor);

    return nav;
}

export { NavBarRegister };