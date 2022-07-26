// $(function(){

//     var $ul = $('.c_child_img');
//     var $offset = 50;
//     var $ulOST = $ul.offset().top - $offset;

//     $(window).scroll(function(){
//         if($(this).scrollTop() > $ulOST){
//             $ul.find('img').addClass('animate');
//         }

//     });


// });

const doc02 = document.documentElement;
const docHeight02 = window.pageYOffset;
const docScene02 = 1000;
const book = document.querySelector("#c_child > ul");
const ChildBook01 = document.querySelector("#book01");
const ChildBook02 = document.querySelector("#book02");
const ChildBook03 = document.querySelector("#book03");

book.className = "book_invisible";


window.addEventListener('scroll', function () {
  
  if (docScene02 < doc02.scrollTop) {

    ChildBook01.style.animation = "book 1s forwards alternate";
    ChildBook02.style.animation = "book 1s forwards alternate";
    ChildBook03.style.animation = "book 1s forwards alternate";

    book.className = "book_visible";

  }
});

// ChildBook03.addEventListener("click", (e) => {

//   scrollTo({top: 0, behavior: 'smooth'});
//   e.preventDefault();

// });

