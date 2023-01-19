orginalLinetext();
backgroundcontrol();
carrotPlay();
choicebackleft();
choicebackright();
intro();


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
    
    const figure = document.querySelectorAll('figure')
    observer.observe(figure[10]);
    observer.observe(figure[11]);
    observer.observe(figure[24]);
    observer.observe(figure[25]);
    observer.observe(figure[26]);
    observer.observe(figure[27]);
    observer.observe(figure[28]);
    
    const text = document.querySelectorAll('p');
    observer.observe(text[9]);
    observer.observe(text[29]);
    observer.observe(text[30]);
    observer.observe(text[31]);
    observer.observe(text[32]);
    observer.observe(text[33]);
    observer.observe(text[34]);
    observer.observe(text[45]);
    observer.observe(text[46]);
    observer.observe(text[47]);
    observer.observe(text[48]);
    observer.observe(text[49]);
    observer.observe(text[50]);
    observer.observe(text[51]);
    observer.observe(text[52]);
    observer.observe(text[53]);
    observer.observe(text[54]);
    observer.observe(text[55]);
    observer.observe(text[56]);
    observer.observe(text[57]);
    
    const div = document.querySelectorAll('div');
    observer.observe(div[36]);
    observer.observe(div[38]);
    observer.observe(div[41]);
    observer.observe(div[43]);
}


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
        const backgroundani = document.getElementsByClassName('original-almond-linebackground');
        observer.observe(backgroundani[0]);
    }
    
    function choicebackright() {
        let observer = new IntersectionObserver ((e)=>{
            e.forEach((background)=>{
                if(background.isIntersecting){
                    background.target.classList.remove('choice-back');
                } else{
                    background.target.classList.add('choice-back');
                }
            })
        })
        const div = document.querySelectorAll('div');
        observer.observe(div[73]);
        observer.observe(div[81]);
    }

    function choicebackleft() {

        let observer = new IntersectionObserver ((e)=>{
            e.forEach((background)=>{
            if(background.isIntersecting){
                background.target.classList.remove('choice-back-r');
            } else{
                background.target.classList.add('choice-back-r');
            }
        })
    })
    const div = document.querySelectorAll('div');
    observer.observe(div[76]);
    observer.observe(div[84]);
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
    const carrotimg = document.querySelectorAll('figure');
    observer.observe(carrotimg[17]);
    observer.observe(carrotimg[18]);
}

function intro() {
    const body= document.querySelector('body');    
    
    setTimeout(function(){
        body.style.overflow = 'scroll';
    },5000);

}

