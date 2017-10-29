(() => {
  let taskBlock1 = document.querySelector('.task1'),
    inputString = taskBlock1.querySelector('input'),
    writeBlock = taskBlock1.querySelector('.write')

  inputString.addEventListener('keyup', () => {
    setTimeout(() => {
      writeBlock.innerHTML = inputString.value.length
    }, 500)
  })
})();
(() => {
  let taskBlock2 = document.querySelector('.task2')

  function createNewPNG (relativePath) {
    let newImg = document.createElement('img')
    newImg.src = relativePath
    newImg.style.width = '100px'
    return newImg
  }

  let arrImgName = ['1', '2']
  arrImgName.forEach((name) => {
    let img = createNewPNG('img/' + name + '.png')
    taskBlock2.appendChild(img)
  })

})();

(() => {
  let taskBlock3 = document.querySelector('.task3'),
    inputString = taskBlock3.querySelector('input'),
    writeBlock = taskBlock3.querySelector('.write')

  inputString.addEventListener('keyup', () => {
    let inputSubString = inputString.value.substring(0, 8)
    let str = inputSubString.replace('https://', '')
    console.log(str.length)
    if (str.length > 0) {
      str = inputSubString.replace('http://', '')
    }
    str += inputString.value.substring(8)
    writeBlock.innerHTML = str
  })
})();

(() => {
  let taskBlock4 = document.querySelector('.task4'),
    inputString = taskBlock4.querySelector('input'),
    writeBlock = taskBlock4.querySelector('.write')

  inputString.addEventListener('keyup', () => {
    let str = inputString.value
    let replaceArr = ['http://', 'https://', 'www.', '.ua']
    replaceArr.forEach((replaceStr) => {
      str = str.replace(replaceStr, '')
    })
    writeBlock.innerHTML = str
  })
})();

(() => {
  let form = document.querySelector('.task5 form'),
    inputFirstName = form.querySelector('#first-name'),
    inputSecondName = form.querySelector('#second-name'),
    inputEmail = form.querySelector('#email'),
    submitBtn = form.querySelector('#submit');

  function findCharAtString (string, ...char) {
    let arrChar = Array.from(string);
    let result = false;
    char.forEach(char => {
     if(arrChar.some(stringChar=> stringChar === char)){
       result = true;
       return;
     }
    });
    return result;
  }

  let arrNoValid = [' ', '.', '@', '#']

  submitBtn.addEventListener('click', () => {

  })

})();

(()=>{
  function CustomValidation() { }

  CustomValidation.prototype = {
    // Установим пустой массив сообщений об ошибках
    invalidities: [],

    // Метод, проверяющий валидность
    checkValidity: function(input) {

      var validity = input.validity;

      if (validity.patternMismatch) {
        this.addInvalidity('This is the wrong pattern for this field');
      }

      if (validity.rangeOverflow) {
        var max = getAttributeValue(input, 'max');
        this.addInvalidity('The maximum value should be ' + max);
      }

      if (validity.rangeUnderflow) {
        var min = getAttributeValue(input, 'min');
        this.addInvalidity('The minimum value should be ' + min);
      }

      if (validity.stepMismatch) {
        var step = getAttributeValue(input, 'step');
        this.addInvalidity('This number needs to be a multiple of ' + step);
      }

      // И остальные проверки валидности...
    },

    // Добавляем сообщение об ошибке в массив ошибок
    addInvalidity: function(message) {
      this.invalidities.push(message);
    },

    // Получаем общий текст сообщений об ошибках
    getInvalidities: function() {
      return this.invalidities.join('. \n');
    }
  };

// Добавляем обработчик клика на кнопку отправки формы
  submit.addEventListener('click', function(e) {
    // Пройдёмся по всем полям
    for (var i = 0; i < inputs.length; i++) {

      var input = inputs[i];

      // Проверим валидность поля, используя встроенную в JavaScript функцию checkValidity()
      if (input.checkValidity() == false) {

        var inputCustomValidation = new CustomValidation(); // Создадим объект CustomValidation
        inputCustomValidation.checkValidity(input); // Выявим ошибки
        var customValidityMessage = inputCustomValidation.getInvalidities(); // Получим все сообщения об ошибках
        input.setCustomValidity(customValidityMessage); // Установим специальное сообщение об ошибке

      } // закончился if
    } // закончился цикл
  });

  CustomValidation.prototype.getInvaliditiesForHTML = function() {
    return this.invalidities.join('. <br>');
  }

// Добавляем обработчик клика на кнопку отправки формы
  submit.addEventListener('click', function(e) {
    // Пройдёмся по всем полям
    for (var i = 0; i < inputs.length; i++) {

      var input = inputs[i];

      // Проверим валидность поля, используя встроенную в JavaScript функцию checkValidity()
      if (input.checkValidity() == false) {

        var inputCustomValidation = new CustomValidation(); // Создадим объект CustomValidation
        inputCustomValidation.checkValidity(input); // Выявим ошибки
        var customValidityMessage = inputCustomValidation.getInvalidities(); // Получим все сообщения об ошибках
        input.setCustomValidity(customValidityMessage); // Установим специальное сообщение об ошибке

        // Добавим ошибки в документ
        var customValidityMessageForHTML = inputCustomValidation.getInvaliditiesForHTML();
        input.insertAdjacentHTML('afterend', '<p class="error-message">' + customValidityMessageForHTML + '</p>')
        stopSubmit = true;

      } // закончился if
    } // закончился цикл

    if (stopSubmit) {
      e.preventDefault();
    }
  });
})();