import { containerStyle } from "../../styles/TopBars/TopBarLoginStyle.js";
import { NormalLogo } from "../Logos/NormalLogo.js";
import { SearchBar } from '../SearchBar/SearchBar.js'

const TopBarLogin = () => {
    const conatiner = document.createElement('header');
    containerStyle(conatiner);

    const logo = NormalLogo();
    const search_form = SearchBar();

    const nav = document.createElement('nav');
    nav.style.display = 'flex';
    nav.style.alignItems = 'center';
    nav.style.marginLeft = 'auto';

    const cart = document.createElement('a');
    cart.setAttribute('href', '/');
    cart.style.width = '46px';
    cart.style.height = '50px';
    cart.style.marginRight = '26px';
    cart.style.cursor = 'pointer';

    const cart_image = document.createElement('img');
    cart_image.setAttribute('src', './src/images/shopping-cart.png');
    cart_image.setAttribute('alt', '장바구니 이미지');
    cart_image.style.width = '100%';

    const login = document.createElement('a');
    login.setAttribute('href', '/login');
    login.style.width = '56px';
    login.style.height = '50px';
    login.style.cursor = 'pointer';

    const login_image = document.createElement('img');
    login_image.setAttribute('src', './src/images/my-page.png');
    login_image.setAttribute('alt', '로그인 이미지');
    login_image.style.width = '100%';

    conatiner.appendChild(logo);
    conatiner.appendChild(search_form);
    conatiner.appendChild(nav);
    nav.appendChild(cart);
    nav.appendChild(login);
    cart.appendChild(cart_image);
    login.appendChild(login_image);

    return conatiner;
}

export { TopBarLogin };