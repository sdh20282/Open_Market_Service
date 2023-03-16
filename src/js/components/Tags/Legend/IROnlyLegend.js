import { IROnly } from "../../utils/utils.js";

const IROnlyLegend = () => {
    const legend = document.createElement('legend');
    IROnly(legend);

    return legend;
}

export { IROnlyLegend };