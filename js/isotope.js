window.addEventListener("load", () => {

    const grid = new Isotope("section", { 
        itemSelection: "article", 
        columnWidth: "article",
        transitionDuration: "0.5s" 
    });

    let btns = document.querySelectorAll("ul li");

    for (let el of btns) {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            let sort = e.currentTarget.querySelector("a").getAttribute("href");

            grid.arrange({
                filter: sort
            });

        })
    }
});


