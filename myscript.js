window.addEventListener('scroll', function () {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})

const menubar = document.querySelector('.menubar')
const navigation = document.querySelector('.navigation')
const close = document.querySelector('.closebar')
const menuNav = document.querySelector('.menu-nav')
const menuLink = document.querySelectorAll('.menu-link')


menubar.addEventListener("click", () => {
    menuNav.style.right = "0";
})

close.addEventListener("click", () => {
    menuNav.style.right = "-50%";
})

menuLink.forEach(n => n.addEventListener("click", () => {
    menuNav.style.right = "-50%";
}))


const observer =  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show")
            observer.unobserve(entry.target)
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))



