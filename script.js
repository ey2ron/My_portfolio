
// Card Mouse Move Effect
let comp = document.querySelector(".card_container");

const propSetFunc = (e, comp) => {
    let x = e.offsetX;
    let y = e.offsetY;

    if (x < 145 && y > 200) {
        x = x;
        y = y;
    }
    else if (x > 145 && y > 200) {
        x = x;
        y *= -1
    }
    else if (x > 145 && y < 200) {
        x *= -1
        y *= -1
    }
    else if (x < 145 && y < 200) {
        x = x;
        y = y;
    }

    comp.style.setProperty('--x', x)
    comp.style.setProperty('--y', y)
}

comp.addEventListener("mousemove", (e) => {
    propSetFunc(e, comp);
})





const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger-menu-icon").classList.toggle("toggle")

    navLinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = ""
        }else{
            link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
            console.log(index/7 + 0.5)
        }
    })
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        selectElement(".nav-list").classList.toggle("active");
        selectElement(".burger-menu-icon").classList.toggle("toggle");

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ""
            }else{
                link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
                console.log(index/7 + 0.5)
            }
        })
    })
})