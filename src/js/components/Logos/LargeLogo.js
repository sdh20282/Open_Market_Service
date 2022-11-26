import { containerStyle, largeTitleStyle, linkStyle, imageStyle } from '../../styles/components/Logos/LogoStyle.js'

const LargeLogo = () => {
    const header = document.createElement('header');
    containerStyle(header);

    const title = document.createElement('h1');
    largeTitleStyle(title);

    const title_link = document.createElement('a');
    title_link.setAttribute('href', '/');
    linkStyle(title_link);

    const title_image = document.createElement('img');
    title_image.setAttribute('src', './src/images/Logo-hodu.png');
    title_image.setAttribute('alt', '호두 쇼핑몰 홈페이지 로고');
    imageStyle(title_image);
    
    header.appendChild(title);
    title.appendChild(title_link);
    title_link.appendChild(title_image);

    return header
}

export { LargeLogo };