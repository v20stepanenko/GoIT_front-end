(()=>{
   const panel = document.querySelector('.panel');
   panel.addEventListener('click', (event) => {
       event.target.closest('.click').classList.toggle('in');
   });

   const btnNewDiv = document.querySelector('input');
    btnNewDiv.addEventListener('click', ()=>{
        const newDiv = document.createElement('div');
        newDiv.classList.add('square', 'click');
        panel.appendChild(newDiv);
        console.log(newDiv);
    });
})();