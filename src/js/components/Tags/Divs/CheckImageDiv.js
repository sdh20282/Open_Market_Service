import { divStyle } from "../../../styles/components/Divs/CheckImageDivStyle.js";

const CheckImageDiv = () => {
    const div = document.createElement('div');
    divStyle(div);

    return div;
}

export { CheckImageDiv };