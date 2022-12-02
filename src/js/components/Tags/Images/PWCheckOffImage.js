import { imageStyle } from '../../../styles/components/Images/CheckOffImageStyle.js'

const PWCheckOffImage = () => {
    const image = document.createElement('img');
    image.setAttribute('src', './src/images/icon-check-off.png');
    image.setAttribute('alt', '체크 오프');
    image.setAttribute('id', 'pwCheckOffImage');
    imageStyle(image);

    return image;
}

export { PWCheckOffImage };