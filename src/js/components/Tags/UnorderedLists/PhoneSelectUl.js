import { ulStyle } from "../../../styles/components/UnorderedLists/PhoneSelectUlStyle.js";

const PhoneSelectUl = () => {
    const ul = document.createElement('ul');
    ulStyle(ul);
    ul.setAttribute('id', 'PhoneSelectUl');

    // document.styleSheets.length = 2
    // console.log(document.styleSheets);

    setTimeout(() => {
        console.log(document.styleSheets);
        document.styleSheets[0].insertRule('#PhoneSelectUl::-webkit-scrollbar { display: none }', 0);
        document.styleSheets[0].cssRules[0].style.display = 'none';
    }, 100);



    // let i = document.styleSheets.length;
    // let ss = document.styleSheets[0];
    // console.log(ss);
    // let l = ss.cssRules.length;

    // ss.insertRule('#PhoneSelectUl::-webkit-scrollbar { display: none }', l);

    return ul;
}

export { PhoneSelectUl };