orginalLinetext();
backgroundcontrol();
carrot();


function orginalLinetext() {
    
    let observer = new IntersectionObserver ((e)=>{
            e.forEach((박스)=>{
                if(박스.isIntersecting){
                박스.target.style.opacity = 1;
                } else{
                박스.target.style.opacity = 0;
            }
        })
    })

    let lineText = document.querySelectorAll('.line-text');
    observer.observe(lineText[0]);
    observer.observe(lineText[1]);
    observer.observe(lineText[2]);

    let lineexplane = document.querySelectorAll('.honeybutter-almond-explane');
    observer.observe(lineexplane[0]);
    observer.observe(lineexplane[1]);
    observer.observe(lineexplane[2]);
    
    
}

function backgroundcontrol() {
    
    let observer = new IntersectionObserver ((e)=>{
            e.forEach((background)=>{
                if(background.intersectionRatio > 0){
                    background.target.classList.remove('back-sa::after');
                } else{
                    background.target.classList.add('back-sa::after');
                }
            })
        })
        let backgroundani = document.getElementsByClassName('original-almond-linebackground');
        observer.observe(backgroundani[0]);
}

function carrot(){
    let observer = new IntersectionObserver ((e)=>{
        e.forEach((carrot)=>{
            if(carrot.intersectionRatio > 0){
                carrot.target.classList.add('carrot-active');
            } else{
                carrot.target.classList.remove('carrot-active');
            }
        })
    })
    
    let carrot = document.querySelectorAll('figure');
    observer.observe(carrot[16]);
    observer.observe(carrot[17]);
}
