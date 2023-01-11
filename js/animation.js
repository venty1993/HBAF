orginalLinetext();


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
