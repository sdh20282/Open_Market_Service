import { imageStyle } from '../../../styles/components/Images/DefaultImageStyle.js'

const UserImage = () => {
    const image = document.createElement('img');
    image.setAttribute('src', './src/images/my-page.png');
    image.setAttribute('alt', '마이 페이지');
    imageStyle(image);

    return image;
}

export { UserImage };