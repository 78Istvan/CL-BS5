$(".slider_container").slick({
  dots: true,
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  autoplay: true,
  speed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

// increase image size onclick
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}

function closFullImg() {
  fullImgBox.style.display = "none";
}

// avtive class on menu
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
console.log("Hello world!");
