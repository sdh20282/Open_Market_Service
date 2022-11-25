import Header from "./Header.js";
import Main from "./Main.js";

const LoginPage = () => {
    const body = document.body;
    body.style.margin = '0'
    body.style.padding = '0'
    body.style.fontSize = 'inherit'
    body.style.fontWeight = 'inherit'

    const fragment = new DocumentFragment();
    fragment.appendChild(Header());
    fragment.appendChild(Main());

    return fragment;
};

export default LoginPage;