import Header from "./Header.js";
import Main from "./Main.js";
import { BodyStyle } from "../../styles/pages/Share/BodyStyle.js";

const LoginPage = async () => {
    const body = document.body;
    BodyStyle(body);

    const fragment = new DocumentFragment();
    fragment.appendChild(Header());
    fragment.appendChild(Main());

    return fragment;
};

export default LoginPage;