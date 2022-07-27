//slider
let sliderData = {
    btnPrev: document.querySelector('.prev'),
    btnNext: document.querySelector('.next'),
    sliderItems: document.querySelectorAll('.slider_item'),
    sliderIndex: 0,
}

function updateSliderPosition(e) {
    e.style.transform = "translateX(-" + (sliderData.sliderIndex*100) + "%)"
}

sliderData.btnNext.addEventListener('click', () => {
    dots[sliderData.sliderIndex].classList.remove('dot_slider_active')
    sliderData.sliderIndex++;
    sliderData.sliderItems.forEach((e)=>{
        if(sliderData.sliderIndex < sliderData.sliderItems.length){
            updateSliderPosition(e)
            dots[sliderData.sliderIndex].classList.add('dot_slider_active')
        }
        else if (sliderData.sliderIndex >= sliderData.sliderItems.length){
            sliderData.sliderIndex = 0;
            updateSliderPosition(e) 

        };
    });
})

sliderData.btnPrev.addEventListener('click', () => {
    dots[sliderData.sliderIndex].classList.remove('dot_slider_active')
    sliderData.sliderIndex--;
    sliderData.sliderItems.forEach((e)=>{
        if (sliderData.sliderIndex >= 0){
            updateSliderPosition(e)
            dots[sliderData.sliderIndex].classList.add('dot_slider_active')

        }
        else {
            sliderData.sliderIndex = sliderData.sliderItems.length - 1;
            updateSliderPosition(e)
        };
    });
});

    //> slider/dots
const dotsContainer = document.querySelector('.dots_container')

function generateDot() {
    const newDot = document.createElement('span');
    newDot.classList.add('dot_slider');
    dotsContainer.appendChild(newDot);
}

sliderData.sliderItems.forEach(()=>{
    generateDot()
});
const dots = document.querySelectorAll('.dot_slider')

document.querySelectorAll('.dot_slider')[0].classList.add('dot_slider_active')


// scroll effects (index only, for other check another scripts files)
const parallaxWave = document.querySelector('.wave_light');
const heroPage = document.querySelector('.hero')
let parallaxHeightPercentage = 0.5;
let heightOfParallax = heroPage.clientHeight + document.querySelector('.section_1').clientHeight
let oldScrollValue = window.scrollY;

window.addEventListener('scroll', ()=>{
    if(
        window.scrollY > heightOfParallax - document.querySelector('.section_2').clientHeight
        &&
        scrollY < heightOfParallax
        &&
        parallaxHeightPercentage <= 1
        && 
        window.scrollY > oldScrollValue
        )
    {
        console.log('down')
        if (parallaxHeightPercentage < 1) parallaxHeightPercentage +=0.2
        parallaxWave.style.transform = "scaleY("+parallaxHeightPercentage+")"
    }
    // else if(
    //     window.scrollY < oldScrollValue
    //     &&
    //     window.scrollY > heightOfParallax + document.querySelector('.section_2').clientHeight
    //     ){
    //     if (parallaxHeightPercentage > 0) parallaxHeightPercentage -=0.02;
    //     parallaxWave.style.transform = "scale("+parallaxHeightPercentage+")"
    //     console.log('up')
    // }
    oldScrollValue = window.scrollY

    if (window.scrollY >= (heroPage.clientHeight/1.5)) {
        document.querySelector('.grid_service_container').classList.add('animated_bouncing_sercive_container_anim')
    }
});


// other
