export default function initAboutUs() {
  var $aboutMe = $(".about-me");
  if ($aboutMe.length === 0) {
    return;
  }

  const $trigger = $(".about-me .trigger");
  const $main = $(".about-me .main");

  $(window).on("scroll", function () {
    const windowBottom = $(window).scrollTop() + $(window).height();

    const triggerTop = $trigger.offset().top;
    const triggerHeight = $trigger.outerHeight();
    const triggerOneThird = triggerTop + triggerHeight / 6;

    if (windowBottom >= triggerOneThird) {
      $main.css("opacity", "1");
      $trigger.css({
        opacity: "0",
        transform: "translateX(50vw) translateY(-50vh)",
      });
    }
  });
}
