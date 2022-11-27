import { IROnly } from "../../utils/utils.js";

const DefaultLabel = () => {
    const label = document.createElement('label');
    IROnly(label);
    
    return label
}

export { DefaultLabel };