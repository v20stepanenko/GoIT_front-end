"use strict";
console.log('task3');
function task3() {
    let floatNum = document.getElementById('float-num'),
        taskItem = getTaskItem(3),
        writeBlock = taskItem.writeBlock;

    function writeEnterence(enterence) {
        let text = 'У вас ' + enterence + ' подъезд';
        return write(writeBlock, text);
    }

    floatNum.onkeyup = () => {
        let number = parseInt(floatNum.value);
        if (number < 1 || number > 80) {
            writeEnterence(' не существующий ')
            return;
        }
        if (number >= 1 && number <= 20) {
            writeEnterence(1);
        } else if (number >= 21 && number <= 64) {
            writeEnterence(2)
        } else {
            writeEnterence(3)
        }
    }
}

task3();
viewJs(getTaskItem(3).codeBlock, task3);
