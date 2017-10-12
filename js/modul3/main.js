
var arr = [];

var submitButton =  document.querySelector('#submitButton');

submitButton.addEventListener('click', submitForm);

function submitForm () {
    var index = document.querySelector('#index');
    var value = document.querySelector('#value');
    var readyIndex = parseInt(index.value);

    arr[readyIndex] = value.value;
    alert(arr);
}


var popButton =  document.querySelector('#popButton');

popButton.addEventListener('click', popArray);

function popArray () {
    arr.pop();
    alert(arr);
}

var pushButton =  document.querySelector('#pushButton');

pushButton.addEventListener('click', pushArray);

function pushArray () {
    var value = document.querySelector('#value');

    arr.push(value.value);
    alert(arr);
}

var shiftButton =  document.querySelector('#shiftButton');

shiftButton.addEventListener('click', shiftArray);

function shiftArray () {
    arr.shift();
    alert(arr);
}

var unshiftButton =  document.querySelector('#unshiftButton');

unshiftButton.addEventListener('click', unshiftArray);

function unshiftArray () {
    var value = document.querySelector('#value');

    arr.unshift(value.value);
    alert(arr);
}