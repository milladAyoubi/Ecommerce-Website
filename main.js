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


