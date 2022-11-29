import { navStyle } from "../../../styles/components/Navs/TopBarNavStyle.js";

const TopBarNav = () => {
    const nav = document.createElement('nav');
    navStyle(nav);

    return nav;
}

export { TopBarNav };