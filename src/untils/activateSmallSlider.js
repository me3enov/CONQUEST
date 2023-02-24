export const activateSmallSlider = () => {
    let count = 1;
    const visibleClass = 'small-slider__item_active';
    const slides = document.querySelectorAll('.small-slider__item')
    let currentSlide = slides[0];

    const navigations = document.querySelector('.small-slider__navigation-container')
    const previousButton = navigations.querySelector('.small-slider__arrow_left');
    const countNumber = navigations.querySelector('.small-slider__count');
    const nextButton = navigations.querySelector('.small-slider__arrow_right');

    //set current slide
    const setCurrentSlide = (number, newCurrent) => {
        count = number;
        currentSlide.classList.remove(visibleClass);
        newCurrent.classList.add(visibleClass);
        countNumber.textContent = count;
        currentSlide = newCurrent;
    }

    const slideNext = () => {
        count === slides.length ?
            setCurrentSlide(1, slides[0])
            : setCurrentSlide(count + 1, slides[count])
    }

    const slidePrevious = () => {
        count === 1 ?
            setCurrentSlide(slides.length, slides[slides.length - 1])
            : setCurrentSlide(count - 1, slides[count - 2])
    }

    // set event listeners the "activateSmallSlider" class
    const setEventListeners = () => {
        previousButton.addEventListener('click', () => slidePrevious());
        nextButton.addEventListener('click', () => slideNext());
    }
    setEventListeners();
    setCurrentSlide(1, currentSlide)
}
