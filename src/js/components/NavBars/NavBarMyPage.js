import { DefaultNav } from '../Tags/Navs/DefaultNav.js';
import { CartAnchor } from '../Tags/Anchors/CartAnchor.js';
import { UserAnchor } from '../Tags/Anchors/UserAnchor.js';

const NavBarLogin = () => {
    const nav = DefaultNav();
    const cart = CartAnchor();
    const user = UserAnchor();

    nav.appendChild(cart);
    nav.appendChild(user);

    return nav;
}

export { NavBarLogin };