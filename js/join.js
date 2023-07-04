const form = document.querySelector("form");
const btnSubmit = document.querySelector("input[type=submit]");
let toggleBtn = document.getElementById("toggleBtn");
let pwd = document.querySelector("#pwd1");

const adr_pop = document.querySelector(".address_pop");
const adr_bg = document.querySelector(".address_bg");
const adr_btn = document.querySelector("#address_btn");
// const adr_tab = adr_pop.querySelectorAll("li");
// const adr_searchBtn = adr_pop.querySelector("#address_searchBtn");
// const adr_table = adr_pop.querySelector("table");

toggleBtn.addEventListener("click", () => {
    if (pwd.type === 'password') {
        pwd.setAttribute("type", "text");
        toggleBtn.classList.add("hide");
    } else {
        pwd.setAttribute("type", "password");
        toggleBtn.classList.remove("hide");
    }

})

// btnSubmit.addEventListener("click", (e) => {
//     if (!isSecureContext("newid", 6)) e.preventDefault();
// })

// function isId(el, len) {
//     if (len === undefined) len = 6;

//     let input = form.querySelector(`[name=${el}]`);
//     let txt = input.ariaValueMax;

//     if (txt.length >= len) {
//         const isErrMsg = input.closest("td").querySelectorAll("p");
//         if (isErrMsg.length > 0) input.closest("td").querySelector("p").remove();
//         return true;
//     } else {
//         const isErrMsg = input.closest("td").querySelectorAll("p");
//         if (isErrMsg.length > 0) return false;

//         const errMsg = document.createElement("p");
//         errMsg.append(`아이디를 ${len}글자 이상 입력하세요`);
//         input.closest("td").append(errMsg);
//         return false;
//     }
// }


adr_btn.addEventListener("click", ()=> {
    adr_bg.style.display = "block";
    adr_pop.style.display = "block";

    if(adr_pop.style.display == "block") {

        let adrclose1 = adr_pop.querySelector(".address_top_close");
        let adrclose2 = adr_pop.querySelector(".address_btm_close");
    
        if(adrclose1) {
            adrclose1.addEventListener("click", ()=> {
                adr_bg.style.display = "none";
                adr_pop.style.display = "none";
            })
        }

        if(adrclose2) {
            adrclose2.addEventListener("click", ()=> {
                adr_bg.style.display = "none";
                adr_pop.style.display = "none";
            })
        }
    }
})


// adr_searchBtn.addEventListener("click", ()=>{
//     adr_table.style.display = "block";
// })


