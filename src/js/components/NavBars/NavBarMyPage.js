import { navStyle, cartStyle, cartImageStyle, loginStyle, loginImageStyle } from '../../styles/components/NavBars/NavBarStyle.js'

const NavBarLogin = () => {
    const nav = document.createElement('nav');
    navStyle(nav);

    const cart = document.createElement('a');
    cartStyle(cart);

    const cart_image = document.createElement('img');
    cart_image.setAttribute('src', './src/images/shopping-cart.png');
    cart_image.setAttribute('alt', '장바구니 이미지');
    cartImageStyle(cart_image);

    const login = document.createElement('a');
    login.setAttribute('href', '/login');
    loginStyle(login);

    const login_image = document.createElement('img');
    login_image.setAttribute('src', './src/images/my-page.png');
    login_image.setAttribute('alt', '로그인 이미지');
    loginImageStyle(login_image);

    nav.appendChild(cart);
    nav.appendChild(login);
    cart.appendChild(cart_image);
    login.appendChild(login_image);

    return nav;
}

export { NavBarLogin };