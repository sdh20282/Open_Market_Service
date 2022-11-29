import { TopBarNav } from '../Tags/Navs/TopBarNav.js';
import { CartAnchor } from '../Tags/Anchors/CartAnchor.js';
import { UserAnchor } from '../Tags/Anchors/UserAnchor.js';
import { CartImage } from '../Tags/Images/CartImage.js';
import { LoginImage } from '../Tags/Images/LoginImage.js';

const NavBarLogin = () => {
    const nav = TopBarNav();
    const cart_anchor = CartAnchor();
    const user_anchor = UserAnchor();
    const cart_image = CartImage();
    const user_image = LoginImage();

    nav.appendChild(cart_anchor);
    nav.appendChild(user_anchor);
    cart_anchor.appendChild(cart_image);
    user_anchor.appendChild(user_image);

    return nav;
}

export { NavBarLogin };