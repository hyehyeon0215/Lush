const form = document.querySelector("form");
const btnSubmit = document.querySelector("input[type=submit]");
let toggleBtn = document.getElementById("toggleBtn");
let pwd = document.querySelector("#pwd1");

const adr_pop = document.querySelector(".address_pop");
const adr_bg = document.querySelector(".address_bg");
const adr_btn = document.querySelector("#address_btn");


toggleBtn.addEventListener("click", () => {
    if (pwd.type === 'password') {
        pwd.setAttribute("type", "text");
        toggleBtn.classList.add("hide");
    } else {
        pwd.setAttribute("type", "password");
        toggleBtn.classList.remove("hide");
    }

})



adr_btn.addEventListener("click", ()=> {
    adr_bg.style.display = "block";
    adr_pop.style.display = "block";
})

let adrclose1 = adr_pop.querySelector(".address_top_close");
let adrclose2 = adr_pop.querySelector(".address_btm_close");

adrclose1.addEventListener("click", ()=> {
    adr_bg.style.display = "none";
    adr_pop.style.display = "none";
})


adrclose2.addEventListener("click", ()=> {
    adr_bg.style.display = "none";
    adr_pop.style.display = "none";
})

let adr_tab = adr_pop.querySelectorAll(".tab li");
let adr_searchBtn = adr_pop.querySelector(".address_searchBtn");
let adr_table = adr_pop.querySelector(".address_searchResult");

adr_tab.forEach((el, index)=>{
    el.addEventListener("click", (e)=>{
        e.preventDefault();
        adr_tab.forEach((el)=>{
            el.classList.remove("on");
        })
        e.currentTarget.classList.add("on");
     })
})

adr_searchBtn.addEventListener("click", ()=>{
    adr_table.style.opacity = 1;
})

if(adr_pop.style.display == "none") {
    adr_table.style.opacity = 0;
}

let aBtn = adr_pop.querySelectorAll(".aBtn");
let adr_txt1 = form.querySelector("#address_num");
let adr_txt2 = form.querySelector("#address");


aBtn.forEach((el)=>{
    el.addEventListener("click", (e)=>{
        e.preventDefault();
        adr_pop.style.display = "none";
        adr_bg.style.display = "none";
        // adr_txt1.disabled = false;
        // adr_txt2.disabled = false;
        
        let txt1 = "06099"
        let txt2 = e.currentTarget.innerText
        
        adr_txt1.value = txt1;
        adr_txt2.value = txt2;
    })
})

// let domain_list = form.querySelector("#domain");
// let domains = form.querySelectorAll("#domain-list option");


