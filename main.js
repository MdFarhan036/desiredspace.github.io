/* ***************Show menu************** */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // validate that variable exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // we add the show-menu class to the div tag with the nav_manu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')
    /* ***************Remove menu mobile************** */
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
        // when we click on each nav_link, we remove the show-mwnu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ***************scroll section active link************** */
const section = document.querySelectorAll('section[id')

function scrollActive() {
    const scrolly = window.pageYOffset

    section.forEach(current => {
        const sectionHeigh = current.offsetHeigh
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrilly > sectionTop && scrollY <= sectionTop + sectionHeigh) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll', scrollActive)

/* *************** show scroll top************** */
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    // when the scroll is higher than 500 viewport innerHeight,add the show-scroll class to the header tag.
    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop)