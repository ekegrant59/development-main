

const menuBtn = document.querySelector('#menuBtn');
const sideBar = document.querySelector('#logoSidebar');
const closeBtn = document.querySelector('#closeMenu');


    

    menuBtn.addEventListener('click', () => {
        sideBar.classList.remove('-translate-x-[110%]'); 
    });

    closeBtn.addEventListener('click', () => {
        sideBar.classList.add('-translate-x-[110%]'); 
    });

  const hideCloseBtn =() => {
    // if(sideBar.classList.contains('-translate-x-full')){
    //     closeBtn.classList.add('hidden')
    // }
    // else{
    //     closeBtn.classList.add('block')
    // }
  }

  hideCloseBtn()

    // document.body.addEventListener('click', ()=>{
    //     if(!sideBar.classList.contains('-translate-x-full')){
    //          sideBar.style.display = 'hidden'
    //         console.log(2)
    //     }
    // })

    // sideBar.addEventListener('click', () => {

    // } )