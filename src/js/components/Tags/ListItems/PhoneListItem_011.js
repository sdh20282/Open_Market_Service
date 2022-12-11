import { PhoneSelectItemButton_011 } from "../Buttons/PhoneSelectItemButton_011.js";

const PhoneListItem_011 = () => {
    const li = document.createElement('li');
    li.appendChild(PhoneSelectItemButton_011());

    return li;
}

export { PhoneListItem_011 };