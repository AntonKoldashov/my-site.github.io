function changeItem2() {
    document.getElementById('price-morepage').style.display = 'block';
    document.getElementById('price-landing').style.display = 'none';
}
function rechangeItem2() {
    document.getElementById('price-morepage').style.display = 'none';
    document.getElementById('price-landing').style.display = 'block';
}
function changeItem3() {
    document.getElementById('price-site-shop').style.display = 'block';
    document.getElementById('price-landing').style.display = 'none';
}
function rechangeItem3() {
    document.getElementById('price-site-shop').style.display = 'none';
    document.getElementById('price-landing').style.display = 'block';
}
function changeItem4() {
    document.getElementById('price-morepage-2').style.display = 'block';
    document.getElementById('price-landing-2').style.display = 'none';
}
function rechangeItem4() {
    document.getElementById('price-morepage-2').style.display = 'none';
    document.getElementById('price-landing-2').style.display = 'block';
}
function changeItem5() {
    document.getElementById('price-site-shop-2').style.display = 'block';
    document.getElementById('price-landing-2').style.display = 'none';
}
function rechangeItem5() {
    document.getElementById('price-site-shop-2').style.display = 'none';
    document.getElementById('price-landing-2').style.display = 'block';
}



(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header__top').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };
    
    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        const menuLinks = document.querySelectorAll('.header__links');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
        if (window.innerWidth <= 1050) {
            for (let i = 0; i < menuLinks.length; i += 1) {
                menuLinks[i].addEventListener('click', () => {
                    menu.classList.remove('.drawer-list')
                });
            }
        }
    };
    scrollTo();
}());

(function() {
    const header = document.querySelector('.header__top');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());

$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 3,
        arrows: false,
        speed: 800,
        easing: 'ease',
        autoplay:true,
        autoplaySpeed: 1500,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,
        vertical: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
        ]
    });
    $('.slider__places').slick({
        dots: false,
        slidesToShow: 3,
        adaptiveHeight: true,
    });
});