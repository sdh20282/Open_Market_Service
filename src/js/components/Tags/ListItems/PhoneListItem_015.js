import { PhoneSelectItemButton_015 } from "../Buttons/PhoneSelectItemButton_015.js";

const PhoneListItem_015 = () => {
    const li = document.createElement('li');
    li.appendChild(PhoneSelectItemButton_015());

    return li;
}

export { PhoneListItem_015 };