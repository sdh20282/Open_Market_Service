import { PhoneSelectItemButton_014 } from "../Buttons/PhoneSelectItemButton_014.js";

const PhoneListItem_014 = () => {
    const li = document.createElement('li');
    li.appendChild(PhoneSelectItemButton_014());

    return li;
}

export { PhoneListItem_014 };