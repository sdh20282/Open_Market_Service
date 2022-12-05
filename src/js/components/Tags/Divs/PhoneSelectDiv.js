import { divStyle } from "../../../styles/components/Divs/PhoneSelectDivStyle.js";

const PhoneSelectDiv = () => {
    const div = document.createElement('div');
    divStyle(div);

    return div;
}

export { PhoneSelectDiv };