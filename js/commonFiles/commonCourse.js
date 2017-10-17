;
"use strict";

function viewJs(blockSelector, ...code) {
    let parentBlock = document.querySelector(blockSelector),
        viewBlock = document.createElement('div'),
        btnView = document.createElement('button'),
        jsBlock = document.createElement('div');
    btnView.innerHTML += 'Посмотреть код';
    viewBlock.appendChild(btnView);
    code.forEach(item => {
        jsBlock.innerHTML += '<pre>' + item + '</pre>';
    });
    jsBlock.className = 'js-block hidden';
    viewBlock.appendChild(jsBlock);
    btnView.onclick = () => {
        jsBlock.classList.toggle('hidden');
    };
    parentBlock.appendChild(viewBlock);
}

let commonFunctionView = (function () {
    let blockFunction;
    if (!blockFunction) {
        blockFunction = document.createElement('div');
        blockFunction.className = 'common-func';
        let bodyPage = document.body;
        bodyPage.insertBefore(blockFunction, bodyPage.firstChild);
        let header = document.createElement('h2');
        header.innerHTML = 'Общие функции';
        blockFunction.appendChild(header);
        viewJs('.common-func', '');
        window.onscroll = () => {
            if (window.pageYOffset > 68) {
                blockFunction.classList.add('fixed');
            } else {
                blockFunction.classList.remove('fixed');
            }
        };
    }
    return function (...code) {
        let jsBlock = blockFunction.querySelector('.js-block');
        code.forEach(cod => {
            jsBlock.innerHTML += `<pre> ${cod} </pre>`;
        });
    }
})();



