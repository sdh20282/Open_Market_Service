import MainPage from './pages/MainPage/MainPage.js'
import LoginPage from './pages/LoginPage/LoginPage.js'
import RegisterPage from './pages/RegisterPage/RegisterPage.js'
import NotFoundPage from './pages/NotFoundPage/main.js'

import MainPageScript from './scripts/MainPage/MainPageScript.js'
import loginPageScript from './scripts/LoginPage/LoginPageScript.js'
import RegisterPageScript from './scripts/RegisterPage/RegisterPageScript.js'


const routes = [
    // { path: '/', component: MainPage, activeScript: MainPageScript },
    { path: '/', component: LoginPage, activeScript: loginPageScript },
    { path: '/login', component: LoginPage, activeScript: loginPageScript },
    { path: '/register', component: RegisterPage, activeScript: RegisterPageScript },
];

const render = async (path, element, state) => {
    const _path = path ?? window.location.pathname;

    try {
        const page = routes.find(route => route.path === _path);

        if (!page) {
            element.replaceChildren(NotFoundPage());
            return;
        }

        element.replaceChildren(await page.component(state));
        await initLinks(state);
        await page.activeScript(state);
    } catch (err) {
        console.error(err);
    }
};

const initRouter = (element, state) => {
    // navigation.addEventListener('click', e => {
    //     // server 요청을 막기위해 preventDefault 호출
    //     e.preventDefault();

    //     const path = e.target.getAttribute('href');
    //     window.history.pushState({}, null, path);
    //     render(path);
    // });

    window.addEventListener('popstate', () => {
        render(undefined, element, state);
    });

    window.addEventListener('DOMContentLoaded', () => {
        render(undefined, element, state);
    });
}

const moveLink = async (pathName, state) => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    render(pathName, document.querySelector("#root"), state);
}

const initLinks = async (state) => {
    document.querySelectorAll('a').forEach((item) => {

        item.addEventListener('click', (event) => {
            event.preventDefault();

            const pathName = event.currentTarget.getAttribute("href");

            if (window.location.pathname === pathName) return;

            moveLink(pathName, state);
        })
    });
}

export default initRouter;
export { moveLink };