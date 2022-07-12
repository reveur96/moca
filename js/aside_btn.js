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
    
  };

});

topBtn.addEventListener("click", (e) => {

  scrollTo({top: 0, behavior: 'smooth'});
  e.preventDefault();

});
