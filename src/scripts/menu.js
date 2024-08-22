const hamburgerMenu = document.querySelector('#hamburger-menu')
const navBar = document.querySelector('#nav-bar')
const navLinks = document.querySelector('nav-items')

hamburgerMenu.addEventListener('click', function() {
    navBar.classList.toggle('active')
    hamburgerMenu.classList.toggle('active')
})
    // navLinks.addEventListener('click', function() {
    //     navBar.classList.toggle('active')
    // })

