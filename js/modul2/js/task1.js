"use strict";
console.log('task1');
var task1 = () => {
    var oldElemInput = document.getElementById('old-in');
    var dateYear = new Date().getFullYear();
    var taskItem = getTaskItem(1);
    var writeBlock = taskItem.writeBlock;
    oldElemInput.onkeyup = function () {
        var numberOld = oldElemInput.value;
        switch (numberOld.length) {
            case(2):
                numberOld = parseInt(numberOld);
                if ((dateYear - ( 2000 + numberOld )) > 2) {

                    numberOld = 2000 + parseInt(numberOld);
                } else {
                    numberOld = 1900 + parseInt(numberOld);
                }
                writeOld();
                break;
            case(4):
                numberOld = parseInt(numberOld);
                writeOld();
                break;
            default:
                write('Происходит какая то фигня, введите реальный год рождения')
        }
        function writeOld() {
            if (numberOld <= dateYear) {
                var currentOld = dateYear - numberOld;
                write(writeBlock, "Вам " + currentOld + " лет.");
            }
        }
    };
};

task1();
viewJs(getTaskItem(1).codeBlock, task1);
