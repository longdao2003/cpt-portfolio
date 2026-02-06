export default function initAboutUs() {
  const $trigger = $(".about-me .trigger");
  const $main = $(".about-me .main");
  const mainBottom = $main.offset().top + $main.outerHeight();
  $(window).on("scroll", function () {
    const windowBottom = $(window).scrollTop() + $(window).height();
    if (mainBottom <= windowBottom) {
      $main.css("opacity", "1");
      $trigger.css({
        opacity: "0",
        transform: "translateX(50vw) translateY(-50vh)",
      });
    }
  });
}
