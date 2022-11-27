import { buttonStyle } from "../../../styles/components/Tags/Buttons/SearchBarButtonStyle.js";
import { SearchBarImage } from "../Images/SearchBarImage.js";

const SearchBarButton = () => {
    const button = document.createElement('button');
    button.setAttribute('id', 'search');
    buttonStyle(button);

    const image = SearchBarImage();

    button.appendChild(image);

    return button;
}

export { SearchBarButton };