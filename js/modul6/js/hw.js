(() => {
    let taskBlock = document.querySelector('.task1');
    let blockCoord = taskBlock.querySelector('.blockCoordinate');
    blockCoord.addEventListener('mousemove', (e) => {
        document.querySelector('.write').innerHTML = `Координата по х - ${e.clientX - 8} \n
                                                     координата у - ${e.clientY - 8}`
    });
})();

// TASK 1 END
(() => {
    let taskBlock = document.querySelector('.task2'),
        dir = taskBlock.querySelector('.dir');

    dir.addEventListener('dblclick', () => {
        dir.classList.toggle('close');
        dir.classList.toggle('open');
    })
})();

(() => {
    let taskBlock = document.querySelector('.task3');
    for (let i = 0; i < 300; i++) {
        let newDiv = document.createElement('div');
        taskBlock.appendChild(newDiv);
    }
    taskBlock.addEventListener('mouseover', (event) => {
        let randomTimeTransition = parseInt(Math.random() * 7 + 3);
        event.target.style.borderRadius = '50%';
        event.target.style.transition = randomTimeTransition + 's';
    })
})();

(() => {
    let taskBlcok = document.querySelector(".task4"),
        imgBlock = taskBlcok.querySelector('.imgBlock'),
        bgImg = taskBlcok.querySelector('.bgImg');
    imgBlock.addEventListener('click', (event) => {
        let src = event.target.src;
        bgImg.style.backgroundImage = `url("${src}")`;
    });
})();
(() => {
    let taskBlock = document.querySelector(".task5"),
        pushBlock = taskBlock.querySelector('.pushBlock');

    pushBlock.onclick = (e) => {
        let itemStyle = e.target.style;
        itemStyle.marginTop = itemStyle.marginTop ? parseInt(itemStyle.marginTop) + 100 + 'px'
            : '100px';
    };
})();
(() => {
    let taskBlock = document.querySelector('.task6'),
        triger = taskBlock.querySelector('.triger'),
        trigerItem = triger.querySelector('.triger__item');

    let position = 0;

    function setItemMarginRL(marginR, marginL) {
        trigerItem.style.marginLeft = marginL;
        trigerItem.style.marginRight = marginR;
        position++;
    }

    triger.onclick = () => {
        switch (position) {
            case(0): {
                console.log(position);
                setItemMarginRL('auto', 0);
                break;
            }
            case(1): {
                console.log(position);
                setItemMarginRL('auto', 'auto');
                break;
            }
            case(2): {
                console.log(position);
                setItemMarginRL(0, 'auto');
                position = 0;
                break;
            }
        }
    };
})();