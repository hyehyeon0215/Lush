
const mapContainer = document.getElementById("map");
const storeBtn = document.querySelectorAll(".result_list>ul>li");
const storeImg = document.querySelectorAll(".result_store>ul>li");
const store = document.querySelector(".result_store");
const localSearchBtn = document.querySelector(".localSearchBtn");
const resultList = document.querySelector(".result_list");
const sub_menuicon = document.querySelector(".sub_menuicon");
const sub_menutab = document.querySelector(".sub_menutab");
const menu_close = document.querySelector(".menu_close");

var mapoptions = {
    center: new kakao.maps.LatLng(37.583143, 127.0000885),
    level: 3
};

var map = new kakao.maps.Map(mapContainer, mapoptions);

const markerOptions = [
    {
        title: "대학로점",
        latlng: new kakao.maps.LatLng(37.583143, 127.0000885),
        imgSrc: '../img/icon/marker.png',
        imgSize: new kakao.maps.Size(25, 40),
        imgPos: { offset: new kakao.maps.Point(12.5, 20) },
        button: storeBtn[0]
    }, {
        title: "강남역점",
        latlng: new kakao.maps.LatLng(37.5010214, 127.0256159),
        imgSrc: '../img/icon/marker.png',
        imgSize: new kakao.maps.Size(25, 40),
        imgPos: { offset: new kakao.maps.Point(10, 30) },
        button: storeBtn[1]
    }, {
        title: "경리단길점",
        latlng: new kakao.maps.LatLng(37.540697, 126.995606),
        imgSrc: '../img/icon/marker.png',
        imgSize: new kakao.maps.Size(25, 40),
        imgPos: { offset: new kakao.maps.Point(10, 30) },
        button: storeBtn[2]
    }, {
        title: "홍대점",
        latlng: new kakao.maps.LatLng(37.5524451, 126.9213536),
        imgSrc: '../img/icon/marker.png',
        imgSize: new kakao.maps.Size(25, 40),
        imgPos: { offset: new kakao.maps.Point(10, 30) },
        button: storeBtn[3]
    }, {
        title: "명동역점",
        latlng: new kakao.maps.LatLng(37.5617513, 126.9852806),
        imgSrc: '../img/icon/marker.png',
        imgSize: new kakao.maps.Size(25, 40),
        imgPos: { offset: new kakao.maps.Point(10, 30) },
        button: storeBtn[4]
    }
];

markerOptions.forEach((el, index) => {
    const marker = new kakao.maps.Marker({
        map: map,
        position: el.latlng,
        title: el.title,
        image: new kakao.maps.MarkerImage(el.imgSrc, el.imgSize, el.imgPos)
    })

    el.button.addEventListener("click", (e) => {
        e.preventDefault();

        storeBtn.forEach((el) => { el.classList.remove("on") });
		el.button.classList.add("on");

		storeImg.forEach((el) => { 
			el.classList.remove("on"); 
		});
		storeImg[index].classList.add("on");

		store.style.display = "block";
		

        moveTo(el.latlng);
    })
})

localSearchBtn.addEventListener("click", (e)=> {
    resultList.classList.add("on");
})


function moveTo(target) {
    const moveLatlng = target;
    map.setCenter(moveLatlng);
}


sub_menuicon.addEventListener("click", function(e) {
    e.preventDefault();
    sub_menutab.style.left = "0px";
})


menu_close.addEventListener("click", function(e) {
    e.preventDefault();
    sub_menutab.style.left = "-400px";
})