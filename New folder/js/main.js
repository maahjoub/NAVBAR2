const navSlide = ()=> {
    const mobile = document.querySelector('.mobile');
    const body = document.querySelector('body');
    const navbar = document.querySelector('.navlink');
    const navLinks = document.querySelectorAll('.navlink li');
    const drop = document.querySelectorAll('.dropdown a');
    const dropbtn = document.querySelector('.dropbtn');
    mobile.addEventListener('click',()=> {
        navbar.classList.toggle('nav-active');
        navbar.classList.toggle("open");
        navLinks.forEach((link, index) => {
            if(link.style.animation){
              link.style.animation = ''
            }else{
              link.style.animation = `navAnim 0.3s ease forwards ${index / 30}s`
            }
          });
          mobile.classList.toggle('toggle');
    });
}

navSlide();