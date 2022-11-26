import { formStyle, inputStyle, buttonStyle, imageStyle } from "../../styles/SearchBar/SearchBarStyle.js";

const SearchBar = () => {
    const search_form = document.createElement('form');
    formStyle(search_form);

    const search_input = document.createElement('input');
    search_input.setAttribute('type', 'text');
    search_input.setAttribute('placeholder', '상품을 검색해보세요!');
    inputStyle(search_input);

    const search_button = document.createElement('button');
    search_button.setAttribute('id', 'search');
    buttonStyle(search_button);

    const search_button_image = document.createElement('img');
    search_button_image.setAttribute('src', './src/images/search.png');
    search_button_image.setAttribute('alt', '검색 이미지');
    imageStyle(search_button_image);
    
    search_form.appendChild(search_input);
    search_form.appendChild(search_button);
    search_button.appendChild(search_button_image);

    return search_form;
}

export { SearchBar };