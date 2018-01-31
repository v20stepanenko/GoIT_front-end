(() => {
    const templateInputGroup = `
    <div class = "input-group">
       <input type = "text" class = "input-group__input empty-in" />
       <button data-remove >-</button>
    </div>
    `;

    const panel = document.querySelector(".panel");
    const inputAddDomNode = document.querySelector('#addNewInput');


    const setEmptyInput = new Set();


    inputAddDomNode.addEventListener('click', () => {
        const newBlock = new DOMParser().parseFromString(templateInputGroup, 'text/html').firstChild;
        setEmptyInput.add(newBlock.querySelector('input'));
        panel.insertBefore(newBlock, panel.children[1]);
    });


    panel.addEventListener('click', (event) => {
        const eventTarget = event.target;
        if (eventTarget.hasAttribute('data-remove')) {
            setEmptyInput.delete(eventTarget.parentNode.querySelector('input'));
            eventTarget.parentNode.remove();
        }
    });

    panel.addEventListener('keyup', (event) => {
        const eventTarget = event.target;
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


    const collectBtn = document.querySelector('#collect');
    const textArea = document.querySelector('#textarea');

    const formCondition = document.querySelector('#form-condition');
    formCondition.all = formCondition.querySelector('#all');
    formCondition.even = formCondition.querySelector('#even');
    formCondition.odd = formCondition.querySelector('#odd');

    const getConditionToCollect = () => {

        const condition = {
            condition: '',
            all: 'all',
            even: 'even',
            odd: 'odd'
            
        };

        if (formCondition.all.checked) {
            condition.condition = condition.all;
        } else if (formCondition.even.checked) {
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
        const allInputPanel = document.querySelectorAll('.input-group__input');
        let text = '';
        const separator = ' --&&-- ';
        const condition = getConditionToCollect();

        const textCollect = (inputText) => {
            text += inputText.value + separator;
        };

        allInputPanel.forEach((inputText, index) => {
            const numberInput = index + 1;
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

        const regExp = new RegExp(separator + '$', 'm'); // regExp for delete last separatorr
        text = text.replace(regExp, '');
        textArea.innerHTML = text;
    });

})
();

