import { imageStyle } from '../../../styles/components/Images/DefaultImageStyle.js'

const CartImage = () => {
    const image = document.createElement('img');
    image.setAttribute('src', './src/images/shopping-cart.png');
    image.setAttribute('alt', '장바구니 이미지');
    imageStyle(image);

    return image;
}

export { CartImage };