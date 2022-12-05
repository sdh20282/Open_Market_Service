import { liStyle } from "../../../styles/components/ListItems/PhoneListItemStyle.js";

const PhoneListItem = () => {
    const li = document.createElement('li');
    liStyle(li);

    return li;
}

export { PhoneListItem };