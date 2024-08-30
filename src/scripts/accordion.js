const accordions = document.querySelectorAll('.accordion');
for (let accordion of accordions) {
    accordion.addEventListener('click', function() {
        accordion.classList.toggle('open')
        let accordionBtn = accordion.querySelector('.fa-caret-right')
        accordionBtn.classList.toggle('fa-caret-down')
    })
}