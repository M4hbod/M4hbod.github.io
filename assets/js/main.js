/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/*===== DISCORD =====*/
function copyDiscord() {
    /* Get the text field */
    var discordID = "m4hbod"
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(discordID);
  
    /* Alert the copied text */
    customAlert({
        type: "success",
        message: "Discord ID copied: " + discordID,
        timer: 3500,
    });
  }

  
const customAlert = ({ type, message, timer = 5000 }) => {
  return new Promise(resolve => {
    const body = document.querySelector('body');

    let templateContainer = document.querySelector('.alert-container');

    if (!templateContainer) {
      body.insertAdjacentHTML(
        'afterend',
        '<div class="alert-container"></div>',
      );
      templateContainer = document.querySelector('.alert-container');
    }

    const alertId = id();

    const templateContent = `
    <div class="alert-content ${type}-bg" id="${alertId}-alert-content">
      <div>
        <div class="alert-frame">
          <div class="alert-body">
            <div class="alert-body-content">
              <span class="alert-message">${message}</span>
            </div>
            <div class="alert-close" id="${alertId}-alert-close">X</div>
          </div>
        </div>
        <div class="alert-timer ${type}-timer"  style="animation: timer${timer}ms linear;>
      </div>
    </div>
    `;

    const alerts = document.querySelectorAll('.alert-content');

    if (alerts.length) {
      alerts[0].insertAdjacentHTML('beforebegin', templateContent);
    } else {
      templateContainer.innerHTML = templateContent;
    }

    const alertContent = document.getElementById(`${alertId}-alert-content`);

    setTimeout(() => {
      alertContent.remove();
      resolve();
    }, timer);

    const alertClose = document.getElementById(`${alertId}-alert-close`);

    alertClose.addEventListener('click', () => {
      alertContent.remove();
      resolve();
    });
  });
};
  
const id = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};
