import { imageStyle } from '../../../styles/components/Images/ShoppingBagImageStyle.js'

const ShoppingBagImage = () => {
    const image = document.createElement('img');
    image.setAttribute('src', './src/images/icon-shopping-bag.png');
    image.setAttribute('alt', '쇼핑 가방 페이지');
    imageStyle(image);

    return image;
}

export { ShoppingBagImage };