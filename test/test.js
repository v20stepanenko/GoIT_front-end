var div = document.querySelector('.div');
div.addEventListener('click', function () {
    slideLeft(div);
});

let state = 0;

var slideLeft = function (el) {

    let iterationInterval = 0;

    const divMoveLeft = (step) => {
        let leftSize = el.style.left || 0;
        leftSize = parseInt(leftSize);
        leftSize += step;
        el.style.left = leftSize + 'px';
    };

    const divMoveStart = () => {
        let sizeToRight = parseInt(el.style.left);
        const intervalToStart = setInterval(()=>{
            if(parseInt(el.style.left)===0){
                clearInterval(intervalToStart);
            }
            divMoveLeft(-1);
        }, 20);
    };



    if(state !== 3) {
        const interval = setInterval(() => {
            divMoveLeft(1);
            if (iterationInterval === 20) {
                clearInterval(interval);
            }
            iterationInterval++;
        }, 40);
        state++;
    }else{
        divMoveStart();
        state = 0;
    }

};