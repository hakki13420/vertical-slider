const slideRightWrapper=document.querySelector('.sliderRightWrapper')
const slideWrapper=document.querySelector('.slideWrapper')

const slideRights=document.querySelectorAll('.slideRight')
const slides=document.querySelectorAll('.slide')
let selectedSlide=0

function initialiseSlideRight(){
    slideRights.forEach((slide)=>{
        slide.classList.remove('selected')
    })
}

function movingRightSloder(){
    setTimeout(() => {
        slideRightWrapper.style.transform=`translateY(${-120*selectedSlide}px)`
        slideWrapper.style.transform=`translateX(${-100*selectedSlide}vw)`
        
        initialiseSlideRight()
        slideRights[selectedSlide].classList.add('selected')        
        selectedSlide++;

        if(selectedSlide==5) {
            slideWrapper.style.transform=`translateX(${100*(0)}vw)`
            selectedSlide=0            
        }

        movingRightSloder()
    }, 4000);
    
}

slideRights.forEach((slide, index)=>{
    slide.addEventListener('click',()=>{
        selectedSlide=index
        initialiseSlideRight()
        slideRights[selectedSlide].classList.add('selected')  
        slideWrapper.style.transform=`translateX(${-100*selectedSlide}vw)` 
    })
})

movingRightSloder()