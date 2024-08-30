const hamburgerMenu = document.querySelector('.hamburger-menu')
const navBar = document.querySelector('.nav-bar')
const navLinks = document.querySelectorAll('.nav-items')

hamburgerMenu.addEventListener('click', function() {
    navBar.classList.toggle('active')
    hamburgerMenu.classList.toggle('active')
    
})

  for (let link of navLinks) {
    link.addEventListener('click', function(){
      navBar.className = 'nav-bar'
      hamburgerMenu.className = 'hamburger-menu'
    })
  }
