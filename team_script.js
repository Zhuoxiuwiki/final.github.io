const navbar = document.querySelector('.nav');
let timer;
 
 
 navbar.addEventListener('mouseleave', function () {
     timer = setTimeout(() => {
         const subMenus = document.querySelectorAll('.sub-menu');
         subMenus.forEach(menu => {
             menu.style.display = 'none';
         });
     }, 500);
 });
 
 
 navbar.addEventListener('mouseenter', function () {
     if (timer) {
         clearTimeout(timer);
     }
 });
 
const scrollElements = document.querySelectorAll('.team-member');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
};

const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});