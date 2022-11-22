export default () => {
    const header = document.createElement('header');
    header.style.width = '550px';
    header.style.margin = '0 auto';
    header.style.paddingTop = '105px';
    header.style.paddingBottom = '70px';

    const title = document.createElement('h1');
    title.style.width = '238px';
    title.style.margin = '0 auto';

    const title_link = document.createElement('a');
    title_link.setAttribute('href', '/');
    title_link.style.cursor = 'pointer';

    const title_image = document.createElement('img');
    title_image.setAttribute('src', './src/images/Logo-hodu.png');
    title_image.setAttribute('alt', '호두 쇼핑몰 홈페이지 로고');
    title_image.style.width = '100%';

    header.appendChild(title);
    title.appendChild(title_link);
    title_link.appendChild(title_image);

    return header
};