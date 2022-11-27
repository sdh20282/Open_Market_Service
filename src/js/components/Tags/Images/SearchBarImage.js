import { imageStyle } from "../../../styles/components/Tags/Images/SearchBarImageStyle.js";

const SearchBarImage = () => {
    const image = document.createElement('img');
    image.setAttribute('src', './src/images/search.png');
    image.setAttribute('alt', '검색 이미지');
    imageStyle(image);

    return image;
}

export { SearchBarImage };