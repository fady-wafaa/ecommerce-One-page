
/* ======================== Show menu ============*/

const showMenu = (toggleId , navId) =>
{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click' , ()=>
        {
            nav.classList.toggle('show')
        })
    }
};

showMenu('nav-toggle' , 'nav-menu');

/* ======================== REmOVE MENU MOBILE ============*/

const navLink = document.querySelectorAll("li a");



function linkAction(){
    
/* Active link */
navLink.forEach(n => n.classList.remove('active'))
   
this.classList.add('active')


// remove menu mobile
const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show')


}

navLink.forEach(n => n.addEventListener('click', linkAction))