import { SearchBarForm } from "../Tags/Forms/SearchBarForm.js";
import { DefaultLabel } from "../Tags/Labels/DefaultLabel.js";
import { SearchBarInput } from "../Tags/Inputs/SearchBarInput.js";
import { SearchBarButton } from "../Tags/Buttons/SearchBarButton.js";

const SearchBar = () => {
    const search_form = SearchBarForm();
    const search_label = DefaultLabel();
    const search_input = SearchBarInput();
    const search_button = SearchBarButton();
    
    search_label.setAttribute('for', 'search');
    search_label.textContent = '검색어 입력';
    
    search_form.appendChild(search_label);
    search_form.appendChild(search_input);
    search_form.appendChild(search_button);

    return search_form;
}

export { SearchBar };