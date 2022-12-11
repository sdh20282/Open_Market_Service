import { PhoneSelectItemButton_012 } from "../Buttons/PhoneSelectItemButton_012.js";

const PhoneListItem_012 = () => {
    const li = document.createElement('li');
    li.appendChild(PhoneSelectItemButton_012());

    return li;
}

export { PhoneListItem_012 };