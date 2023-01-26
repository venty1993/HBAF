headerMenu();
scrollhead();

const menuText = document.querySelectorAll('a');
function headerMenu() {
    const header = document.querySelector('.hbaf-header');
    const headerNav = document.querySelector('.menu-tittle-wrapper');
    headerNav.addEventListener('mouseenter', ()=> {
        header.classList.add('header-active');
        header.classList.add('header-back');
        menuText[1].classList.add('header-menu-active');
        menuText[4].classList.add('header-menu-active');
        menuText[8].classList.add('header-menu-active');
        menuText[12].classList.add('header-menu-active');
        menuText[20].classList.add('header-menu-active');
    })
    
    header.addEventListener('mouseleave', ()=>{
        header.classList.remove('header-active')
        header.classList.remove('header-back');
        menuText[1].classList.remove('header-menu-active');
        menuText[4].classList.remove('header-menu-active');
        menuText[8].classList.remove('header-menu-active');
        menuText[12].classList.remove('header-menu-active');
        menuText[20].classList.remove('header-menu-active');
    })
}

function scrollhead() {
    const headerNav = document.querySelector('.menu-tittle-wrapper');
    const header = document.querySelector('.hbaf-header');
    let lastScrollY = 0;

    addEventListener("scroll", (e) => {
        const scrollY = window.scrollY;

        if(scrollY > lastScrollY){
            스크롤사라짐();
        }

        else{
            스크롤나타날();
        }

        lastScrollY = scrollY;
    });

    window.addEventListener('scroll', (e)=>{
        if(window.scrollY > 68){
           스크롤된해더();
        }

        else{
            스크롤안된해더();
        }

    })

    function 스크롤된해더(){
        header.classList.add('scrolled');
    }

    function 스크롤안된해더(){
        header.classList.remove('scrolled');
    }

    function 스크롤사라짐() {
        header.classList.add('hide-header');
    }

    function 스크롤나타날(){
        header.classList.remove('hide-header')
    }
}