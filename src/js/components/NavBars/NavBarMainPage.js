import { TopBarNav } from '../Tags/Navs/TopBarNav.js';
import { TopBarNavList } from '../Tags/UnorderedLists/TopBarNavList.js';
import { CartAnchor } from '../Tags/Anchors/CartAnchor.js';
import { LoginAnchor } from '../Tags/Anchors/LoginAnchor.js';
import { UserAnchor } from '../Tags/Anchors/UserAnchor.js';
import { CartImage } from '../Tags/Images/CartImage.js';
import { LoginImage } from '../Tags/Images/LoginImage.js';
import { UserImage } from '../Tags/Images/UserImage.js';

const NavBarMainPage = () => {
    const nav = TopBarNav();
    const ul = TopBarNavList();

    const cart_li = document.createElement('li');
    const cart_anchor = CartAnchor();
    const cart_image = CartImage();

    const login_li = document.createElement('li');
    const login_anchor = LoginAnchor();
    const login_image = LoginImage();

    const user_li = document.createElement('li');
    const user_anchor = UserAnchor();
    const user_image = UserImage();

    nav.appendChild(ul);

    ul.appendChild(cart_li);
    cart_li.appendChild(cart_anchor);
    cart_anchor.appendChild(cart_image);

    ul.appendChild(login_li);
    login_li.appendChild(login_anchor);
    login_anchor.appendChild(login_image);

    ul.appendChild(user_li);
    user_li.appendChild(user_anchor);
    user_anchor.appendChild(user_image);

    return nav;
}

export { NavBarMainPage };