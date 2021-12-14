// Slider
const slider = document.querySelectorAll('.slide'),
      servicesBlock = document.querySelector('.services'),
      btn = document.querySelectorAll('.appointment');
let i = 0;

function changeslide(){
    if(slider[i].classList.contains('active-slide')){
    slider[i].classList.remove('active-slide');
    i++
    }
    if(i > slider.length-1){
        i=0;
    }
    slider[i].classList.add('active-slide');
}

setInterval(changeslide, 5000);

// Reviews
// transform: translateX(-595px)
const reviewsSlider = document.querySelector('.reviews-slider'),
      reviewsBtnNext = document.querySelector('.next'),
      reviewsBtnPrev = document.querySelector('.prev');


reviewsBtnNext.addEventListener('click', () => {
    console.log(1);
    reviewsSlider.style.transform = 'translateX(-635px)';

})

reviewsBtnPrev.addEventListener('click', () => {
    // if(reviewsSlider.style.transform.translateX == 0){
    //     reviewsSlider.style.transform = 'translateX(-595px)';
    // }
    reviewsSlider.style.transform = 'translateX(595px)';
})