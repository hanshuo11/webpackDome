import { $ } from './comm/domReady';
$(function () {
    setTimeout(() => {
        document.getElementById("app").innerHTML = "Hello";
    }, 3000)
})