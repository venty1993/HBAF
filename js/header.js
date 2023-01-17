headerMenu();
scrollhead();


function headerMenu() {
    const header = document.querySelector('.hbaf-header');
    const headerNav = document.querySelector('.menu-tittle-wrapper');
    headerNav.addEventListener('mouseenter', ()=> {
        header.classList.add('header-active');
        header.classList.add('header-back');
    })
    
    header.addEventListener('mouseleave', ()=>{
        header.classList.remove('header-active')
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
        console.log(window.scrollY);
        if(window.scrollY > 68){
           스크롤된해더();
        }
        else if(headerNav.addEventListener('mouseover',()=>{
            header.style.backgroundColor = '#fcd364';
        })){
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
