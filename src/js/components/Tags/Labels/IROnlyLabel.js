import { IROnly } from "../../utils/utils.js";

const IROnlyLabel = () => {
    const label = document.createElement('label');
    IROnly(label);
    
    return label;
}

export { IROnlyLabel };