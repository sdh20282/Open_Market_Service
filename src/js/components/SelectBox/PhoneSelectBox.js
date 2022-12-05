import { PhoneSelectDiv } from "../Tags/Divs/PhoneSelectDiv.js";
import { PhoneSelectButton } from "../Tags/Buttons/PhoneSelectButton.js";
import { PhoneSelectArrowDownImage } from "../Tags/Images/PhoneSelectArrowDownImage.js";
import { PhoneSelectUl } from "../Tags/UnorderedLists/PhoneSelectUl.js";
import { PhoneListItem_010 } from "../Tags/ListItems/PhoneListItem_010.js";
import { PhoneListItem_011 } from "../Tags/ListItems/PhoneListItem_011.js";
import { PhoneListItem_012 } from "../Tags/ListItems/PhoneListItem_012.js";
import { PhoneListItem_013 } from "../Tags/ListItems/PhoneListItem_013.js";
import { PhoneListItem_014 } from "../Tags/ListItems/PhoneListItem_014.js";
import { PhoneListItem_015 } from "../Tags/ListItems/PhoneListItem_015.js";
import { PhoneListItem_016 } from "../Tags/ListItems/PhoneListItem_016.js";

const PhoneSelectBox = () => {
    const container = PhoneSelectDiv();
    const button = PhoneSelectButton();
    const image = PhoneSelectArrowDownImage();
    const ul = PhoneSelectUl();
    const li_010 = PhoneListItem_010();
    const li_011 = PhoneListItem_011();
    const li_012 = PhoneListItem_012();
    const li_013 = PhoneListItem_013();
    const li_014 = PhoneListItem_014();
    const li_015 = PhoneListItem_015();
    const li_016 = PhoneListItem_016();

    container.appendChild(button);
    container.appendChild(image);
    container.appendChild(ul);
    ul.appendChild(li_010);
    ul.appendChild(li_011);
    ul.appendChild(li_012);
    ul.appendChild(li_013);
    ul.appendChild(li_014);
    ul.appendChild(li_015);
    ul.appendChild(li_016);
     
    return container;
}

export { PhoneSelectBox };