import { MainMB100Style } from "../../../styles/components/Mains/MainMB100Style.js";

const MainMB100 = () => {
    const main = document.createElement('main');
    MainMB100Style(main);

    return main;
}

export { MainMB100 };