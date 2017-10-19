function doSomethingElements(selector, perform) {
    let allElementsSelector = document.querySelectorAll(selector);
    allElementsSelector.forEach(perform);
}

commonFunctionView(doSomethingElements);

let task1 = () => {
    doSomethingElements('p', p => p.style.background = 'red'); // Общая функция
    console.log('task1');
};
task1();

viewJs('.task1', task1);

let task2 = () => {
    doSomethingElements('img', img => img.style.boxShadow = '10px 10px 0px -6px rgba(0,0,0,0.75)'); // Общая функция
    console.log('task2');
};
task2();

viewJs('.task2', task2);

let task3 = () => {  //Решение связываеться с стилями страницы, контент елем бефо задается атрибутом
    // и я не совсем понял задание
    doSomethingElements('p', ((pElem, pIndex) => {
        pElem.setAttribute('sequence', `№ ${pIndex}:`);
    }));
    console.log('task3');
};
task3();

viewJs('.task3', task3);

let task4 = () => {
    let counter = 0;
    document.querySelectorAll('.task4 button').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.task4 .counter').innerHTML = counter++;
        })
    });
    console.log('task4');
};
task4();

viewJs('.task4', task4);

let task5 = () => {
    let multiply = document.querySelector('#result'),
        baseInput = document.querySelector('#base'),
        extentInput = document.querySelector('#extent');

    multiply.addEventListener('click', () => {
        let baseNumber = parseFloat(baseInput.value);
        let extentNumber = parseFloat(extentInput.value);
        let result = Math.pow(baseNumber, extentNumber);
        alert(result);
        baseInput.value = '';
        extentInput.value = '';
    });
    console.log('task5');
};
task5();

viewJs('.task5', task5);

let task6 = () => {
    let button = document.querySelector('.task6 button');
    let inputTag = document.querySelector('.task6 input');
    button.addEventListener('click', () => {
        doSomethingElements(inputTag.value, item => {
            item.style.textDecoration = 'underline';
        });
    });
    console.log('task6');
};
task6();

viewJs('.task6', task6);

let task7 = () => {
    let inputOld = document.querySelector('.task7 input'),
        submit = document.querySelector('.task7 button'),
        writer = document.querySelector('.task7 .writer');
    submit.addEventListener('click', () => {
        if (inputOld.value >= 16) {
            writer.innerHTML = 'Добро пожаловать';
        } else {
            writer.innerHTML = 'Вы еще молоды';
        }

    });
    console.log('task7');
};
task7();

viewJs('.task7', task7);

let task8 = () => {
    let inputOld = document.querySelector('.task8 input'),
        submit = document.querySelector('.task8 button'),
        writer = document.querySelector('.task8 .writer');
    submit.addEventListener('click', () => {
        let old = inputOld.value;
        console.log(old);
        if (old === undefined || old <= 0) {
            writer.innerHTML = 'Введите возраст';
        } else if (old >= 16) {
            writer.innerHTML = 'Добро пожаловать';
        } else {
            writer.innerHTML = 'Вы еще молоды';
        }

    });
    console.log('task8');
};
task8();

viewJs('.task8', task8);

let task9 = () => {
    function lengthArr(arr) {
        if (arguments.length === 0) {
            throw "vse normalno eto ya otlavlivayu svoi exception po usloviyam zadachi";
        } else if (arr.length !== undefined) {
            console.log(arr.length);
        }
    }
    console.log('start task9');
    lengthArr([5, 5, 88]);

    try {
        lengthArr();
    } catch (e) {
        console.error(e);
    }
    console.log('end task9');
    console.log('task9');
};
task9();

viewJs('.task9', task9);

let task10 = () => {
  function task(input) {
      if(input > 10){
          return Math.pow(input, 2);
      }else if(input < 7){
          return 'число меньше 7';
      }else if(input === 8 || input ===9){
          return --input;
      }else{
          return 'Да, это дыра, и кто состовлял такие дз? и зачем?'
      }
  }

  let inputNumber = document.querySelector('.task10 input'),
  writer = document.querySelector('.task10 .writer');

  inputNumber.addEventListener('keyup', () =>{
      writer.innerHTML = task(parseFloat(inputNumber.value));
  });
    console.log('task10');
};
task10();

viewJs('.task10', task10);

let task11 = () =>{
    let writer = document.querySelector('.task11 .writer');
    function write(text) {
        writer.innerHTML = text;
    }

    let randomNum = 0;

    function setNewRandomNum() {
        randomNum = parseInt(Math.floor(Math.random() * 10));
    }

    let inputValue = (document.querySelector('#inputNum')),
        submit = document.querySelector('#submit'),
        btnRestart = document.querySelector('#restart');
    let intInValue = () => parseInt(inputValue.value);
    let counter = 0,
        game = true;

    function limitInput(min, max, inputElem) {
        inputElem.addEventListener('keyup', () => {
            let intValue = parseInt(inputElem.value);
            if (intValue > max) {
                inputElem.value = max;
            } else if (intValue < min) {
                inputElem.value = min;
            }
        });
    }

    limitInput(0, 10, inputValue);

    function gameOff() {
        game = false;
        write('end');
        btnRestart.style.display = 'inline-block';
    }

    submit.onclick = () => {
        counter++;
        if (counter <= 3 && game) {
            if (randomNum === intInValue()) {
                write('ugadal');
                gameOff();
            } else if (intInValue() > randomNum) {
                write(`perebor, u vas ${3 - counter} popitki(a)`);
            } else if (intInValue() < randomNum) {
                write(`nedobor, u vas ${3 - counter} popitki(a)`);
            }
        }
        if (counter >= 3 && game) {
            gameOff();
        }
    };

    btnRestart.onclick = () => {
        startNewGame();
    };

    function startNewGame() {
        write('new game');
        counter = 0;
        game = true;
        setNewRandomNum();
        inputValue.value = '';
        btnRestart.style.display = 'none';
    }
    write('Привет друг, угадай число, у тебя 3 попытки( 0 < num < 10)');
    console.log('task11');
};
task11();

viewJs('.task11', task11);