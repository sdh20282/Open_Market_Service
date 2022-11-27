import { imageStyle } from '../../../styles/components/Images/DefaultImageStyle.js'

const LoginImage = () => {
    const image = document.createElement('img');
    image.setAttribute('src', './src/images/login.png');
    image.setAttribute('alt', '유저 이미지');
    imageStyle(image);

    return image;
}

export { LoginImage };