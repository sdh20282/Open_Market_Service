import { IROnly } from "../../utils/utils.js";

const DefaultHeader = () => {
    const header = document.createElement('header');
    IROnly(header);
    
    return header;
}

export { DefaultHeader };