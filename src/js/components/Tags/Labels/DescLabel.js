import { labelStyle } from "../../../styles/components/Labels/DescLabelStyle.js";

const DescLabel = () => {
    const label = document.createElement('label');
    labelStyle(label);
    
    return label;
}

export { DescLabel };