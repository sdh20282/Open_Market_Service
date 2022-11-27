import { inputStyle } from "../../../styles/components/Tags/Inputs/UnderBarInputStyle.js";

const SearchBarInput = () => {
    const input = document.createElement('input');
    inputStyle(input);
    
    return input
}

export { SearchBarInput };