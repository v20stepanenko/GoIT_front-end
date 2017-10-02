function writArray(blockSelector, array) { //Напишите функцию для вывода элементов массива в элемент
    let blockWriter = document.querySelector(blockSelector),
    arrayText = '';

    array.forEach((item, index)=>{
        arrayText += index + ': [' + item + ']<br/>';
    });
    blockWriter.innerHTML = arrayText;
}