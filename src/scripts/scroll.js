const scrollToTopBtn = document.getElementById("scrollToTopBtn")
const rootElement = document.documentElement

scrollToTopBtn.addEventListener("click", function(){
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})
document.addEventListener("scroll", function(){
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.60 ) {
    // Show button
    scrollToTopBtn.classList.add("showBtn")
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn")
  }
})
