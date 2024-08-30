const accordions = document.querySelectorAll('.accordion');
for (let accordion of accordions) {
    accordion.addEventListener('click', function() {
        accordion.classList.toggle('open')
        let accordionBtn = accordion.querySelector('button')
        if (accordionBtn.textContent === '+') {
            accordionBtn.textContent = '-'
        } else {
            accordionBtn.textContent = '+'
        }
    })
}