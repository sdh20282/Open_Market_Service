import { PhoneSelectItemButton_013 } from "../Buttons/PhoneSelectItemButton_013.js";

const PhoneListItem_013 = () => {
    const li = document.createElement('li');
    li.appendChild(PhoneSelectItemButton_013());

    return li;
}

export { PhoneListItem_013 };