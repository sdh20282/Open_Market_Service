import Header from "./Header.js";
import { BodyStyle } from "../../styles/pages/Share/BodyStyle.js";

const MainPage = async () => {
    const body = document.body;
    BodyStyle(body);

    const fragment = new DocumentFragment();
    fragment.appendChild(Header());

    return fragment;
};

export default MainPage;