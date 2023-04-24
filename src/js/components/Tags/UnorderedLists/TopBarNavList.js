import { ulStyle } from "../../../styles/components/UnorderedLists/TopBarNavListStyle.js";

const TopBarNavList = () => {
    const ul = document.createElement('ul');
    ulStyle(ul);

    return ul;
}

export { TopBarNavList };