const slides = document.querySelectorAll('#slides .slide');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const controls = document.querySelectorAll('controls');

let currentSlide = 0;

// осуществляет переход с слайду номер n (начиная с 0)
function goToSlide(n){
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length; //остаток о деления
    slides[currentSlide].className = 'slide showing';
}

// навешивает обработчик событий на элемнты next & previous
function setupListners(){
    next.onclick = function(){
        goToSlide(currentSlide+1);
    }
    pervious.onclick = function(){
        goToSlide(currentSlide-1);
    }
}

// показывает кноопки для навигации 
function showButtons(){
    for(var i=0; i<controls.length; i++){
        controls[i].style.display = 'inline-block';
    }
}

// иницилизатор слайдера
function sliderInit(){
    if (slides.length !== 0) { // если на странице есть нужный html код
    setupListners();
    showButtons();
    }
}

module.exports = sliderInit;