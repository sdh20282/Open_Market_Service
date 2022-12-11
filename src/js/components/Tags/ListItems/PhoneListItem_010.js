import { PhoneSelectItemButton_010 } from "../Buttons/PhoneSelectItemButton_010.js";

const PhoneListItem_010 = () => {
    const li = document.createElement('li');
    li.appendChild(PhoneSelectItemButton_010());

    return li;
}

export { PhoneListItem_010 };