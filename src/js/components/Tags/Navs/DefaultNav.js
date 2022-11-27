import { navStyle } from "../../../styles/components/Navs/DefaultNavStyle.js";

const DefaultNav = () => {
    const nav = document.createElement('nav');
    navStyle(nav);

    return nav;
}

export { DefaultNav };