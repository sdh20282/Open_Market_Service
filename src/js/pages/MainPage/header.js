export default () => {
    const header = document.createElement('header');
    header.style.width = '1280px';
    header.style.margin = '0 auto';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.padding = '22px 0';

    const title = document.createElement('h1');
    title.style.width = '124px';
    title.style.height = '38px';
    title.style.margin = '0';

    const title_link = document.createElement('a');
    title_link.setAttribute('href', '/');
    title_link.style.cursor = 'pointer';

    const title_image = document.createElement('img');
    title_image.setAttribute('src', './src/images/Logo-hodu.png');
    title_image.setAttribute('alt', '호두 쇼핑몰 홈페이지 로고');
    title_image.style.width = '100%';

    const search_form = document.createElement('form');
    search_form.style.width = '400px';
    search_form.style.height = '46px';
    search_form.style.display = 'flex';
    search_form.style.marginLeft = '30px';
    search_form.style.padding = '0 22px';
    search_form.style.border = '2px solid #21BF48';
    search_form.style.borderRadius = '50px';
    search_form.style.boxSizing = 'border-box';

    const search_input = document.createElement('input');
    search_input.setAttribute('type', 'text');
    search_input.setAttribute('placeholder', '상품을 검색해보세요!');
    search_input.style.flexGrow = '1'
    search_input.style.border = '0'
    search_input.style.outline = '0'

    const search_button = document.createElement('button');
    search_button.setAttribute('id', 'search');
    search_button.style.padding = '0';
    search_button.style.border = '0';
    search_button.style.backgroundColor = 'inherit';
    search_button.style.marginLeft = '10px';
    search_button.style.cursor = 'pointer';
    
    const search_button_image = document.createElement('img');
    search_button_image.setAttribute('src', './src/images/search.png');
    search_button_image.setAttribute('alt', '검색 이미지');
    search_button_image.style.width = '28px';

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
    login_image.setAttribute('alt', '장바구니 이미지');
    login_image.style.width = '100%';

    header.appendChild(title);
    header.appendChild(search_form);
    header.appendChild(nav);
    title.appendChild(title_link);
    title_link.appendChild(title_image);
    search_form.appendChild(search_input);
    search_form.appendChild(search_button);
    search_button.appendChild(search_button_image);
    nav.appendChild(cart);
    nav.appendChild(login);
    cart.appendChild(cart_image);
    login.appendChild(login_image);

    return header
};