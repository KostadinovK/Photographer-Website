var slideIndex = 0;
var slides = document.getElementsByClassName('carousel-item');
console.log(slides);

function getNextSlide()
{
    slideIndex++;
    if(slideIndex >= slides.length)
    {
        slideIndex = 0;
    }
    slides[slideIndex-1].className = 'carousel-item';
    slides[slideIndex].className = 'carousel-item active';
}

function getPreviousSlide()
{
    slideIndex--;
    if(slideIndex < 0)
    {
        slideIndex = slides.length - 1;
    }

    slides[slideIndex-1].className = 'carousel-item';
    slides[slideIndex].className = 'carousel-item active';
}