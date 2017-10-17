var arr = [];

var arrInput= {
    index: document.querySelector('#index'),
    value: document.querySelector('#value'),
    resetPlaceholder: function () {
        this.index.value = '';
        this.value.value = '';
    }
};



var submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', submitForm);

function writeArr() {
    var writeDiv = document.querySelector('#write');
    writeDiv.innerHTML = arr;
    arrInput.resetPlaceholder();
}

function submitForm() {
    var readyIndex = parseInt(arrInput.index.value);
    arr[readyIndex] = arrInput.value.value;
    writeArr();
}


var popButton = document.querySelector('#popButton');

popButton.addEventListener('click', popArray);

function popArray() {
    arr.pop();
    writeArr();
}

var pushButton = document.querySelector('#pushButton');

pushButton.addEventListener('click', pushArray);

function pushArray() {
    var value = document.querySelector('#value');

    arr.push(value.value);
    writeArr();
}

var shiftButton = document.querySelector('#shiftButton');

shiftButton.addEventListener('click', shiftArray);

function shiftArray() {
    arr.shift();
    writeArr();
}

var unshiftButton = document.querySelector('#unshiftButton');

unshiftButton.addEventListener('click', unshiftArray);

function unshiftArray() {
    var value = document.querySelector('#value');

    arr.unshift(value.value);
    writeArr();
}

var resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', resetArray);


function resetArray() {
    arr = [];
    writeArr();
}