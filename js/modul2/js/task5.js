"use strict";
console.log('task5');
var task5 = () => {
    var arr = [];
    var taskBlock = tasksBlocks[4],
        inputs = taskBlock.getElementsByTagName('input'),
        writeElem = getTaskItem(5).writeBlock;
    inputs.forEach = Array.prototype.forEach;

    function maxNumber() {
        var max = -Infinity;
        console.log(arr);
        arr.forEach((item) =>{
            if(max < item) max = item;
        });
        return max;
    }
    function writeMax(){
        write(writeElem, maxNumber())
    }

    inputs.forEach((item, i)=>{
        item.onkeyup = function () {
            arr[i] = parseInt(item.value);
            writeMax(arr);
        }
    });
};
task5();
viewJs(getTaskItem(5).codeBlock, task5);
