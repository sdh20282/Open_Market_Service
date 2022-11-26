import { formStyle, inputStyle, buttonStyle, imageStyle } from "../../styles/components/SearchBar/SearchBarStyle.js";
import { IROnly } from '../utils/utils.js';

const SearchBar = () => {
    const search_form = document.createElement('form');
    formStyle(search_form);

    const search_label = document.createElement('label');
    search_label.setAttribute('for', 'search');
    search_label.textContent = '검색어 입력';
    IROnly(search_label);

    const search_input = document.createElement('input');
    search_input.setAttribute('id', 'search');
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
    
    search_form.appendChild(search_label);
    search_form.appendChild(search_input);
    search_form.appendChild(search_button);
    search_button.appendChild(search_button_image);

    return search_form;
}

export { SearchBar };