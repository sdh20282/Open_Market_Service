import { PhoneSelectItemButton_016 } from "../Buttons/PhoneSelectItemButton_016.js";

const PhoneListItem_016 = () => {
    const li = document.createElement('li');
    li.appendChild(PhoneSelectItemButton_016());

    return li;
}

export { PhoneListItem_016 };