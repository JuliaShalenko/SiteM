$(function () {
  let header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();

  /*Fixed header*/
  checkScroll(scrollOffset);
  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });
  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /*Smooth scroll*/
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let $this = $(this),
      blockId = $this.data("scroll"),
      blockOfSet = $(blockId).offset().top;

    $("#nav a ").removeClass("active");
    $this.addClass("active");
    $("html, body").animate(
      {
        scrollTop: blockOfSet,
      },
      500
    );
  });

  /*Menu nav toggle*/
  $("#nav_toggle").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $(nav).toggleClass("active");
  });

  /*Collaps*/

  $("[data-collapse]").on("click", function (event) {
    event.preventDefault();
    let $this = $(this),
      blockId = $this.data("collapse");
    $this.toggleClass("active");
  });

  /*Sllider*/
  $("[data-sllider]").slick({
    Infinity: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
