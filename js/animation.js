orginalLinetext();
backgroundcontrol();
carrotPlay();



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

let observer = new IntersectionObserver ((e)=>{
    e.forEach((박스)=>{
        if(박스.isIntersecting){
        박스.target.classList.add();
        } else{
        박스.target.classList.add();
    }
})
})

let choiceR = document.querySelectorAll('div');
observer.observe(choiceR[70]);
observer.observe(choiceR[73]);
observer.observe(choiceR[78]);
observer.observe(choiceR[81]);

function backgroundcontrol() {
    
    let observer = new IntersectionObserver ((e)=>{
            e.forEach((background)=>{
                if(background.isIntersecting){
                    background.target.classList.remove('back-sa');
                } else{
                    background.target.classList.add('back-sa');
                }
            })
        })
        let backgroundani = document.getElementsByClassName('original-almond-linebackground');
        observer.observe(backgroundani[0]);
}

function carrotPlay(){
    let observer = new IntersectionObserver ((e)=>{
        e.forEach((박스)=>{
            if(박스.isIntersecting){
                박스.target.classList.add('carrot-active');
            } else{
                박스.target.classList.remove('carrot-active');
            }
        })
    })
    let carrotimg = document.querySelectorAll('figure');
    observer.observe(carrotimg[17]);
    observer.observe(carrotimg[18]);
}


