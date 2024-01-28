



let hamburger=document.querySelector(".hamburger");
       let nav = document.querySelector(".nav");
       hamburger.onclick = function(){
     
       nav.classList.toggle("active");

       }

 //scroll
 
 document.addEventListener("DOMContentLoaded", function () {
       // Smooth scroll for navigation links
       const navLinks = document.querySelectorAll('a[href^="#"]');
       
       navLinks.forEach(link => {
           link.addEventListener('click', smoothScroll);
       });
   
       function smoothScroll(e) {
           e.preventDefault();
   
           const targetId = this.getAttribute('href').substring(1);
           const targetElement = document.getElementById(targetId);
   
           if (targetElement) {
               const offsetTop = targetElement.offsetTop;
   
               window.scrollTo({
                   top: offsetTop,
                   behavior: 'smooth'
               });
           }
       }
   });

   
   