import { navStyle } from "../../../styles/components/Navs/LoginPageNavStyle.js";

const LoginPageNav = () => {
    const nav = document.createElement('nav');
    navStyle(nav);

    return nav;
}

export { LoginPageNav };