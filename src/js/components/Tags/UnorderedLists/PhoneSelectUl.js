import { ulStyle } from "../../../styles/components/UnorderedLists/PhoneSelectUlStyle.js";

const PhoneSelectUl = () => {
    const ul = document.createElement('ul');
    ulStyle(ul);

    return ul;
}

export { PhoneSelectUl };