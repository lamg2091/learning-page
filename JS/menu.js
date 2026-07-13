(function(){
 const openButton = document.querySelector('.nav__menu');
 const navLink = document.querySelector('.nav__link')
 const navClose = document.querySelector('.nav__close')

  openButton.addEventListener('click', ()=>{
    navLink.classList.add('nav__link--show');
  })
   navClose.addEventListener('click', ()=>{
     navLink.classList.remove('nav__link--show')
   })
})();