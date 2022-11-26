import { titleStyle, linkStyle, imageStyle } from '../../styles/Logos/NormalLogoStyle.js'

const NormalLogo = () => {
    const title = document.createElement('h1');
    titleStyle(title);

    const title_link = document.createElement('a');
    title_link.setAttribute('href', '/');
    linkStyle(title_link);

    const title_image = document.createElement('img');
    title_image.setAttribute('src', './src/images/Logo-hodu.png');
    title_image.setAttribute('alt', '호두 쇼핑몰 홈페이지 로고');
    imageStyle(title_image);

    title.appendChild(title_link);
    title_link.appendChild(title_image);

    return title;
}

export { NormalLogo };