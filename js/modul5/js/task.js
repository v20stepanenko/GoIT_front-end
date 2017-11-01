;"use strict";

(() => {
    let taskBlock1 = document.querySelector('.task1'),
        inputString = taskBlock1.querySelector('input'),
        writeBlock = taskBlock1.querySelector('.write');

    inputString.addEventListener('keyup', () => {
        setTimeout(() => {
            writeBlock.innerHTML = inputString.value.length
        }, 500)
    })
})();
(() => {
    let taskBlock2 = document.querySelector('.task2'),
        btnStartImg = taskBlock2.querySelector('button');

    btnStartImg.onclick = (event) => {
        let arrImgName = ['1', '2', 'morePic'];
        arrImgName.forEach((name) => {
            let img = createNewPNG('img/' + name + '.png');
            taskBlock2.appendChild(img);
        });
        event.target.onclick = null;
    };

    function createNewPNG(relativePath) {
        let newImg = document.createElement('img');
        newImg.src = relativePath;
        newImg.style.width = '100px';
        return newImg
    }

})();

(() => {
    let taskBlock3 = document.querySelector('.task3'),
        inputString = taskBlock3.querySelector('input'),
        writeBlock = taskBlock3.querySelector('.write');

    inputString.addEventListener('keyup', () => {
        let inputSubString = inputString.value.substring(0, 8);
        let str = inputSubString.replace('https://', '');
        console.log(str.length);
        if (str.length > 0) {
            str = inputSubString.replace('http://', '')
        }
        str += inputString.value.substring(8);
        writeBlock.innerHTML = str
    })
})();

(() => {
    let taskBlock4 = document.querySelector('.task4'),
        inputString = taskBlock4.querySelector('input'),
        writeBlock = taskBlock4.querySelector('.write');

    inputString.addEventListener('keyup', () => {
        let str = inputString.value;
        let replaceArr = ['http://', 'https://', 'www.', '.ua'];
        replaceArr.forEach((replaceStr) => {
            str = str.replace(replaceStr, '')
        });
        writeBlock.innerHTML = str
    })
})();

(() => {
    let form = document.querySelector('.task5 form'),
        inputFirstName = form.querySelector('#first-name'),
        inputSecondName = form.querySelector('#second-name'),
        inputEmail = form.querySelector('#email'),
        pass = form.querySelector('#pass'),
        submit = form.querySelector('#submit');

    form.validatyArr = [];
    form.validSubmit = function () {
        return this.validatyArr.every(validObj => validObj.valid);
    };

    function deleteSpace(input) {
        input.value = input.value.replace(/^\s/g, '');
        input.value = input.value.replace(/\s$/g, '');
    }

    function validClass(context) {
        context.classList.remove('invalid');
        context.classList.add('valid');
    }

    function invalidClass(context) {
        context.classList.add('invalid');
        context.classList.remove('valid');
    }

    function validName(input) {
        if (input.value.match(/^[a-z]+$/i)) {
            validClass(input);
            return true;
        } else {
            invalidClass(input);
            return false;
        }
    }

    function checkNameInput(input) {
        deleteSpace(input);
        let validObj = {};
        form.validatyArr.push(validObj);
        input.addEventListener('keyup', (event) => {
            validObj.valid = validName(event.target);
        });
    }

    checkNameInput(inputFirstName);
    checkNameInput(inputSecondName);
    (function checkEmail() {
        let validObj = {};
        form.validatyArr.push(validObj);
        inputEmail.addEventListener('keyup', (event) => {
            deleteSpace(event.target);
            if (inputEmail.value.match(/^(\d|\.|[a-z])+@[a-z]+\.[a-z]{2,10}$/i)) {
                validClass(event.target);
                validObj.valid = true;
            } else {
                invalidClass(event.target);
                validObj.valid = false;
            }
        })
    })();

    void function checkPass() {
        let validObj = {};
        form.validatyArr.push(validObj);
        pass.addEventListener('keyup', (event) => {
            deleteSpace(event.target);
            if (pass.value.match(/.{5}/)) {
                validClass(event.target);
                validObj.valid = true;
            } else {
                invalidClass(event.target);
                validObj.valid = false;
            }
        });
    }();
    submit.addEventListener('click', () => {
        console.log(form.validatyArr);
        console.log(form.validSubmit());
    })
})();


(() => {
    let taskBlock6 = document.querySelector('.task6'),
        writeBlock = taskBlock6.querySelector('.write');
    window.addEventListener('keypress', (event) => {
        writeBlock.innerHTML = event.keyCode;
    });
})();