const brandNav = document.querySelectorAll(".brandNav li");
const brandBox = document.querySelectorAll(".brandBox article");

const historyBtn = document.querySelector(".fa-angle-right");
const history = document.querySelectorAll(".txt li")


const ideology = document.querySelectorAll(".content li")

brandNav.forEach((el, index) => {
    brandNav[index].addEventListener("click", (e)=> {

        e.preventDefault();

        brandNav.forEach((el)=> {
            el.classList.remove("on");
        })

        el.classList.add("on");

        brandBox.forEach((el)=> {
            el.classList.remove("on");
        })

        brandBox[index].classList.add("on");
    })
})


let historyIndex = 0;

historyBtn.addEventListener("click", (e)=> {

    history.forEach((el)=> {
        el.classList.remove("on");
    })

    history[historyIndex].classList.add("on");
    historyIndex++;
    if(historyIndex == history.length) {
        historyIndex = 0;
    }
})


ideology.forEach((el, index)=> {
    el.addEventListener("click", ()=> {
        ideology.forEach((el)=>{
            el.classList.remove("on");
        })
        ideology[index].classList.add("on");
    })
})