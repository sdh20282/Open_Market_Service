import { spanStyle } from "../../../styles/components/Spans/DivideSpanStyle.js";

const DivideSpan = () => {
    const span = document.createElement('span');
    span.textContent = '|';
    spanStyle(span);

    return span;
}

export { DivideSpan };