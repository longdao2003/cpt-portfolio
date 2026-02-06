export default function initBanner() {
  let tl = gsap.timeline();
  var $banner = $(".banner");

  if ($banner.length === 0) {
    return;
  }
  gsap.set(
    ".banner .hero-title,.banner .hero-info > p,.banner .gradient-button,.banner .social-media",
    {
      opacity: 0,
      y: 30,
    },
  );

  tl.to(".banner", {
    opacity: 1,
  })
    .to(".banner .overlay", {
      opacity: 0,
      delay: 0.3,
    })
    .to(".banner .hero-title", {
      opacity: 1,
      y: 0,
      duration: 0.6,
    })
    .to(".banner .hero-info > p", {
      opacity: 1,
      y: 0,
      duration: 0.4,
    })
    .to(".banner .gradient-button", {
      opacity: 1,
      y: 0,
      duration: 0.3,
    })
    .to(".banner .social-media", {
      opacity: 1,
      y: 0,
      duration: 0.4,
    });
}
