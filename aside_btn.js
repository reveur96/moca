const doc = document.documentElement;
const docHeight = window.pageYOffset;
const docScene = (docHeight/6);

const collectBtn = document.querySelector("#today_collect_btn");
const reserveBtn = document.querySelector("#reserve_btn");
const topBtn = document.querySelector("#top_btn");

  collectBtn.className = "today_collect_btn_invisible";
  reserveBtn.className = "reserve_btn_invisible";
  topBtn.className = "top_btn_invisible";

window.addEventListener('scroll', function () {
  
  if (docScene < doc.scrollTop) {
    collectBtn.className = "today_collect_btn_visible";
    reserveBtn.className = "reserve_btn_visible";
    topBtn.className = "top_btn_visible";
  } else {
    collectBtn.className = "today_collect_btn_invisible";
    reserveBtn.className = "reserve_btn_invisible";
    topBtn.className = "top_btn_invisible";
  };
});