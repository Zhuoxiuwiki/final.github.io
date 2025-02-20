
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
 
