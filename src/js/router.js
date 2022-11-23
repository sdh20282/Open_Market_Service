import MainPage from './pages/MainPage/MainPage.js'
import LoginPage from './pages/LoginPage/LoginPage.js'
import NotFoundPage from './pages/NotFoundPage/main.js'

import MainPageScript from './scripts/MainPage/MainPageScript.js'
import initLoginPageScript from './scripts/LoginPage/LoginPageScript.js'


const routes = [
    { path: '/', component: MainPage, activeScript: MainPageScript },
    { path: '/login', component: LoginPage, activeScript: initLoginPageScript },
];

const render = async (path, element) => {
    // $navigation의 a 요소를 클릭하면 path(a 요소의 href)가 전달된다.
    // 하지만 웹페이지가 처음 로딩되거나 앞으로/뒤로 가기 버튼을 클릭하면 path를 전달하지 않는다.
    // 이때 window.location.pathname를 키로 routes에서 컴포넌트를 결정해 뷰를 전환한다.
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


        // const component = routes.find(route => route.path === _path)?.component || NotFoundPage;
        // element.replaceChildren(await component());
        // initRoutingEvent();
        // MainPageController();
    } catch (err) {
        console.error(err);
    }
};

const initRouter = (element) => {
    /**
     * pjax 방식은 hash를 사용하지 않으므로 hashchange 이벤트를 사용할 수 없다.
     * popstate 이벤트는 pushState에 의해 발생하지 않고 앞으로/뒤로 가기 버튼을 클릭하거나
     * history.forward/back/go(n)에 의해 history entry가 변경되면 발생한다.
     * 앞으로/뒤로 가기 버튼을 클릭하면 window.location.pathname를 참조해 뷰를 전환한다.
     */
    window.addEventListener('popstate', () => {
        // console.log('[popstate]', window.location.pathname);
        render(undefined, element);
    });

    /**
     * 웹페이지가 처음 로딩되면 window.location.pathname를 확인해 페이지를 이동시킨다.
     * 새로고침을 클릭하면 현 페이지(예를 들어 localhost:5004/service)가 서버에 요청된다.
     * 이에 응답하는 처리는 서버에서 구현해야 한다.
     */
    window.addEventListener('DOMContentLoaded', () => {
        render(undefined, element);
    });
}

const initLinks = async () => {
    /**
     * a 태그의 기존 이벤트 대신 라우팅이 일어날 수 있도록 한다. 
     * URL에 변경사항이 반영될 수 있도록 한다.
     */
    document.querySelectorAll('a').forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const pathName = event.currentTarget.getAttribute("href");
            
            // 현재 페이지의 URL과 같은 URL일 경우 라우팅하지 않는다.
            if (window.location.pathname === pathName) return;

            window.history.pushState({}, pathName, window.location.origin + pathName);
            render(pathName, document.querySelector("#root"));
        })
    })
}

export { initRouter };