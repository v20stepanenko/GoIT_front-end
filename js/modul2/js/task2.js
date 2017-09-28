"use strict";
console.log('task2');
function task2() {
    var taskItem = getTaskItem(2);
    var writeElem = taskItem.writeBlock;
    var firstNum = document.getElementById('first-num'),
        secondNum = document.getElementById('second-num');

    function comparatorInput(num1In, num2In) {
        return num1In >= num2In ? num1In : num2In;
    }
    
    var arrInput = [firstNum, secondNum];
    
        arrInput.forEach(function (item) {
            item.onkeyup = () => {
                var number1 =  parseInt(firstNum.value) || 0;
                var number2 =  parseInt(secondNum.value) || 0;
                var max = comparatorInput(number1, number2);
                write(writeElem, 'Максимальное число = ' + max);
            }
        });
}

task2();
viewJs(getTaskItem(2).codeBlock, task2);
