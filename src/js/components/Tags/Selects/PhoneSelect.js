import { selectStyle } from "../../../styles/components/Selects/PhoneSelectStyle.js";
import { PhoneOption_010 } from "../Options/PhoneOption_010.js";

const PhoneSelect = () => {
    const select = document.createElement('select');
    selectStyle(select);
    select.appendChild(PhoneOption_010());

    return select;
}

export { PhoneSelect };