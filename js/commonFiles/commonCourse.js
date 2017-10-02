;
"use strict";
function viewJs(blockSelector, code) {
    let blockView = document.querySelector(blockSelector),
        jsBlock = document.createElement('div');
    blockView.innerHTML = 'Посмотреть код';
    jsBlock.innerHTML = '<pre>' + code + '</pre>';
    jsBlock.className = 'hidden';
    blockView.appendChild(jsBlock);
    blockView.onclick = () =>{
        jsBlock.classList.toggle('hidden');
    };
}