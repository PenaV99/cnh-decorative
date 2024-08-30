const accordions = document.querySelectorAll('.accordion')

for (let accordion of accordions) {
    accordion.addEventListener('click', function() {
        const accordionBtn = document.querySelector('button')
        accordion.classList.toggle('open')
        if (accordionBtn.textContent === '+') {
            accordionBtn.textContent = '-'
        } else {
            accordionBtn.textContent = '+'
        }
    })
}