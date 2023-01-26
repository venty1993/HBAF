makeSlide(3,2,1)

function makeSlide(pcSlideCount, tabletSlideCount,mobileSlideCount) {
        const conTents = document.getElementsByClassName('contents');
        const contentsWrapper = document.getElementsByClassName('event-slidewrapper');
        const slidewrapper = document.getElementsByClassName('contents-wrapper');
        const leftButton = document.getElementsByClassName('before-contents-arrow')
        const rightButton = document.getElementsByClassName('next-contents-arrow')
        
   
     let count;
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

     window.addEventListener('resize' , ()=>{
         checkWidth();
         contentsSize;
     })

     checkWidth();
     function checkWidth() {
         if(window.innerWidth > 1200){
            count = pcSlideCount ;
         }else if (window.innerWidth > 440) {
            count = tabletSlideCount;
         } else{
            count = mobileSlideCount;
         }
         containerWidth = contentsWrapper[0].clientWidth;
         slideWith = (containerWidth - (22 * (count-1))) / count;    
         for (let i = 0; i <conTents.length; i++) {
             conTents[i].style.width = `${slideWith}px`;
         }
     }

     window.addEventListener('resize', () => {
         checkWidth();
     })


     function leftslide() {
         if(index < 0) {
index=0
         }
         index--;
         contentsSize();

     }

     function rifgtslide() {
         if( index > slidewrapper[0].childElementCount - count-1){
            index=slidewrapper[0].childElementCount - count -1
         }
         console.log(slidewrapper[0].childElementCount)
         index++;
         contentsSize();
     }

     function contentsSize() {
         slidewrapper[0].style.transform = `translateX(-${index * (slideWith + 20)}px)`;
     }
}