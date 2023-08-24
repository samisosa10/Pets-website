const navBurgerBtn = document.querySelector('#nav-burger-btn')
const navContainer = document.querySelector('.nav-container')
const navBurgerCloseBtn = document.querySelector('.nav-burger-close-btn')
const firstSection = document.querySelector('.first-section')

navBurgerBtn.addEventListener('click', () => {
    navContainer.classList.add('visible')
    navBurgerCloseBtn.classList.add('visible')
    navBurgerBtn.classList.add('hidden')
    firstSection.classList.add('margin-top')
})

navBurgerCloseBtn.addEventListener('click', () => {
    navContainer.classList.remove('visible')
    navBurgerCloseBtn.classList.remove('visible')
    navBurgerBtn.classList.remove('hidden')
    firstSection.classList.remove('margin-top')
})


