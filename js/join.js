const form = document.querySelector("form");
const btnSubmit = document.querySelector("input[type=submit]");
let toggleBtn = document.getElementById("toggleBtn");
let pwd = document.querySelector("#pwd1");

const adr_pop = document.querySelector(".address_pop");
const adr_bg = document.querySelector(".address_bg");
const adr_btn = document.querySelector("#address_btn");
let adrclose1 = adr_pop.querySelector(".address_top_close");
let adrclose2 = adr_pop.querySelector(".address_btm_close");
let adr_tab = adr_pop.querySelectorAll(".tab li");
let adr_searchBtn = adr_pop.querySelector(".address_searchBtn");
let adr_table = adr_pop.querySelector(".address_searchResult");

// 비밀번호 토글 키

toggleBtn.addEventListener("click", () => {
    if (pwd.type === 'password') {
        pwd.setAttribute("type", "text");
        toggleBtn.classList.add("hide");
    } else {
        pwd.setAttribute("type", "password");
        toggleBtn.classList.remove("hide");
    }

})

// 회원 가입 인증 함수

btnSubmit.addEventListener("click", (e) => {
    if (!isId("newid", 5)) e.preventDefault();
    if (!isText("address2")) e.preventDefault();
    if (!isText("name")) e.preventDefault();
    if (!isPwd("pwd1", "pwd2", 6)) e.preventDefault();
})

// 아이디가 5글자 이상인지

function isId(el, len) {
    let input = form.querySelector(`[name=${el}]`);
    let txt = input.value;

    if (txt.length >= len) {
        const isErrMsg = input.closest("td").querySelectorAll("p");
        if (isErrMsg.length > 0) input.closest("td").querySelector("p").remove();
        return true;
    } else {
        const isErrMsg = input.closest("td").querySelectorAll("p");
        if (isErrMsg.length > 0) return false;

        const errMsg = document.createElement("p");
        errMsg.append(`아이디를 ${len}글자 이상 입력하세요`);
        input.closest("td").append(errMsg);
        return false;
    }
}

// 이름, 주소 값이 있는지 확인

function isText(el) {
    let input = form.querySelector(`[name=${el}]`);
    let txt = input.value;

    if (txt.length === 0) {
        const isErrMsg = input.closest("td").querySelectorAll("p");
        if (isErrMsg.length > 0) return false;

        const errMsg = document.createElement("p");
        errMsg.append("입력 항목을 확인하세요");
        input.closest("td").append(errMsg);
        return false;
    } else {
        const isErrMsg = input.closest("td").querySelectorAll("p");
        if (isErrMsg.length > 0) input.closest("td").querySelector("p").remove();
        return true;
    }
}

// 비밀번호 확인

function isPwd(el1, el2, len) {
    let pwd1 = form.querySelector(`[name=${el1}]`);
    let pwd2 = form.querySelector(`[name=${el2}]`);
    let pwd1_val = pwd1.value;
    let pwd2_val = pwd2.value;

    const num = /[0-9]/;
    const eng = /[a-zA-Z]/;
    const spc = /[~!@#$%^&*()_+?><]/;

    const errMsgWrap1 = pwd1.closest("td");
    const errMsgWrap2 = pwd2.closest("td");

    function removeErrMsg(errMsgWrap) {
        const errMsg = errMsgWrap.querySelector("p");
        if (errMsg) {
            errMsg.remove();
        }
    }

    function addErrMsg(errMsgWrap, msg) {
        const errMsg = document.createElement("p");
        errMsg.textContent = msg;
        errMsgWrap.append(errMsg);
    }

    if (pwd1_val.length === 0) {
        removeErrMsg(errMsgWrap1);
        let err = "입력 항목을 확인하세요";
        addErrMsg(errMsgWrap1, err);
        return false;
    } else if (!(pwd1_val.length >= len && num.test(pwd1_val) && eng.test(pwd1_val) && spc.test(pwd1_val))) {
        removeErrMsg(errMsgWrap2);
        removeErrMsg(errMsgWrap1);
        let err = `(영문, 숫자, 특수문자를 포함한 ${len}글자 이상)`;
        addErrMsg(errMsgWrap1, err);
        return false;
    } else if (pwd2_val.length === 0) {
        removeErrMsg(errMsgWrap1);
        removeErrMsg(errMsgWrap2);
        let err = "입력 항목을 확인하세요";
        addErrMsg(errMsgWrap2, err);
        return false;
    } else if (!(pwd1_val === pwd2_val)) {
        removeErrMsg(errMsgWrap1);
        removeErrMsg(errMsgWrap2);
        let err = "입력한 비밀번호가 같지 않습니다";
        addErrMsg(errMsgWrap2, err);
        return false;
    } else {
        removeErrMsg(errMsgWrap1);
        removeErrMsg(errMsgWrap2);
        return true;
    }
}



// 우편번호 검색 js

adr_btn.addEventListener("click", ()=> {
    adr_bg.style.display = "block";
    adr_pop.style.display = "block";
})

adrclose1.addEventListener("click", ()=> {
    adr_bg.style.display = "none";
    adr_pop.style.display = "none";
})

adrclose2.addEventListener("click", ()=> {
    adr_bg.style.display = "none";
    adr_pop.style.display = "none";
})

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
        
        let txt1 = "06099"
        let txt2 = e.currentTarget.innerText
        
        adr_txt1.value = txt1;
        adr_txt2.value = txt2;
    })
})


