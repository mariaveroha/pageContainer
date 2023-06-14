
var modal = document.getElementById("myModal");
var content = document.getElementsByClassName('content')[0]
var btn = document.getElementsByClassName('close')[0];
var cases = document.querySelectorAll('.case')
var cards = document.querySelectorAll('.card')
const timeout = 800

btn.onclick = function () {
    modal.classList.remove('open')
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.remove('open')
    }
}


cases.forEach(function (item) {
    item.addEventListener('click', function () {
        modal.classList.add('open')
        content.innerHTML = item.getAttribute('data-text')
    })
})

cards.forEach(function (item) {
    item.addEventListener('click', function () {
        modal.classList.add('open')
        content.innerHTML = item.getAttribute('data-text')
    })
})


$('.slider1').slick({
    arrows: true,
    slidesToShow: 3,
    initialSlide: 0,
    appendArrows: $('.arrows'),
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
            }
        },
    ]

});


$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 3,
        arrows: true,
        initialSlide: 0,
        appendArrows: $('.arrowsservices'),
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    $('.slider3').slick({
        slidesToShow: 3,
        initialSlide: 0,
        appendArrows: $('.arrowsBlog'),
        arrows: true,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });


    $('.carousel-vertical').slick({
        arrows: false,
        slidesToShow: 4,
        vertical: true,
        infinite: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 0,
        swipeToSLide: true,
    });
})




// mobile menu
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
})