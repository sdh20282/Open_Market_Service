import { inputStyle } from "../../../styles/components/Tags/Inputs/SearchBarInputStyle.js";

const SearchBarInput = () => {
    const input = document.createElement('input');
    input.setAttribute('id', 'search');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', '상품을 검색해보세요!');
    inputStyle(input);

    return input;
}

export { SearchBarInput };