import { SearchBarForm } from "../Tags/Forms/SearchBarForm.js";
import { SearchLabel } from "../Tags/Labels/SearchLabel.js";
import { SearchBarInput } from "../Tags/Inputs/SearchBarInput.js";
import { SearchBarButton } from "../Tags/Buttons/SearchBarButton.js";

const SearchBar = () => {
    const search_form = SearchBarForm();
    const search_label = SearchLabel();
    const search_input = SearchBarInput();
    const search_button = SearchBarButton();
    
    search_form.appendChild(search_label);
    search_form.appendChild(search_input);
    search_form.appendChild(search_button);

    return search_form;
}

export { SearchBar };