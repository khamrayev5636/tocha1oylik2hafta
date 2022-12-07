const elBurger = document.querySelector(".header__burger");
const elClose = document.querySelector(".header__close");
const elNav = document.querySelector(".header__contact");

elBurger.addEventListener("click" , ()=>{
    elNav.classList.add("shownav");
});

elClose.addEventListener("click" , ()=>{
    elNav.classList.remove("shownav");
});



$('.price__list').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    variableWidth: true,
    dots:true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        }
    ]
});


$('.chat__list').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    variableWidth: true,
    dots:true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        }
    ]
});