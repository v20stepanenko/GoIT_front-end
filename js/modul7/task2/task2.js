(()=>{
   let panel = document.querySelector('.panel');
   panel.addEventListener('click', (event) => {
       event.target.closest('.click').classList.toggle('in');
   });

   let btnNewDiv = document.querySelector('input');
    btnNewDiv.addEventListener('click', ()=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('square', 'click');
        panel.appendChild(newDiv);
        console.log(newDiv);
    })
})();