import { navStyle } from "../../../styles/components/Navs/TopBarNavStyle.js";

const TopBarNav = () => {
    const nav = document.createElement('nav');
    navStyle(nav);
    nav.setAttribute('id', 'topBarNav');

    return nav;
}

export { TopBarNav };