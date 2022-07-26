/** @format */

const doc = document.documentElement;
const docHeight = window.pageYOffset;
const docScene = docHeight / 6;

const collectBtn = document.querySelector("#today_collect_btn");
const reserveBtn = document.querySelector("#reserve_btn");
const topBtn = document.querySelector("#top_btn");

collectBtn.className = "today_collect_btn_invisible";
reserveBtn.className = "reserve_btn_invisible";
topBtn.className = "top_btn_invisible";

window.addEventListener("scroll", function () {
  if (docScene < doc.scrollTop) {
    collectBtn.style.animation = "collect_btn 1s forwards alternate";
    reserveBtn.style.animation = "reserve_btn 1s forwards alternate";
    topBtn.style.animation = "top_btn 1s forwards alternate";

    collectBtn.className = "today_collect_btn_visible";
    reserveBtn.className = "reserve_btn_visible";
    topBtn.className = "top_btn_visible";
  } else {
    collectBtn.style.animation = "collect_btn_reverse 1s forwards alternate";
    reserveBtn.style.animation = "reserve_btn_reverse 1s forwards alternate";
    topBtn.style.animation = "top_btn_reverse 1s forwards alternate";
  }
});

topBtn.addEventListener("click", (e) => {
  scrollTo({ top: 0, behavior: "smooth" });
  e.preventDefault();
});

// 오늘의 소장품 버튼 mouse event
const images = ["coll_01.png", "coll_02.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const Image = document.createElement("img");
const collectBtnA = document.querySelector("#today_collect_btn > a");
const collectBtnP = document.querySelector("#today_collect_btn > a > p");

Image.src = `images/${chosenImage}`;
collectBtnA.appendChild(Image);

Image.className = "today_collect_img_invisible";
collectBtnP.innerText = "오늘의" + "\n" + "소장품";

collectBtn.addEventListener("mouseenter", function () {
  Image.className = "today_collect_img_visible";
  Image.style.animation = "collect_img 1.5s forwards alternate";
  collectBtnP.innerText = "오늘의 소장품";
});

collectBtn.addEventListener("mouseleave", function () {
  Image.style.animation = "collect_img_reverse 1.5s forwards alternate";
  Image.className = "today_collect_img_invisible";
  collectBtnP.innerText = "오늘의" + "\n" + "소장품";
});