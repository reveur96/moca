const btn01 = document.querySelector(".btn01");
const btn02 = document.querySelector(".btn02");
const btn03 = document.querySelector(".btn03");
const btn04 = document.querySelector(".btn04");
const btn05 = document.querySelector(".btn05");
const btn06 = document.querySelector(".btn06");
const btn07 = document.querySelector(".btn07");

// const item01 = document.querySelector(".item01");
btn01.addEventListener("click", (e) => {
  let page01 = document.querySelector(".page01");
  // page01.scrollIntoView({behavior: 'smooth'});
    scrollTo({top: 500, behavior: 'smooth'});
  e.preventDefault();
});

btn02.addEventListener("click", (e) => {
  let page02 = document.querySelector(".page02");
  // page02.scrollIntoView({behavior: 'smooth'});
  scrollTo({top: 500, behavior: 'smooth'});
  e.preventDefault();
});

btn03.addEventListener("click", (e) => {
  let page03 = document.querySelector(".page03");
  // page03.scrollIntoView({behavior: 'smooth'});
  scrollTo({top: 1205, behavior: 'smooth'});
  e.preventDefault();
});

btn04.addEventListener("click", (e) => {
  let page04 = document.querySelector(".page04");
  // page04.scrollIntoView({behavior: 'smooth'});
  scrollTo({top: 2050, behavior: 'smooth'});
  e.preventDefault();
});

btn05.addEventListener("click", (e) => {
  let page05 = document.querySelector(".page05");
  // page05.scrollIntoView({behavior: 'smooth'});
  scrollTo({top: 3000, behavior: 'smooth'});
  e.preventDefault();
});

btn06.addEventListener("click", (e) => {
  let page06 = document.querySelector(".page06");
  // page06.scrollIntoView({behavior: 'smooth'});
  scrollTo({top: 4400, behavior: 'smooth'});
  e.preventDefault();
});

btn07.addEventListener("click", (e) => {
  let page07 = document.querySelector(".page07");
  // page07.scrollIntoView({behavior: 'smooth'});
  scrollTo({top: 5000, behavior: 'smooth'});
  e.preventDefault();
});