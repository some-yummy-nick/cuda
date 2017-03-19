$(".skills__circle--design").circliful({
  percent:90,
  backgroundColor:"#dfe8ed",
  foregroundColor:"#30bae7",
  animateInView: true,
  dataAnimation:1,
  dataAnimationStep:5
});

$(".skills__circle--html").circliful({
  percent:75,
  backgroundColor:"#dfe8ed",
  foregroundColor:"#d74680",
  animateInView: true,
  dataAnimation:1,
  dataAnimationStep:5
});

$(".skills__circle--graphic").circliful({
  percent:70,
  backgroundColor:"#dfe8ed",
  foregroundColor:"#15c7a8",
  animateInView: true,
  dataAnimation:1,
  dataAnimationStep:5
});
$(".skills__circle--ui").circliful({
  percent:85,
  backgroundColor:"#dfe8ed",
  foregroundColor:"#eb7d4b",
  animateInView: true,
  dataAnimation:1,
  dataAnimationStep:5
});

$(".portfolio__tab").click(function () {
  $(".portfolio__tab").removeClass("portfolio__tab--active").eq($(this).index()).addClass("portfolio__tab--active");
  $(".portfolio__items").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("portfolio__item--active");