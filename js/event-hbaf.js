
    const conTents = document.getElementsByClassName('contents');
    const contentsWrapper = document.getElementsByClassName('event-slidewrapper');
    const slidewrapper = document.getElementsByClassName('contents-wrapper');
    const leftButton = document.getElementsByClassName('before-contents-arrow')
    const rightButton = document.getElementsByClassName('next-contents-arrow')
    
    const count = 4;
    let slideWith;
    let containerWidth;
    let index = 0;
    

    leftButton[0].addEventListener('click', (e) => {
        e.preventDefault();
        leftslide();
    })

    rightButton[0].addEventListener('click', (e)=> {
        e.preventDefault();
        rifgtslide();
    })


    function checkWidth() {
        containerWidth = contentsWrapper[0].clientWidth;
        slideWith = (containerWidth - (20 * (count-1))) / count;    
        for (let i = 0; i <conTents.length; i++) {
            conTents[i].style.width = `${slideWith}px`;
        }
    }


    function leftslide () {
        if(index > 0) {
            index--;
        }
        contentsSize();
    }

    function rifgtslide() {
        if(index < slidewrapper.childElementCount - count){
            index++
        }
        index++;
    }

    function contentsSize() {
        slidewrapper[0].style.transform = `translateX(-${index * (slideWith + 20)}px)`;
    }
