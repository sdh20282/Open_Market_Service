export default () => {
    const header = document.createElement('header');
    header.style.width = '1280px';
    header.style.backgroundColor = 'aqua';
    header.style.margin = '0 auto';
    header.style.display = 'flex';
    header.style.padding = '22px 0';

    const title = document.createElement('h1');
    title.style.width = '124px'
    title.style.height = '38px'

    const title_image = document.createElement('img');
    title_image.setAttribute('src', './src/images/Logo-hodu.png');
    title_image.setAttribute('alt', '호두 쇼핑몰 홈페이지 로고');
    title_image.style.width = '100%';

    const product_search = document.createElement('input');
    product_search.setAttribute('type', 'text');

    const nav = document.createElement('nav');
    nav.style.display = 'flex';
    nav.style.alignItems = 'center';
    nav.style.marginLeft = 'auto';

    const cart = document.createElement('a');
    cart.style.width = '46px';
    cart.style.height = '50px';

    const cart_image = document.createElement('img');
    cart_image.setAttribute('src', './src/images/shopping-cart.png');
    cart_image.setAttribute('alt', '장바구니 이미지');
    cart_image.style.width = '100%';
    
    const login = document.createElement('a');
    login.style.width = '56px';
    login.style.height = '50px';

    const login_image = document.createElement('img');
    login_image.setAttribute('src', './src/images/my-page.png');
    login_image.setAttribute('alt', '장바구니 이미지');
    login_image.style.width = '100%';

    header.appendChild(title);
    header.appendChild(product_search);
    header.appendChild(nav);

    title.appendChild(title_image);

    nav.appendChild(cart);
    nav.appendChild(login);

    cart.appendChild(cart_image);
    
    login.appendChild(login_image);

    return header
};