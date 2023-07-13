let key = "AIzaSyCH8aar9g3uEDi6wazPhlWbgIFyBf44UH0";
let list = "PLT9LozkkUQQsZMPL1p5fhg1q2tjaVLfWl";
let vidList = document.querySelector(".vidList");
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${list}`;
const sub_menuicon = document.querySelector(".sub_menuicon");
const sub_menutab = document.querySelector(".sub_menutab");
const menu_close = document.querySelector(".menu_close");

fetch(url)
    .then((data) => {
        return data.json();
    })
    .then((json) => {
        let items = json.items;
        let result = "";
        items.map((el) => {
            let title = el.snippet.title;

            result += `
            <article>
              <iframe src="https://www.youtube.com/embed/${el.snippet.resourceId.videoId}" frameborder = "0" width="100%" height="100%" allowfullscreen></iframe>
            </article>
                `;
        });

        vidList.innerHTML = result;
});



sub_menuicon.addEventListener("click", function(e) {
    e.preventDefault();
    sub_menutab.style.left = "0px";
})


menu_close.addEventListener("click", function(e) {
    e.preventDefault();
    sub_menutab.style.left = "-400px";
})