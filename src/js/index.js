// index.js
import render from './route.js';

const $root = document.getElementById('root');
// const $navigation = document.getElementById('navigation');

// $navigation.addEventListener('click', e => {
//     if (!e.target.matches('#navigation > li > a')) return;

//     /**
//      * 네비게이션을 클릭하면 주소창의 url이 변경되므로 HTTP 요청이 서버로 전송된다.
//      * preventDefault를 사용하여 이를 방지하고 history 관리를 위한 처리를 실행한다.
//      */
//     e.preventDefault();

//     // 이동할 페이지의 path
//     const path = e.target.getAttribute('href');

//     // 현재 페이지와 이동할 페이지가 같으면 이동하지 않는다.
//     if (window.location.pathname === path) return;

//     // pushState는 주소창의 url을 변경하지만 HTTP 요청을 서버로 전송하지는 않는다.
//     window.history.pushState(null, null, path);
//     render(path, $root);
// });