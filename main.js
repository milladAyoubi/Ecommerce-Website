const menu = (toggle,ID) => {
    const togg = document.getElementById(toggle)
    const nav = document.getElementById(ID)


    if(togg && nav) {
        togg.addEventListener('click', () => {
            nav.classList.toggle('showMenu')
            console.log('Complete')
        })
    }

}

menu('nav-Toggle','nav-Menu')


const navLink = document.querySelectorAll('.navLink')


navLink.forEach( e => e.addEventListener('click', () =>{

    navLink.forEach(e => e.classList.remove("selected"))
    e.classList.add("selected")


    const navMenu = document.querySelector('.navMenu')
    navMenu.classList.remove("showMenu")

}))




const sectionScroll = document.querySelectorAll('section')


window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset


    sectionScroll.forEach(e => {
        const sectionHeight = e.offsetHeight
        const sectionTop = e.offsetTop - 50
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ) {

            document.querySelector('.navMenu')

        }
    })
})



console.log(sectionScroll)
