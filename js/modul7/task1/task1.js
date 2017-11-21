(() => {
    let templateInputGroup = `
    <div class = "input-group">
       <input type = "text" class = "input-group__input empty-in" />
       <button data-remove >-</button>
    </div>
    `;

    let panel = document.querySelector(".panel");
    let inputAddDomNode = document.querySelector('#addNewInput');


    let setEmptyInput = new Set();

    inputAddDomNode.addEventListener('click', () => {
        let newBlock = new DOMParser().parseFromString(templateInputGroup, 'text/html');
        newBlock = newBlock.firstChild;
        setEmptyInput.add(newBlock.querySelector('input'));
        panel.insertBefore(newBlock, panel.children[1]); //как сделать что бы не привязываться к индексу?
    });

    panel.addEventListener('click', (event) => {
        let eventTarget = event.target;
        if (eventTarget.hasAttribute('data-remove')) {
            setEmptyInput.delete(eventTarget.parentNode.querySelector('input'));
            eventTarget.parentNode.remove();
        }
    });

    panel.addEventListener('keyup', (event) => {
        let eventTarget = event.target;
        if (eventTarget.classList.contains('input-group__input')) {
            if (eventTarget.value === '') {
                eventTarget.classList.add('empty-in');
                setEmptyInput.add(eventTarget);
            } else if (eventTarget.classList.contains('empty-in')) {
                eventTarget.classList.remove('empty-in');
                setEmptyInput.delete(eventTarget);
            }
        }
    });


    let collectBtn = document.querySelector('#collect');
    let textArea = document.querySelector('#textarea');

    let formCondition = document.querySelector('#form-condition');
    formCondition.all = formCondition.querySelector('#all');
    formCondition.even = formCondition.querySelector('#even');
    formCondition.odd = formCondition.querySelector('#odd');

    let getConditionToCollect = () => {

        let condition = {
            condition: '',
            all: 'all',
            even: 'even',
            odd: 'odd'
        };

        if (formCondition.all.checked) {
            condition.condition = condition.all;
        }
        else if (formCondition.even.checked) {
            condition.condition = condition.even;
        } else if (formCondition.odd.checked) {
            condition.condition = condition.odd;
        }

        return condition;
    };

    collectBtn.addEventListener('click', () => {
        if(setEmptyInput.size !== 0) {
            alert('Fill empty filed');
            return;
        }
        let allInputPanel = document.querySelectorAll('.input-group__input');
        let text = '';
        let separator = '--&&--';
        let condition = getConditionToCollect();

        let textCollect = (inputText) => {
            text += inputText.value + separator;
        };

        allInputPanel.forEach((inputText, index) => {
            let numberInput = index + 1;
            if (condition.condition === condition.all) {
                textCollect(inputText);
            } else if (condition.condition === condition.even) {
                if (numberInput % 2 === 0) {
                    textCollect(inputText);
                }
            } else if (condition.condition === condition.odd) {
                if (numberInput % 2 !== 0) {
                    textCollect(inputText);
                }
            }
        });

        let regExp = new RegExp(separator + '$', 'm'); // regExp for delete last separator
        text = text.replace(regExp, '');
        textArea.innerHTML = text;
    });

})
();

