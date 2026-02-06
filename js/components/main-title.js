export default function initMainTitle() {
  $(".subtitle-group").each(function (index, element) {
    const children = $(element).children();

    children.each(function (childIndex) {
      const initialTransform = $(this).css("transform");
      $(this).data("initialTransform", initialTransform);

      if (childIndex % 2 === 0) {
        gsap.set(this, { xPercent: -20, opacity: 0 });
      } else {
        gsap.set(this, { xPercent: 20, opacity: 0 });
      }
    });

    children.each(function (childIndex) {
      const initialTransform = $(this).data("initialTransform");

      gsap.to(this, {
        transform: initialTransform,
        opacity: 1,
        duration: 0.6,
        delay: childIndex * 0.1,
        scrollTrigger: {
          trigger: element,
          start: "top 40%",
        },
      });
    });
  });
}
