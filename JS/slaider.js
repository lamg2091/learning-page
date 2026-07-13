(function(){
    const slaiders = [...document.querySelectorAll('.testimony__body')];
    const ButtonNext = document.querySelector('#next');
    const ButtonBefore = document.querySelector('#before');

    let value;

    ButtonNext.addEventListener('click', () =>{
        changePosition(1);
    })

    ButtonBefore.addEventListener('click', () =>{
         changePosition(-1);
    })

    const changePosition = (add) => {
       const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
       value = Number(currentTestimony);
       value += add;

       slaiders[Number(currentTestimony)-1].classList.remove('testimony__body--show')
      if(value === slaiders.length+1 || value === 0){
         value = value === 0 ? slaiders.length :  1;
      }
        slaiders[value-1].classList.add('testimony__body--show')
    }


})();