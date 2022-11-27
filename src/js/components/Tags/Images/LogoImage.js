import { imageStyle } from '../../../styles/components/Images/DefaultImageStyle.js'

const LogoImage = () => {
    const image = document.createElement('img');
    image.setAttribute('src', './src/images/Logo-hodu.png');
    image.setAttribute('alt', '호두 쇼핑몰 홈페이지 로고');
    imageStyle(image);

    return image;
}

export { LogoImage };