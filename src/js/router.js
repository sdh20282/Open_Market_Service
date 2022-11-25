import MainPage from './pages/MainPage/MainPage.js'
import LoginPage from './pages/LoginPage/LoginPage.js'
import NotFoundPage from './pages/NotFoundPage/main.js'

import MainPageScript from './scripts/MainPage/MainPageScript.js'
import initLoginPageScript from './scripts/LoginPage/LoginPageScript.js'


const routes = [
    { path: '/', component: MainPage, activeScript: MainPageScript },
    // { path: '/', component: LoginPage, activeScript: initLoginPageScript },
    { path: '/login', component: LoginPage, activeScript: initLoginPageScript },
];

const render = async (path, element) => {
    const _path = path ?? window.location.pathname;

    try {
        const page = routes.find(route => route.path === _path);

        if (!page) {
            element.replaceChildren(NotFoundPage());
            return;
        }

        element.replaceChildren(page.component());
        initLinks();
        page.activeScript();
    } catch (err) {
        console.error(err);
    }
};

const initRouter = (element) => {
    window.addEventListener('popstate', () => {
        render(undefined, element);
    });

    window.addEventListener('DOMContentLoaded', () => {
        render(undefined, element);
    });
}

const initLinks = async () => {
    document.querySelectorAll('a').forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();

            const pathName = event.currentTarget.getAttribute("href");

            if (window.location.pathname === pathName) return;

            window.history.pushState({}, pathName, window.location.origin + pathName);
            render(pathName, document.querySelector("#root"));
        })
    })
}

export default initRouter;