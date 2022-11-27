import { buttonStyle } from "../../../styles/components/Buttons/SearchBarButtonStyle.js";

const SearchBarButton = () => {
    const button = document.createElement('button');
    button.setAttribute('id', 'search');
    buttonStyle(button);

    return button;
}

export { SearchBarButton };