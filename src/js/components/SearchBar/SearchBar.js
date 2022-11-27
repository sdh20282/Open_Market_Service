import { SearchBarForm } from "../Tags/Forms/SearchBarForm.js";
import { SearchLabel } from "../Tags/Labels/SearchLabel.js";
import { SearchBarInput } from "../Tags/Inputs/SearchBarInput.js";
import { SearchBarButton } from "../Tags/Buttons/SearchBarButton.js";
import { SearchBarImage } from "../Tags/Images/SearchBarImage.js";

const SearchBar = () => {
    const form = SearchBarForm();
    const label = SearchLabel();
    const input = SearchBarInput();
    const button = SearchBarButton();
    const image = SearchBarImage();
    
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(button);
    button.appendChild(image);

    return form;
}

export { SearchBar };