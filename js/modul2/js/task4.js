"use strict";
console.log('task4');
function task4 () {
    var users = {
        ivan: '333',
        ssss: '666',
        gibs: '0000'
    };
    var login = document.getElementById('login'),
        pass = document.getElementById('pass'),
        writeBlock = getTaskItem(4).writeBlock,
        singIn = document.getElementById('sing-in');
    singIn.onclick = () => {
        if (pass.value === users[login.value]) {
            write(writeBlock, 'Добро пожаловать')
        } else {
            write(writeBlock, 'ошибка')
        }
    }
}
task4();
viewJs(getTaskItem(4).codeBlock, task4);
