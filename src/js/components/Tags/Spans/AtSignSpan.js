import { spanStyle } from "../../../styles/components/Spans/AtSignSpan.js";

const AtSignSpan = () => {
    const span = document.createElement('span');
    span.textContent = '@';
    spanStyle(span);

    return span;
}

export { AtSignSpan };