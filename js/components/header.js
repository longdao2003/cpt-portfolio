export default function initHeader() {
  let isMenuOpen = false;
  const $iconLines = $(".l-header .icon-line");
  const $mobileMenuDropdown = $(".mobile-menu-dropdown");
  const $header = $(".l-header");
  const initialHeaderHeight = $header.height();
  const expandedHeaderHeight =
    $(".l-header .container").outerHeight() +
    parseFloat($header.css("padding-top")) +
    parseFloat($header.css("padding-bottom"));
  console.log(expandedHeaderHeight);
  $(".mobile-menu").on("click", function () {
    isMenuOpen = !isMenuOpen;
    $mobileMenuDropdown.toggleClass("is-active");
    if (isMenuOpen) {
      $iconLines.each(function (index) {
        if (index === 0) {
          $(this).css("transform", "rotate(45deg) translateY(6px)");
        }

        if (index === 1) {
          $(this).css("transform", "rotate(-45deg) translateY(-6px)");
        }
        $header.css("grid-template-rows", expandedHeaderHeight);
      });
    } else {
      $iconLines.each(function (index) {
        if (index === 0) {
          $(this).css("transform", "rotate(0) translateY(0)");
        }

        if (index === 1) {
          $(this).css("transform", "rotate(0) translateY(0)");
        }
      });
      $header.css("grid-template-rows", initialHeaderHeight);
    }
  });
}
