import { imageStyle } from '../../../styles/components/Images/PhoneSelectArrowDownImageStyle.js'

const PhoneSelectArrowDownImage = () => {
    const image = document.createElement('img');
    image.setAttribute('src', './src/images/icon-down-arrow.png');
    image.setAttribute('alt', '');
    image.setAttribute('id', 'phoneSelectArrowImage');
    imageStyle(image);

    return image;
}

export { PhoneSelectArrowDownImage };