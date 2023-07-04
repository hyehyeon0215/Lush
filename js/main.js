const banner_ul = document.querySelector(".banner ul");
const banners = banner_ul.children;
const btns = document.querySelector(".btns");
const [prev, next] = btns.children;
const pop = document.querySelector(".pop");
const close = document.querySelectorAll(".close");
const opens = banner_ul.querySelectorAll("a");


const frame = document.querySelector("#slide");
const panels = frame.querySelectorAll(".panel li");
const bar = frame.querySelector(".bar");
const slideBtns = frame.querySelectorAll(".slidebtns li");

const interval = 5000;
const len = panels.length - 1;

let num = 0;
let timer = null;

startRolling();



function startRolling() {

    bar.style.display = "block";

    setTimeout(progress, 0);
    activation(num);


    timer = setInterval(rolling, interval);

}

function stopRolling() {
    bar.style.display = "none";

    clearInterval(timer);
}



function activation(index) {
    for (let el of panels) el.classList.remove("on");
    for (let el of slideBtns) el.classList.remove("on");
    panels[index].classList.add("on");
    slideBtns[index].classList.add("on");
    num = index;
    bar.style.width = "0%";
}


function rolling() {
    if (num < len) {
        num++;
    } else {
        num = 0;
    }
    activation(num);
    progress();
}


function progress() {
    const init = parseInt(bar.style.width) || 0;
    const targetValue = 100;
    const unit = '%';
    const startTime = performance.now();

    function animate(time) {
        const realTime = time - startTime;
        const prog = realTime / interval;
        const currentValue = init + ((targetValue - init) * prog);

        bar.style.width = `${currentValue}${unit}`;
    
        if(prog < 1) {
            requestAnimationFrame(animate);
        } else {
            bar.style.width = "0%"
            if (typeof callback === "function") callback();
        }
    }

    requestAnimationFrame(animate);
}





for (let i = 0; i < 4; i++) {
    banner_ul.prepend(banner_ul.lastElementChild);
}

prev.addEventListener("click", () => {
    banner_ul.prepend(banner_ul.lastElementChild);
})

next.addEventListener("click", () => {
    banner_ul.append(banner_ul.firstElementChild);
})

opens.forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        let href = e.currentTarget.getAttribute('href');
        let pop = document.querySelector(href);
        pop.classList.add("on");
        e.currentTarget.classList.add("off");
        btns.classList.add("off");
    })
});

close.forEach((el) => {
    el.addEventListener("click", (e) => {
        e.currentTarget.closest('aside').classList.remove("on");
        opens.forEach((el) => {
            el.classList.remove("off");
        })
        btns.classList.remove("off");
    })
});



function active() {
    for (let el of banners) el.classList.remove("on");
    banners[5].classList.add("on");
}



let bars = document.querySelector(".bars");

window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    let topbar = document.querySelector(".header .header_inner .top_bar");

    if (window.pageYOffset > 100) {
        document.querySelector(".header .header_inner .bottom_bar").style.display = "none";
        header.style.height = "80px";
        topbar.style.top = "20px";
        header.style.borderBottom = "none";
        openmenu = 0;
    } else {
        document.querySelector(".header .header_inner .bottom_bar").style.display = "block";
        header.style.height = "130px";
        header.style.borderBottom = "1px solid #ddd";
        topbar.style.top = 0;
    }
})