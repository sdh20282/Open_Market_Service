import Header from "./header.js";

const Main = () => {
    const body = document.body;
    body.style.margin = '0'
    body.style.padding = '0'
    body.style.fontSize = 'inherit'
    body.style.fontWeight = 'inherit'

    const fragment = new DocumentFragment();
    fragment.appendChild(Header());

    return fragment;
};

export default Main;