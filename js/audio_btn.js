/** @format */

const doc = document.documentElement;
const docHeight = window.pageYOffset;
const docScene = docHeight / 6;

const audioBtn = document.querySelector("#audio_guide_btn");
const reserveBtn = document.querySelector("#reserve_btn");
const topBtn = document.querySelector("#top_btn");

audioBtn.className = "audio_guide_btn_invisible";
reserveBtn.className = "reserve_btn_invisible";
topBtn.className = "top_btn_invisible";

window.addEventListener("scroll", function () {
  if (docScene < doc.scrollTop) {
    audioBtn.style.animation = "audio_btn 1s forwards alternate";
    reserveBtn.style.animation = "reserve_btn 1s forwards alternate";
    topBtn.style.animation = "top_btn 1s forwards alternate";

    audioBtn.className = "audio_guide_btn_visible";
    reserveBtn.className = "reserve_btn_visible";
    topBtn.className = "top_btn_visible";
  } else {
    audioBtn.style.animation = "audio_btn_reverse 1s forwards alternate";
    reserveBtn.style.animation = "reserve_btn_reverse 1s forwards alternate";
    topBtn.style.animation = "top_btn_reverse 1s forwards alternate";
  }
});

topBtn.addEventListener("click", (e) => {
  scrollTo({ top: 0, behavior: "smooth" });
  e.preventDefault();
});

// 오디오 가이드 버튼 mouse event
const audioBtnA = document.querySelector("#audio_guide_btn > a");
const audioBtnP = document.querySelector("#audio_guide_btn > a > p");

audioBtnP.innerText = "오디오" + "\n" + "가이드";

audioBtn.addEventListener("mouseenter", function () {
  audioBtnP.removeText;
  audioBtnP.innerText = "오디오 가이드" + "\n" + "바로듣기";
});

audioBtn.addEventListener("mouseleave", function () {
  audioBtnP.innerText = "오디오" + "\n" + "가이드";
});
